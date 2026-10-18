import React, { useRef, useEffect, useCallback, ReactNode } from 'react';

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  extraScale?: number;
  children: ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  start: number;
}

const easeFuncs = {
  linear: (t: number) => t,
  'ease-in': (t: number) => t * t,
  'ease-out': (t: number) => t * (2 - t),
  'ease-in-out': (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
};

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = '#ffffff',
  sparkSize = 12,
  sparkRadius = 20,
  sparkCount = 12,
  duration = 500,
  easing = 'ease-out',
  extraScale = 1.2,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isRunningRef = useRef<boolean>(false);
  const runAnimRef = useRef<(() => void) | null>(null);

  // Initialize click sound audio
  useEffect(() => {
    try {
      const audio = new Audio('/audio/click.mp3');
      audio.volume = 0.35;
      audioRef.current = audio;
    } catch {
      // Audio playback fallback
    }
  }, []);

  // Set canvas size strictly to window viewport dimensions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  const ease = easeFuncs[easing];

  // Particle render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const loop = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.start;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = ease(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLen = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLen) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLen) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      if (sparksRef.current.length > 0) {
        animFrameRef.current = requestAnimationFrame(loop);
      } else {
        isRunningRef.current = false;
      }
    };

    runAnimRef.current = () => {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        animFrameRef.current = requestAnimationFrame(loop);
      }
    };

    return () => {
      isRunningRef.current = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [sparkColor, sparkSize, sparkRadius, duration, ease, extraScale]);

  // Global window click listener: clientX & clientY exactly match viewport-fixed canvas coordinates
  const handleWindowClick = useCallback(
    (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      const now = performance.now();

      // Spawn radial spark lines exactly at the clicked pixel
      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        x: clickX,
        y: clickY,
        angle: (2 * Math.PI * i) / sparkCount,
        start: now,
      }));

      sparksRef.current.push(...newSparks);
      if (runAnimRef.current) {
        runAnimRef.current();
      }

      // Play click.mp3 audio
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    },
    [sparkCount]
  );

  useEffect(() => {
    window.addEventListener('click', handleWindowClick, { passive: true });
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [handleWindowClick]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        cursor: 'inherit',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          imageRendering: 'crisp-edges',
          zIndex: 99999,
        }}
      />
      {children}
    </div>
  );
};

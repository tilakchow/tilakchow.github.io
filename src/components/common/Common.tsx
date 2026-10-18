import React, { ReactNode } from 'react';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  className = '',
}) => {
  return (
    <div className={`tooltip-wrapper ${className}`}>
      {children}
      <span className={`tooltip-bubble tooltip-${position}`}>{text}</span>
    </div>
  );
};

export const SectionTitle: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`section-title-wrapper ${className}`} style={{ marginBottom: '24px' }}>
      <h2
        style={{
          fontFamily: 'Figtree, sans-serif',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {children}
      </h2>
    </div>
  );
};

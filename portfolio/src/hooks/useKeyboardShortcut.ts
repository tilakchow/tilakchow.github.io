import { useEffect } from 'react';

export interface ShortcutOptions {
  key: string;
  ctrlOrMeta?: boolean;
  onTrigger: () => void;
  preventDefault?: boolean;
}

export function useKeyboardShortcut({
  key,
  ctrlOrMeta = false,
  onTrigger,
  preventDefault = true,
}: ShortcutOptions) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if target is an interactive element when not using modifier
      const isInput =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable;

      if (ctrlOrMeta) {
        const matchesModifier = e.ctrlKey || e.metaKey;
        if (matchesModifier && e.key.toLowerCase() === key.toLowerCase()) {
          if (preventDefault) e.preventDefault();
          onTrigger();
        }
      } else if (!isInput && e.key.toLowerCase() === key.toLowerCase()) {
        if (preventDefault) e.preventDefault();
        onTrigger();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, ctrlOrMeta, onTrigger, preventDefault]);
}

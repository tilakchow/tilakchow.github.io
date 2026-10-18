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
    <div className={`section-title-wrapper ${className}`} style={{ marginBottom: '16px' }}>
      <div className="card-title">
        <span className="corner top left"></span>
        <span className="corner top right"></span>
        <span className="corner bottom left"></span>
        <span className="corner bottom right"></span>
        {children}
      </div>
    </div>
  );
};

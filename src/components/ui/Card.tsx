import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false 
}) => {
  const baseClasses = 'glass-panel rounded-3xl overflow-hidden relative z-10';
  const hoverClasses = hover ? 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ease-out' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};


import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
  header?: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({ children, isActive, className = "", header }) => {
  return (
    <div 
      className={`absolute inset-0 w-full h-full transition-all duration-700 transform ${
        isActive ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none'
      } ${className}`}
    >
      {header}
      <div className="h-full w-full overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};
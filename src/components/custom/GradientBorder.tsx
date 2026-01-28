import type { ReactNode } from 'react';

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
}

export function GradientBorder({
  children,
  className = '',
  borderWidth = 3,
}: GradientBorderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated gradient border */}
      <div
        className="absolute -inset-[3px] rounded-full animate-spin-slow"
        style={{
          background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4, #ec4899, #8b5cf6)',
          backgroundSize: '300% 100%',
          animation: 'gradient-border 4s linear infinite',
        }}
      />
      {/* Inner content */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          padding: `${borderWidth}px`,
          background: '#0a0a0f',
        }}
      >
        {children}
      </div>
      {/* Glow effect */}
      <div
        className="absolute -inset-4 rounded-full blur-xl opacity-50 animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)',
          zIndex: -1,
        }}
      />
    </div>
  );
}

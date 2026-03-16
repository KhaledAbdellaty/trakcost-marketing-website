import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  size?: 'sm' | 'default' | 'lg' | 'full';
  background?: 'light' | 'dark' | 'gray' | 'none';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, size = 'default', background = 'none', children, ...props }, ref) => {
    
    const bgClasses = {
      light: 'bg-[#0f172a] text-white',
      dark: 'bg-[#0f172a] text-white',
      gray: 'bg-[#0f172a] text-white',
      none: 'bg-transparent text-white',
    };

    const sizeClasses = {
      sm: 'py-12 md:py-16',
      default: 'py-20 md:py-32',
      lg: 'py-32 md:py-48',
      full: 'min-h-screen flex items-center',
    };

    return (
      <section
        ref={ref}
        className={cn('relative w-full overflow-hidden', bgClasses[background], sizeClasses[size], className)}
        {...props}
      >
        <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', containerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = 'Section';

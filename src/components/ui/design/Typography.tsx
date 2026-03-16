'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

const typographyVariants = cva('text-brand-dark', {
  variants: {
    variant: {
      h1: 'font-heading text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1]',
      h2: 'font-heading text-4xl sm:text-5xl font-semibold tracking-tight leading-tight',
      h3: 'font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-tight',
      h4: 'font-heading text-2xl sm:text-3xl font-medium tracking-tight',
      p: 'font-sans text-base sm:text-lg leading-relaxed text-brand-dark/80',
      large: 'font-sans text-lg sm:text-xl leading-relaxed text-brand-dark/80',
      small: 'font-sans text-sm font-medium leading-none text-brand-dark/70',
      hero: 'font-heading text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1.05]',
      label: 'font-sans text-xs uppercase tracking-widest font-semibold text-brand-orange',
    },
    align: {
      left: 'text-start',
      center: 'text-center',
      right: 'text-end',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'left',
  },
});

export interface TypographyProps extends HTMLMotionProps<'p'>, VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, align, as, ...props }, ref) => {
    // Determine the HTML tag to use
    const tag = (as as string) || (
      variant === 'h1' || variant === 'hero' ? 'h1'
        : variant === 'h2' ? 'h2'
        : variant === 'h3' ? 'h3'
        : variant === 'h4' ? 'h4'
        : variant === 'small' || variant === 'label' ? 'span'
        : 'p'
    );

    // Cast motion to any to access dynamic tags safely without type errors for unknown `as` string tags
    const MotionComponent = (motion as any)[tag] || motion.p;

    return (
      <MotionComponent
        ref={ref}
        className={cn(typographyVariants({ variant, align, className }))}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';

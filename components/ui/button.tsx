import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-brand-black-950 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-brand-black-950 dark:focus-visible:ring-brand-orange-400 hover-lift',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-brand-black-950 hover:from-brand-orange-400 hover:to-brand-orange-500 shadow-lg hover:shadow-brand-orange-500/25',
        destructive:
          'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 shadow-lg hover:shadow-red-500/25',
        outline:
          'border-2 border-brand-orange-500 bg-transparent text-brand-orange-500 hover:bg-brand-orange-500 hover:text-brand-black-950 dark:border-brand-orange-400 dark:text-brand-orange-400 dark:hover:bg-brand-orange-400',
        secondary:
          'bg-brand-black-800 text-brand-orange-400 hover:bg-brand-black-700 border border-brand-black-600 hover:border-brand-orange-500',
        ghost:
          'text-brand-orange-500 hover:bg-brand-orange-500/10 hover:text-brand-orange-400',
        link: 'text-brand-orange-500 underline-offset-4 hover:underline hover:text-brand-orange-400',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 rounded-lg px-4 text-sm',
        lg: 'h-14 rounded-xl px-8 text-base',
        icon: 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

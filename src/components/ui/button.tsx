import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from "@/utils/cn"

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90 hover:bg-surface-darkPrimary',
        secondary: 'bg-surface-placeholder hover:bg-gray-300',
        destructive:
          'bg-surface-error text-destructive-foreground  hover:bg-surface-darkError disabled:bg-destructive disabled:opacity-50',
        outline:
          'border-2 border-primary text-text-brand hover:bg-surface-secondary disabled:border-surface-disable disabled:text-surface-disable disabled:bg-transparent border-none',
        ghost:
          'border-2 border-surface-error text-surface-error hover:bg-surface-lightError disabled:bg-surface-lightError disabled:opacity-50',
        success:
          'bg-surface-success text-white hover:bg-surface-darkSuccess disabled:bg-surface-success disabled:opacity-50',
        warning:
          'bg-surface-warning text-white  hover:bg-orange-600 disabled:bg-surface-warning disabled:opacity-50',
        link: 'text-text-secondary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-9 rounded-lg px-3 text-xs',
        lg: 'h-14 rounded-lg px-8',
        icon: 'h-9 w-9',
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
  loading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, disabled = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={loading || disabled}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

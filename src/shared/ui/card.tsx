import React from "react";

import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/utils";

const СardVariants = cva(" ", {
  variants: {
    variant: {
      default: "bg-[#F0F0F0] rounded-[8px]",
    },
    size: {
      default: "p-4 sm:p-6",
      md: "p-6",
      sm: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ICardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof СardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(СardVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Card, СardVariants };

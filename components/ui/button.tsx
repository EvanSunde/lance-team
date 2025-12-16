import * as React from "react";

const cn = (...classes: (string | boolean | null | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type ButtonSize = "sm" | "default" | "lg";

const buttonVariants = (variant: ButtonVariant, size: ButtonSize) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50";

  const sizes = {
    sm: "h-9 px-3",
    default: "h-10 px-4",
    lg: "h-14 px-8 text-lg",
  };

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-white text-white hover:bg-white/10",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    ghost: "text-gray-300 hover:bg-gray-700/50",
    link: "text-blue-400 underline-offset-4 hover:underline",
  };

  return cn(base, sizes[size], variants[variant]);
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

// radix-ui साठी सोपा Slot रिप्लेसमेंट
const DefaultSlot = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  React.PropsWithChildren<{ className?: string; [key: string]: any }>
>(({ children, className, ...props }, ref) => {
  if (React.isValidElement(children)) {
    const childProps = children.props as { className?: string; [key: string]: any };
    return React.cloneElement(children, {
      className: cn(childProps.className, className),
      ref,
      ...props,
    } as any);
  }
  return <button ref={ref as React.Ref<HTMLButtonElement>} className={className} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
});

DefaultSlot.displayName = "DefaultSlot";


export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Component = asChild ? DefaultSlot : "button";
    return (
      <Component
        className={cn(buttonVariants(variant, size), className)}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
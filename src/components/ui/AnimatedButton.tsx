
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children: React.ReactNode;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = "default", size = "default", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative group font-medium transition-all duration-200 ease-out overflow-hidden",
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-navy text-cream hover:bg-navy-light",
          variant === "outline" && "border border-navy text-navy hover:bg-navy/5",
          variant === "ghost" && "text-navy hover:bg-navy/5",
          size === "default" && "h-12 px-8",
          size === "sm" && "h-9 px-5",
          size === "lg" && "h-14 px-10 text-base",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 transform translate-y-full bg-gold group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };

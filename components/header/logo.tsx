import { FC } from "react";

const cn = (...classes: (string | boolean | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="/logo1.png" 
      alt="Lance Team Logo"
      className={cn(
        "h-8 w-auto bg-transparent object-contain",
        className
      )}
      draggable={false}
    />
  );
};

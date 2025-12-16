import { FC } from "react";


const cn = (...classes: (string | boolean | null | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => (
  <span
    className={cn(
      "text-xl font-extrabold text-white tracking-widest",
      className
    )}
  >
    QUANTUM MINDS
  </span>
);
import { FC } from "react";
import Image from "next/image";

const cn = (...classes: (string | boolean | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Image
      src="/logo1.png" 
      alt="Lance Team Logo"
      width={68} // h-17 is about 68px
      height={68}
      className={cn(
        "h-17 w-auto bg-transparent object-contain rounded-full",
        className
      )}
      draggable={true}
    />
  );
};

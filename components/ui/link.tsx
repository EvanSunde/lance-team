import React, { FC } from "react";

// युटिलिटी क्लासेससाठी cn फंक्शन (आयात त्रुटी टाळण्यासाठी स्थानिकरित्या परिभाषित)
const cn = (...classes: (string | boolean | null | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: FC<LinkProps> = ({
  href,
  children,
  className,
  ...props
}) => (
  <a href={href} className={cn("duration-150", className)} {...props}>
    {children}
  </a>
);
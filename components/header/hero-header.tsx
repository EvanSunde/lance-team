"use client";

import { FC, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


const cn = (...classes: (string | boolean | null | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

import { Logo } from "./logo";
import { Button } from "../ui/button";
import { menuItems } from "./menu-data";

export const HeroHeader: FC = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className={cn(
          "fixed z-20 w-full transition-all",
          isScrolled
            ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-700"
            : "bg-transparent"
        )}
      >
        <div className="px-4 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2">
            <Logo />
          </a>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuState(!menuState)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {menuState ? <X /> : <Menu />}
          </button>

          {/* MENU */}
          <div
            className={cn(
              "absolute lg:static top-full left-0 w-full lg:w-auto",
              "bg-gray-800 lg:bg-transparent p-6 lg:p-0",
              menuState ? "block" : "hidden lg:block"
            )}
          >
            <ul className="flex flex-col lg:flex-row gap-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Button asChild variant="ghost" size="sm">
                    <a href={item.href}>{item.name}</a>
                  </Button>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
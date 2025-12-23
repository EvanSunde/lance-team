"use client";

import { FC, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const cn = (...classes: (string | boolean | null | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

import { Logo } from "./logo";
import { menuItems } from "./menu-data";

export const HeroHeader: FC = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Home");
  const pathname = usePathname();
  
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    menuItems.forEach((item) => {
      const id = item.href.startsWith('#') ? item.href.slice(1) : null;
      if (!id) return;
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setActiveItem(item.name);
            });
          },
          { rootMargin: "-20% 0px -50% 0px", threshold: 0.1 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header className="relative">
      <nav
        className={cn(
          "fixed z-50 w-full transition-all duration-500",
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 py-3"
            : "bg-transparent py-6"
        )}
      >
        {/* We use a 3-column grid to define the Left, Middle, and Right zones */}
        <div className="max-w-8xl mx-auto px-6 grid grid-cols-3 items-center relative h-15">
          
          {/* ZONE 1: LOGO */}
          <div className="flex justify-start z-50">
            <Link href="/"><Logo /></Link>
          </div>

          {/* ZONE 2: MENU 
              If Home section active: Move to right side (col 3)
              If Other sections: Stay in middle (col 2)
          */}
          <div
            className={cn(
              "transition-all duration-500 ease-in-out",
              "absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent",
              
              // POSITIONING LOGIC
              activeItem === "Home" 
                ? "lg:col-start-3 lg:flex lg:justify-end" // Home: Right side
                : "lg:col-start-2 lg:flex lg:justify-center", // Others: Center
              
              menuState ? "block border-b border-gray-800" : "hidden lg:block"
            )}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3 p-6 lg:p-0">
              {menuItems.map((item) => {
                const isActive = activeItem === item.name;
                return (
                  <li key={item.name} className="w-full lg:w-auto">
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          e.preventDefault();
                          const target = document.querySelector(item.href);
                          target?.scrollIntoView({ behavior: "smooth" });
                        }
                        setActiveItem(item.name);
                        setMenuState(false);
                      }}
                      className={cn(
                        "relative text-[10px] font-black tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all flex items-center justify-center gap-2",
                        isActive 
                          ? "text-blue-400 border border-blue-500/50 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)] animate-pulse" 
                          : "text-gray-500 hover:text-white border border-transparent"
                      )}
                    >
                      {isActive && (
                        <span className="flex h-1.5 w-1.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                        </span>
                      )}
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ZONE 3: TOGGLE (Pinned to right) */}
          <div className="flex justify-end z-50">
            <button onClick={() => setMenuState(!menuState)} className="lg:hidden text-white p-2">
              {menuState ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
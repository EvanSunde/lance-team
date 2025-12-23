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
              // Priority given to the item currently intersecting the detection zone
              if (entry.isIntersecting) {
                setActiveItem(item.name);
              }
            });
          },
          { 
            // Narrower detection zone (Top 20% to Bottom 50% of screen)
            rootMargin: "-20% 0px -50% 0px", 
            threshold: 0.1 
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    const handleManualDetection = () => {
      const scrollPos = window.scrollY;

      // 1. TOP OF PAGE: Force "Home" highlight when at the very top
      if (scrollPos < 100) {
        setActiveItem("Home");
        return;
      }

      // 2. BOTTOM OF PAGE: Force "Contact" highlight if at the very end
      if ((window.innerHeight + scrollPos) >= document.body.offsetHeight - 50) {
        setActiveItem("Contact");
      }
    };

    window.addEventListener("scroll", handleManualDetection);
    
    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", handleManualDetection);
    };
  }, [isHomePage]);


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
        <div className="max-w-8xl mx-auto px-2 h-10 flex items-center justify-between relative">
          
          <div className="shrink-0 z-50">
            <Link href="/"><Logo /></Link>
          </div>

         <div
  className={cn(
    "transition-all duration-500 ease-in-out",
    "absolute lg:fixed top-full lg:top-auto left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent",
    
    // THE FIX:
    isHomePage 
      ? "lg:static lg:ml-12 lg:translate-x-0" // Home: Next to logo (leftmost)
      : "lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:top-8", // Other: Center of SCREEN
      
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
                        // Smooth scroll logic
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

          <button onClick={() => setMenuState(!menuState)} className="lg:hidden text-white z-50 p-2">
            {menuState ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </nav>
    </header>
  );
};
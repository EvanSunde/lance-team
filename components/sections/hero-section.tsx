"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Reusable component for the abstract glowing circles
const AbstractCircle: FC<{ className: string, size?: string }> = ({ className, size = 'w-[500px] h-[500px]' }) => (
    <div
        className={cn(
            "absolute rounded-full opacity-30 pointer-events-none",
            "bg-gradient-to-br from-blue-600/60 to-purple-600/60 blur-3xl",
            size,
            className
        )}
    />
);

export const HeroSection: FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-36 pb-24 sm:pt-48 sm:pb-36 min-h-screen flex items-center scroll-snap-align-start">
      {/* Abstract Circles Background */}
      <div className="absolute inset-0 z-0">
        {/* Large Blue Glow Top-Left */}
        <AbstractCircle 
            className="top-0 left-0 w-[600px] h-[600px] bg-blue-500/30 transform -translate-x-1/3 -translate-y-1/3"
            size="w-[600px] h-[600px]"
        />
        {/* Medium Purple Glow Bottom-Right */}
        <AbstractCircle 
            className="bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/30 transform translate-x-1/3 translate-y-1/3"
            size="w-[500px] h-[500px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-balance text-5xl font-extrabold text-white sm:text-6xl lg:text-8xl">
            QUANTUM MINDS
          </h1>

          <h2 className="mt-2 text-balance text-3xl font-extrabold text-white sm:text-4xl lg:text-6xl">
            Freelance Development, Elevated.
          </h2>

          <p className="mt-6 text-2xl font-bold text-blue-400">
            Building scalable digital products with modern tools and clean design.
          </p>

          <p className="mt-8 max-w-xl text-lg text-gray-300">
            We are a focused team of developers specializing in AI, backend, and Frontend. Our mission is to deliver reliable, scalable software solutions
            that solve real-world problems.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {/* View Projects */}
            <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl
               bg-blue-500 px-6 py-3 text-base font-semibold text-white
               transition hover:bg-blue-600"
             >
              View Projects
            </a>

             {/* Contact Us */}
              <a
              href="#contact"
               className="inline-flex items-center justify-center rounded-xl
               border border-gray-700 px-6 py-3 text-base font-semibold
               text-gray-200 transition hover:border-blue-400
               hover:text-blue-400"
             >
               Contact Us
              </a>
          </div>

        </div>

        {/* Right mockup (The circled part) */}
      </div>
    </section>
  );
};
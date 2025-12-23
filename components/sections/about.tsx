"use client";

import { FC } from "react";

export const AboutSection: FC = () => {
  const captionStyle =
    "absolute top-0 left-0 -translate-y-1/2 bg-gray-900 px-6 text-sm text-blue-400 font-semibold";

  return (
    <section
      id="about"
      className="bg-gray-900 py-32 md:py-48 text-gray-200 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-7xl relative px-4 sm:px-6 lg:px-8">
        {/* Caption */}
        <div className="relative border-t-4 border-gray-700 pt-6">
          <span className={captionStyle}>Who We Are</span>
        </div>

        <div className="mt-12 gap-16 lg:grid lg:grid-cols-2 md:mt-24">
          {/* Left Column */}
          <div className="lg:pr-12">
            <h2 className="text-5xl font-extrabold sm:text-6xl text-white">
              A small team.
              <br />
              <span className="text-blue-400">
                Serious about building real products.
              </span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-0">
            <p className="text-xl text-gray-400 leading-relaxed">
              We are a Four-person freelance development group that works
              together to design, build, and deliver reliable software
              solutions. Instead of working alone, we collaborate as a focused
              team—sharing responsibility, ideas, and execution.
            </p>

            <p className="text-xl text-gray-400 leading-relaxed mt-6">
              Our approach is simple: take ownership of projects we believe in,
              communicate clearly with clients, and deliver clean, scalable
              solutions that actually solve problems.
            </p>

            <h3 className="text-3xl font-bold text-white mt-12 mb-4">
              How We Work
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 mr-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Direct collaboration — no middlemen, no outsourcing.
              </li>

              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 mr-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 0 0118 0z"
                  />
                </svg>
                Shared responsibility across design, development, and delivery.
              </li>

              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 mr-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Focus on quality, performance, and long-term maintainability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

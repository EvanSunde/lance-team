"use client";

import { FC } from "react";
import Image from "next/image";
// Assuming you have a standard Link component or use next/link
import { Link } from "../ui/link"; 

interface TeamMember {
  name: string;
  role: string;
  skills: string;
  avatar: string;
  link?: string;
}

const members: TeamMember[] = [
  
  {
    name: "Evan Sunde",
    role: "Backend & Cloud Engineer",
    skills: "Go, Python, AI Agents, JavaScript, SQL, NoSQL, Cloud Hosting",
    avatar: "/evan.jpeg",
  },
  {
    name: "Sahaj Gyawali",
    role: "Full Stack Developer",
    skills: "Python, JavaScript, FastAPI,ML,  React JS, Next JS",
    avatar: "/sahaj.jpeg",
  },
  {
    name: "Satij Aryal",
    role: "Marketing Manager & Frontend Developer",
    skills: "C, JavaScript, Brand Strategy",
    avatar: "/satij.jpeg",
  },
  {
    name: "Akash Bhandari",
    role: "Product Designer ",
    skills: "Dart, Flutter and C",
    avatar: "/akash.jpeg",
  },
];

export const TeamSection: FC = () => {
  return (
    <section id="team" className="bg-gray-900 py-32 text-gray-200 w-full">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Headr */}
        <div className="relative border-t border-gray-700 pt-6">
          <span className="absolute -top-3 left-0 bg-gray-900 px-4 text-sm font-semibold tracking-wider uppercase text-blue-400">
            Our Team
          </span>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            Meet the team who we are..
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our team of skilled professionals is dedicated to delivering top-notch solutions that drive success and innovation.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="mt-24 w-full grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="group bg-gray-800/50 border border-gray-700 rounded-2xl p-8
                         flex flex-col items-center text-center
                         transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800"
            >
              {/* Image Container */}
              <div className="relative h-66 w-66 mb-8">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover
                             grayscale transition duration-500 group-hover:grayscale-0 ring-2 ring-gray-700 group-hover:ring-blue-400"
                />
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-blue-400">
                {member.role}
              </p>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed min-h-[3rem]">
                {member.skills}
              </p>

              {member.link && (
                <Link
                  href={member.link}
                  className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Profile <span className="ml-2">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
"use client";

import { FC } from "react";
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
    name: "Sahaj Gyawali",
    role: "AI & ML Engineer",
    skills: "Python, JavaScript, Machine Learning, Deep Learning, SQL",
    avatar: "/sahaj.jpeg",
  },
  {
    name: "Evan Sunde",
    role: "Backend & Cloud Engineer",
    skills:
      "Go, Python, AI Agents, JavaScript, SQL, NoSQL, Cloud Hosting & Infrastructure",
    avatar: "/evan.jpeg",
  },
  {
    name: "Satij Aryal",
    role: "Systems & Frontend Developer",
    skills: "C, JavaScript",
    avatar: "/satij.jpeg",
  },
];

export const TeamSection: FC = () => {
  return (
    <section
      id="team"
      className="bg-gray-900 py-32 text-gray-200 w-screen"
    >
      {/* HEADER */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative border-t border-gray-700 pt-6">
          <span className="absolute -top-3 left-0 bg-gray-900 px-4 text-sm font-semibold text-blue-400">
            Our Team
          </span>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A focused team combining AI, backend, and systems expertise to build
            scalable, real-world solutions.
          </p>
        </div>
      </div>

      {/* TEAM MEMBERS */}
      <div className="mt-24 px-6">
        <div className="mx-auto max-w-7xl grid gap-24 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-gray-800 border border-gray-700 rounded-xl p-8
                         flex flex-col items-center text-center
                         transition hover:border-blue-400/60"
            >
              {/* IMAGE */}
              <img
                src={member.avatar}
                alt={member.name}
                className="h-[300px] w-[300px] rounded-full object-cover
                           grayscale transition duration-300 hover:grayscale-0"
              />

              {/* TEXT */}
              <h3 className="mt-9 text-3xl font-bold text-white">
                {member.name}
              </h3>

              <p className="mt-2 text-blue-400 font-semibold">
                {member.role}
              </p>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {member.skills}
              </p>

              {member.link && (
                <Link
                  href={member.link}
                  className="mt-9 text-blue-400 hover:underline"
                >
                  View Profile →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";
import { Link } from "../ui/link"; 

import { FC } from "react";
import { 
  Server, 
  Code, 
  Palette, 
  Cpu, 
  Zap, 
  Layers, 
  Database 
} from "lucide-react";

const services = [
  {
    title: "Web Hosting",
    description: "Enterprise-grade hosting with 99.9% uptime, shielded by high-level security for total reliability.",
    avatar:"/webhosting.jpeg",
    
  },
  {
    title: "Web Apps",
    description: "Custom-built, feature-rich applications designed to solve complex business logic with ease.",
    avatar:"/webapp.jpeg",
    
  },
  {
    title: "AI Development",
    description: "Integrating intelligent neural networks and automation to give your business a competitive edge.",
    avatar:"/AI.jpeg",
   
  },
  {
    title: "Graphics Designing",
    description: "Visual storytelling and brand identity that captures attention and builds lasting trust.",
    avatar:"/graphic.jpeg",
    
  },
  {
    title: "Responsive Webapps",
    description: "Fluid, device-agnostic interfaces that provide a seamless experience from mobile to desktop.",
    avatar:"/responsive.jpeg",
    
  },
  {
    title: "Back-end Services",
    description: "Robust, scalable server-side architecture built to handle massive data with zero lag.",
    avatar:"/backend.jpeg",
   
  },
];

export const ServicesSection: FC = () => {
  const captionStyle = "absolute top-0 left-0 -translate-y-1/2 bg-gray-900 px-6 text-sm text-blue-400 font-semibold";

  return (
    <section id="services" className="bg-gray-900 py-32 md:py-48 text-gray-200 scroll-snap-align-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with the "TeamSection" style cutout */}
        <div className="relative border-t-4 border-gray-700 pt-6 mb-20">
          <span className={captionStyle}>
            What We Offer
          </span>
          <h2 className="text-4xl font-extrabold sm:text-5xl text-white mt-4">
            Our Expertise. Your Growth.
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl">
            We bridge the gap between complex technology and elegant user experiences. 
            From the server rack to the final pixel, we handle it all.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Optional: Theme Picture Placeholder */}
              {/* Once you generate your images, replace this div with an <img /> */}
              <div className="w-full h-60 mb-6 bg-gray-900/50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-700 group-hover:border-blue-400/30 transition-colors">
                <div className="text-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {service.avatar ? (
                    <img 
                      src={service.avatar}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : 
                  (<Server size={48} />)
                  }
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed flex-grow">
                {service.description}
              </p>

              
            </div>
          ))}
        </div>

        {/* Scalability Highlight (Business Grade High User) */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Built for Performance</h3>
              <p className="text-gray-400">
                All our services are <span className="text-blue-400 font-semibold">Business Grade</span>. 
                Whether you have 100 or 100,000 concurrent users, our infrastructure is built to scale automatically.
              </p>
            </div>
            {/* <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors whitespace-nowrap">
              Start Your Project
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
};
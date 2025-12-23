"use client";

import { FC } from "react";
import { Mail, MapPin, ChevronRight, Globe, Github, Linkedin, X } from "lucide-react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gray-950 border-t border-gray-800 pt-24 pb-12 text-gray-400"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Why Lance Team */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Why Lance Team
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              We bridge the gap between individual freelance talent and high-end agency results. 
              Our team provides the scalability of a business-grade firm with the personalized 
              attention of a dedicated partner.
            </p>
          </div>

          {/* Column 2: Quick Services Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              {[
                "Web Hosting",
                "Web Apps",
                "AI Development",
                "Graphics Design",
                "Back-end Systems"
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-blue-400 flex items-center gap-2 transition-colors">
                    <ChevronRight size={14} className="text-blue-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Locations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Globe size={18} className="text-blue-500" />
              Our Locations
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-500 mt-1" />
                <span>Kathmandu, Nepal <br /><span className="text-xs text-gray-600">Headquarters</span></span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-500 mt-1" />
                <span>Remote Operations <br /><span className="text-xs text-gray-600">Worldwide Support</span></span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-sm">For inquiries and project discussions:</p>
              <a
                href="mailto:lanceteam12@gmail.com"
                className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail size={20} />
                <span className="text-xl font-medium">lanceteam12@gmail.com</span>
              </a>
              <div className="pt-2">
                 <p className="text-xs text-gray-500 italic">Managing Director</p>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <span className="text-xs tracking-widest text-gray-600 uppercase mb-2">Developed by</span>
             <p className="text-sm text-gray-400">
                © {currentYear} <span className="text-white font-bold tracking-tight">LANCE-TEAM</span>. 
             </p>
          </div>

          {/* Social Icons - Re-enabled and updated for a tech feel */}
          <div className="flex gap-5">
            <a href="#" className="p-2 bg-gray-900 rounded-lg hover:bg-blue-900/30 hover:text-blue-400 transition-all border border-gray-800">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/lance-team" className="p-2 bg-gray-900 rounded-lg hover:bg-blue-900/30 hover:text-blue-400 transition-all border border-gray-800">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-900 rounded-lg hover:bg-blue-900/30 hover:text-blue-400 transition-all border border-gray-800">
              <X size={18} />
            </a> 
          </div>
        </div>
      </div>
    </footer>
  );
};
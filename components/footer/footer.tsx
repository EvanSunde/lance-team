import { FC } from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export const Footer: FC = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-950 border-t border-gray-800 pt-24 pb-10 text-gray-400"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= CONTACT AREA ================= */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white">
            Contact Us
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            For business inquiries, collaborations, or project discussions,
            reach out directly to our Managing Director.
          </p>

          <a
            href="mailto:satij@gmail.com"
            className="mt-8 inline-flex items-center gap-3 text-xl font-semibold text-blue-400 hover:underline"
          >
            <Mail size={22} />
            satijaryal3@gmail.com
          </a>

          <p className="mt-2 text-sm text-gray-500">
            Satij Aryal — Managing Director
          </p>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-16 border-t border-gray-800" />

        {/* ================= FOOTER BAR ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <span className="text-center sm:text-left">
            © 2024 <span className="text-white font-semibold">LANCE-TEAM</span>.  
            All rights reserved.
          </span>

          {/* <div className="flex gap-6">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400">
              <Instagram size={18} />
            </a>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

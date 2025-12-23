"use client";

import { FC, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { 
  Send, 
  MessageSquare, 
  Building2, 
  User, 
  Phone, 
  CheckCircle2, 
  Loader2, 
  Globe 
} from "lucide-react";

export const ContactSection: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Replace these 3 strings with your actual EmailJS IDs
    const SERVICE_ID = "service_4t7k0pq";
    const TEMPLATE_ID = "template_8t2i3pn";
    const PUBLIC_KEY = "dRkFQQMLo24c7zQyG";

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
          setTimeout(() => setSuccess(false), 5000);
        })
        .catch((error) => {
          setLoading(false);
          alert("Failed to send: " + error.text);
        });
    }
  };

  const captionStyle = "absolute top-0 left-0 -translate-y-1/2 bg-gray-900 px-6 text-sm text-blue-400 font-semibold uppercase tracking-wider";
  const inputStyle = "w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600";
  const labelStyle = "block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1";

  return (
    <section id="contact" className="bg-gray-900 py-32 md:py-48 text-gray-200 relative overflow-hidden ">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative border-t-4 border-gray-800 pt-10 mb-20 text-center md:text-left">
          <span className={captionStyle}>Initialization</span>
          <h2 className="text-4xl font-extrabold sm:text-6xl text-white tracking-tighter">
            Start a <span className="text-blue-500">Project.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side Info */}
          <div className="space-y-8">
            <h3 className="text-white font-bold text-xl">Direct Line to Lance Team</h3>
            <ul className="space-y-4">
              {["Business-grade scaling", "24-hour response", "Global delivery"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 size={18} className="text-blue-500" /> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 bg-gray-800/30 p-8 md:p-10 rounded-3xl border border-gray-800">
              
              {/* Full Name */}
              <div className="col-span-full md:col-span-1">
                <label className={labelStyle}>Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-4.5 w-5 h-5 text-gray-600" />
                  <input name="from_name" type="text" required placeholder="John Doe" className={`${inputStyle} pl-12`} />
                </div>
              </div>

              {/* Country */}
              <div className="col-span-full md:col-span-1">
                <label className={labelStyle}>Country</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-4.5 w-5 h-5 text-gray-600" />
                  <input name="country" type="text" required placeholder="Nepal / USA" className={`${inputStyle} pl-12`} />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="col-span-full md:col-span-1">
                <label className={labelStyle}>WhatsApp Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-4.5 w-5 h-5 text-gray-600" />
                  <input name="whatsapp" type="tel" required placeholder="+977 ..." className={`${inputStyle} pl-12`} />
                </div>
              </div>

              {/* Company Name */}
              <div className="col-span-full md:col-span-1">
                <label className={labelStyle}>Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-4.5 w-5 h-5 text-gray-600" />
                  <input name="company_name" type="text" placeholder="Launch Inc." className={`${inputStyle} pl-12`} />
                </div>
              </div>

              {/* Project Category */}
              <div className="col-span-full">
                <label className={labelStyle}>Project Category</label>
                <select name="category" className={`${inputStyle} appearance-none bg-gray-900/50`}>
                  <option>Web Apps & Software</option>
                  <option>AI & Machine Learning</option>
                  <option>Scalable Web Hosting</option>
                  <option>Graphics & Branding</option>
                </select>
              </div>

              {/* Overview */}
              <div className="col-span-full">
                <label className={labelStyle}>Overview</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-600" />
                  <textarea name="message" required rows={4} placeholder="Your message..." className={`${inputStyle} pl-12 resize-none`}></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-full">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="group w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98]"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : success ? (
                    "Inquiry Sent Successfully!"
                  ) : (
                    <>Deploy Inquiry <Send size={18} /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
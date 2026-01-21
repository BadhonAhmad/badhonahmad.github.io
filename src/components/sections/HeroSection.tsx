"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { personalInfo } from "@/data/portfolio";
import TypingAnimation from "@/components/ui/TypingAnimation";
import Image from "next/image";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-gray-950"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div
            className={`flex-1 text-center lg:text-left transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Nobel Ahmad <span className="text-blue-500">Badhon</span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
              <TypingAnimation
                text={personalInfo.title}
                speed={80}
                delay={1000}
                className="font-medium"
              />
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-xl lg:max-w-none">
              {personalInfo.subtitle}
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href={personalInfo.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Codeforces"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5S3 20.328 3 19.5V9c0-.828.672-1.5 1.5-1.5zm0-3C5.328 4.5 6 5.172 6 6s-.672 1.5-1.5 1.5S3 6.828 3 6s.672-1.5 1.5-1.5zM12 1.5c.828 0 1.5.672 1.5 1.5v18c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V3c0-.828.672-1.5 1.5-1.5zm7.5 6c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5S18 20.328 18 19.5V9c0-.828.672-1.5 1.5-1.5zm0-3c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S18 6.828 18 6s.672-1.5 1.5-1.5z" />
            </svg>
          </a>
            </div>

            {/* Contact Info Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <div className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">{personalInfo.location}</span>
              </div>
              
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/60 transition-all duration-300"
              >
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span className="text-gray-300 text-sm">{personalInfo.email}</span>
              </a>
              
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/60 transition-all duration-300"
              >
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">{personalInfo.phone}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/cv/Badhon_SUST.pdf"
                download
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors duration-300 font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div
            className={`flex-shrink-0 transform transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="animate-float">
              <div className="relative">
                <Image
                  src="/icons/my_image/me.jpg"
                  alt="Nobel Ahmad Badhon"
                  width={280}
                  height={280}
                  className="rounded-full object-cover aspect-square border-4 border-gray-800"
                  priority
                />
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="h-6 w-6 text-gray-500" />
      </div>
    </section>
  );
}

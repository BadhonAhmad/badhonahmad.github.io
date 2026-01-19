"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { personalInfo } from "@/data/portfolio";
import TypingAnimation from "@/components/ui/TypingAnimation";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Image from "next/image";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Animated background with mouse interaction */}
      <AnimatedBackground />

      {/* Original animated background elements (keeping for layered effect) */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500 opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500 opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div
        className={`text-center z-10 transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ zIndex: 10 }}
      >
        {/* Profile Image with Floating Animation */}
        <div className="flex justify-center mb-8">
          <div className="animate-float">
            <Image
              src="/icons/my_image/me.jpg"
              alt="Nobel Ahmad Badhon"
              width={180}
              height={180}
              className="rounded-full object-cover aspect-square"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Nobel Ahmad{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Badhon
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto h-8">
          <TypingAnimation
            text={personalInfo.title}
            speed={80}
            delay={1000}
            className="font-medium"
          />
        </div>

        <p className="text-lg text-gray-400 mb-8">{personalInfo.subtitle}</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
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
            className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href={personalInfo.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            aria-label="Codeforces"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5S3 20.328 3 19.5V9c0-.828.672-1.5 1.5-1.5zm0-3C5.328 4.5 6 5.172 6 6s-.672 1.5-1.5 1.5S3 6.828 3 6s.672-1.5 1.5-1.5zM12 1.5c.828 0 1.5.672 1.5 1.5v18c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V3c0-.828.672-1.5 1.5-1.5zm7.5 6c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5S18 20.328 18 19.5V9c0-.828.672-1.5 1.5-1.5zm0-3c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S18 6.828 18 6s.672-1.5 1.5-1.5z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/cv/Badhon_SUST.pdf"
            download
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition duration-300 font-semibold transform hover:scale-105"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition duration-300 font-semibold transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ zIndex: 10 }}
      >
        <ChevronDownIcon className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}

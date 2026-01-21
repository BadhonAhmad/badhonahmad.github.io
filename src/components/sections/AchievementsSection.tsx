"use client";

import { useState } from "react";
import { hackathonAchievements } from "@/data/portfolio";
import Image from "next/image";

export default function AchievementsSection() {
  const [selectedHackathon, setSelectedHackathon] = useState<number | null>(
    null,
  );

  return (
    <section id="achievements" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments in competitive programming and
            hackathons
          </p>
        </div>

        {/* Hackathon Achievements */}
        <div className="mb-10">
          {hackathonAchievements.map((hackathon, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 mb-6 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-600/20 rounded-xl flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {hackathon.title}
                  </h3>
                  <p className="text-gray-400 text-base mb-3">
                    {hackathon.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {hackathon.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
                      </svg>
                      {hackathon.date}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {hackathon.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6 text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {hackathon.position}
                </div>
                <div className="text-base text-gray-400">
                  {hackathon.category} • {hackathon.positionDetails}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                {hackathon.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-base font-medium text-gray-300 mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-900 text-gray-400 px-3 py-1 rounded-md text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div className="mb-6">
                <h4 className="text-base font-medium text-gray-300 mb-3">
                  Team: {hackathon.team.name}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {hackathon.team.members.map((member, i) => (
                    <div
                      key={i}
                      className="bg-gray-900 border border-gray-700 rounded-lg p-4"
                    >
                      <h5 className="text-white text-base font-medium mb-1">
                        {member.name}
                      </h5>
                      <p className="text-gray-400 text-sm mb-2">
                        {member.role}
                      </p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-xs flex items-center gap-1 hover:text-blue-400"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-3">
                  Gallery
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {hackathon.images.map((image, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300 border border-gray-700"
                      onClick={() =>
                        setSelectedHackathon(selectedHackathon === i ? null : i)
                      }
                    >
                      <Image
                        src={image}
                        alt={`${hackathon.title} - Photo ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Training Achievement */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 hover:border-green-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start gap-5">
            <div className="flex items-center justify-center w-14 h-14 bg-green-600/20 rounded-xl flex-shrink-0">
              <svg
                className="w-7 h-7 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Training Specialist
              </h3>
              <p className="text-green-500 text-sm mb-4">
                Outlier • 2022-Present
              </p>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Specialized in training and evaluating AI model responses across
                multiple programming languages. Provided high-quality feedback
                and annotations to improve AI system performance in technical
                domains.
              </p>
              <div className="mb-5">
                <h5 className="text-sm font-medium text-gray-400 mb-3">
                  Key Responsibilities
                </h5>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Training and evaluating AI responses using Python, Java, and
                    C++
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Data annotation and model evaluation for code generation
                    tasks
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Providing detailed feedback on AI-generated technical
                    content
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Quality assurance for AI training datasets
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-900 text-gray-400 px-3 py-1 rounded-md text-xs border border-gray-700">
                  Python
                </span>
                <span className="bg-gray-900 text-gray-400 px-3 py-1 rounded-md text-xs border border-gray-700">
                  Java
                </span>
                <span className="bg-gray-900 text-gray-400 px-3 py-1 rounded-md text-xs border border-gray-700">
                  C++
                </span>
                <span className="bg-gray-900 text-gray-400 px-3 py-1 rounded-md text-xs border border-gray-700">
                  AI Training
                </span>
                <span className="bg-gray-900 text-gray-400 px-3 py-1 rounded-md text-xs border border-gray-700">
                  Model Evaluation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

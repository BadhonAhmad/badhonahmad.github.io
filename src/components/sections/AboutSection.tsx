import {
  AcademicCapIcon,
  BriefcaseIcon,
  CircleStackIcon,
  GlobeAltIcon,
  LanguageIcon,
  TrophyIcon,
  BookOpenIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional background, technical expertise, and development
            journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Education Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 bg-blue-600/20 rounded-lg mb-4">
              <AcademicCapIcon className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              BSc in CSE
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shahjalal University of Science and Technology, Sylhet, Bangladesh
            </p>
          </div>

          {/* Full Stack Developer Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 bg-purple-600/20 rounded-lg mb-4">
              <BriefcaseIcon className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Full Stack Developer
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web Development, Mobile Apps (Android/Kotlin), and Desktop
              Applications (JavaFX)
            </p>
          </div>

          {/* Data Science & AI/ML Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 bg-green-600/20 rounded-lg mb-4">
              <CircleStackIcon className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Data Science & AI/ML
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Agents, LLM Training, Python: Keras, NumPy, Matplotlib, Pandas
            </p>
          </div>

          {/* Technical Skills Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 bg-blue-600/20 rounded-lg mb-4">
              <GlobeAltIcon className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Technical Skills
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              C/C++, Python, Java, JavaScript, Kotlin. React, Node.js, Spring
              Boot, REST APIs
            </p>
          </div>

          {/* Languages Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 bg-yellow-600/20 rounded-lg mb-4">
              <LanguageIcon className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Languages</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              English (Bilingual), Bangla (Native), Hindi (Professional)
            </p>
          </div>

          {/* Competitive Programming Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 bg-orange-600/20 rounded-lg mb-4">
              <TrophyIcon className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Competitive Programming
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              2000+ problems solved across Codeforces, CodeChef, LeetCode,
              VJudge
            </p>
          </div>

          {/* Academic Projects Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 bg-pink-600/20 rounded-lg mb-4">
              <BookOpenIcon className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Academic Projects
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              E-commerce (Java), Club Management (Kotlin), Restaurant System
            </p>
          </div>

          {/* Continuous Learning Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 bg-teal-600/20 rounded-lg mb-4">
              <SparklesIcon className="w-6 h-6 text-teal-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Continuous Learning
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              SUST Programming Training Camp participant, exploring new
              technologies
            </p>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-10 text-center">
          <a
            href="/cv/Badhon_SUST.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

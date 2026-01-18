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
import { education, workExperience } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300">
            Professional background, technical expertise, and development
            journey
          </p>

          {/* Download CV Button */}
          <div className="mt-8">
            <a
              href="/cv/Badhon_SUST.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-semibold"
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Education Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
              <AcademicCapIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              BSc in Computer Science and Engineering
            </h3>
            <p className="text-gray-400 text-sm">
              Shahjalal University of Science and Technology, Sylhet, Bangladesh
            </p>
          </div>

          {/* Full Stack Developer Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
              <BriefcaseIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Full Stack Developer
            </h3>
            <p className="text-gray-400 text-sm">
              Experienced in Web Development, Mobile Apps (Android/Kotlin), and
              Desktop Applications (JavaFX)
            </p>
          </div>

          {/* Data Science & AI/ML Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
              <CircleStackIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Data Science & AI/ML
            </h3>
            <p className="text-gray-400 text-sm">
              AI Agents, LLM Training, Python libraries: Keras, NumPy,
              Matplotlib, Pandas. Model training, data visualization, and
              predictive analytics
            </p>
          </div>

          {/* Technical Skills Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
              <GlobeAltIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Technical Skills
            </h3>
            <p className="text-gray-400 text-sm">
              Languages: C/C++, Python, Java, JavaScript, Kotlin. Web & Mobile:
              React.js, Node.js, Express.js, Spring Boot, REST APIs, Android
              (Jetpack Compose). AI/ML & Tools: Docker, Git, MySQL, PostgreSQL,
              MongoDB, PyTest
            </p>
          </div>

          {/* Languages Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-lg mb-4">
              <LanguageIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Languages</h3>
            <p className="text-gray-400 text-sm">
              English (Native or Bilingual Proficiency), Bangla (Native or
              Bilingual Proficiency), Hindi (Professional Working Proficiency)
            </p>
          </div>

          {/* Competitive Programming Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg mb-4">
              <TrophyIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Competitive Programming
            </h3>
            <p className="text-gray-400 text-sm">
              Active problem solver with 850+ problems across platforms
              (Codeforces Pupil 1200+, CodeChef 2-Star 1437, VJudge 325+). Check
              Skills section for detailed stats
            </p>
          </div>

          {/* Academic Projects Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-lg mb-4">
              <BookOpenIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Academic Projects
            </h3>
            <p className="text-gray-400 text-sm">
              E-commerce Marketplace (Java, Servlets), Club Management System
              (Kotlin, Jetpack Compose), Restaurant Management System
            </p>
          </div>

          {/* Continuous Learning Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mb-4">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Continuous Learning
            </h3>
            <p className="text-gray-400 text-sm">
              SUST Programming Training Camp participant, always exploring new
              technologies and best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

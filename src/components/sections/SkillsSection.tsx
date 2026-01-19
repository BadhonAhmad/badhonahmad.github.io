import {
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiLinux,
  SiDocker,
  SiVercel,
  SiJavascript,
  SiReact,
  SiPython,
  SiC,
  SiCplusplus,
  SiKotlin,
} from "react-icons/si";

// Custom Java icon component
const JavaIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.588 1.391-3.708.694-8.275.613-10.99.168 0-.001.553.457 3.462.639" />
  </svg>
);

// Custom Jetpack Compose icon component
const JetpackComposeIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: JavaIcon, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Jetpack Compose", icon: JetpackComposeIcon, color: "#4285F4" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300">
            A curated set of languages, frameworks, and tools I excel at.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400 border-l-4 border-blue-400 pl-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-white/20 hover:border-blue-400/60 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                        <IconComponent
                          className="w-8 h-8 transition-colors duration-300"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Problem Solving Stats */}
        <div className="mt-16 bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-400 border-l-4 border-blue-400 pl-4 mb-6">
            Problem Solving
          </h3>
          <div className="text-center">
            <p className="text-lg text-gray-300 italic">
              Solved over{" "}
              <span className="text-purple-400 font-bold">2000+ problems</span>{" "}
              across various competitive programming platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

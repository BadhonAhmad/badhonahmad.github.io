import { CodeBracketIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { education, workExperience } from '@/data/portfolio';

const features = [
  {
    icon: CodeBracketIcon,
    title: "Full Stack Development",
    description: "Experienced in building scalable web applications using modern frameworks like Next.js, React, and Node.js with databases like MongoDB and MySQL.",
    color: "bg-purple-600"
  },
  {
    icon: TrophyIcon,
    title: "Problem Solving",
    description: "Solved 2000+ competitive programming problems across platforms like Codeforces, LeetCode, and CodeChef, developing strong algorithmic thinking.",
    color: "bg-blue-600"
  },
  {
    icon: AcademicCapIcon,
    title: "AI/ML Experience",
    description: "Two years of experience as an AI Training Specialist at Outlier, working on data annotation, model evaluation, and AI system improvements.",
    color: "bg-green-600"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate Full Stack Developer with expertise in modern web technologies and a strong background in competitive programming.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`${feature.color} p-3 rounded-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Education & Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-400">{education.degree}</h4>
                <p className="text-gray-300">{education.university}</p>
                <p className="text-gray-400">{education.period}</p>
              </div>
              
              {workExperience.map((work, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-blue-400">{work.title}</h4>
                  <p className="text-gray-300">{work.company}</p>
                  <p className="text-gray-400">{work.period}</p>
                  <p className="text-gray-300 text-sm mt-2">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { getColorClasses } from "@/lib/utils";

// Custom External Link Icon Component
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

interface ProjectCardProps {
  title: string;
  subtitle: string;
  period?: string;
  description: string;
  technologies: string[];
  features: string[];
  color: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  period,
  description,
  technologies,
  features,
  color,
  githubUrl,
}: ProjectCardProps) {
  const colorClasses = getColorClasses(color);

  return (
    <div className="bg-gray-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition duration-300 group">
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className={`${colorClasses.text} font-semibold`}>{subtitle}</p>
          {period && <p className="text-gray-400 text-sm">{period}</p>}
        </div>

        <p className="text-gray-300 mb-6">{description}</p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`${colorClasses.bg} text-white px-3 py-1 rounded-full text-sm`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-300 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {githubUrl && (
          <div className="pt-4 border-t border-gray-600">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 ${colorClasses.text} hover:${colorClasses.bg} hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium border border-current hover:border-transparent`}
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

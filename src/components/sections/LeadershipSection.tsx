import { leadershipInvolvement } from "@/data/portfolio";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {leadershipInvolvement.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond academics and coding, I take active roles in sports and
            community activities.
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300">
          <ul className="space-y-4">
            {leadershipInvolvement.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
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
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

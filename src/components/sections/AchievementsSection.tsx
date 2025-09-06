import { competitiveProgramming } from "@/data/portfolio";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Competitive Programming Achievements
          </h2>
          <p className="text-xl text-gray-300">
            2000+ problems solved across multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitiveProgramming.map((platform, index) => (
            <a
              key={index}
              href={platform.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-br ${platform.color} p-6 rounded-2xl text-white hover:transform hover:scale-105 transition duration-300 block cursor-pointer hover:shadow-lg`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{platform.solved}</div>
                <div className="text-lg font-semibold mb-1">
                  {platform.platform}
                </div>
                <div className="text-sm opacity-90">
                  Handle: {platform.handle}
                </div>
                <div className="text-xs opacity-75">{platform.achievement}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg">
            Also active on{" "}
            <span className="text-purple-400 font-semibold">LightOJ</span> and{" "}
            <span className="text-blue-400 font-semibold">AtCoder</span>
          </p>
        </div>
      </div>
    </section>
  );
}

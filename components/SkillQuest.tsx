import Image from "next/image";

export default function SkillQuest() {
  const features = [
    {
      icon: "📊",
      title: "Skill Mastery Tracking",
      description:
        "Track multiple skills simultaneously with our XP-based progression system and visual skill trees.",
      gradient: "from-primary-gold to-primary-amber",
    },
    {
      icon: "⏱️",
      title: "Deep Focus Timer",
      description:
        "Pomodoro-style focus sessions with background tracking and 40Hz gamma binaural beats for peak concentration.",
      gradient: "from-primary-orange to-secondary-deepRed",
    },
    {
      icon: "🎮",
      title: "Gamification",
      description:
        "Level up your skills, unlock achievements, and maintain daily streaks with our innovative freeze system.",
      gradient: "from-primary-amber to-primary-orange",
    },
    {
      icon: "👥",
      title: "Social & Family",
      description:
        "Challenge friends, manage family plans with parental controls, and compete on leaderboards.",
      gradient: "from-secondary-deepRed to-secondary-burgundy",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description:
        "19 unlockable themes with dark mode optimization and stunning Material 3 design language.",
      gradient: "from-primary-gold to-primary-orange",
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description:
        "Seamless experience across all your devices with cloud sync and offline support.",
      gradient: "from-primary-orange to-primary-gold",
    },
  ];

  return (
    <section id="skillquest" className="bg-black px-6 py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="bg-phoenix-gradient mb-4 inline-block rounded-full px-6 py-2">
            <span className="font-semibold text-white">Coming Soon</span>
          </div>
          <h2 className="text-gradient mb-6 text-4xl font-bold md:text-6xl">
            Introducing SkillQuest
          </h2>
          <p className="text-neutral-gray mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl">
            Transform Practice into Progress. Your Journey to Skill Mastery Starts Here.
          </p>
        </div>

        {/* SkillQuest App Logo & Mockup */}
        <div className="mb-20 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-teal-500/20 blur-3xl"></div>
            <div className="relative flex flex-col items-center gap-8">
              {/* SkillQuest Logo */}
              <div className="relative h-48 w-48 animate-pulse">
                <Image
                  src="/skillquest-logo.png"
                  alt="SkillQuest - Skill Mastery App"
                  width={192}
                  height={192}
                  className="h-full w-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* App Preview Card */}
              <div className="from-neutral-darkBg w-full max-w-sm rounded-3xl border-4 border-blue-500/30 bg-gradient-to-br to-black p-8">
                <div className="text-center">
                  <h3 className="mb-2 bg-gradient-to-r from-blue-400 via-green-400 to-teal-400 bg-clip-text text-2xl font-bold text-transparent">
                    SkillQuest
                  </h3>
                  <p className="text-neutral-gray mb-1 text-lg">Master Your Skills</p>
                  <p className="text-neutral-gray text-sm">Coming Soon to iOS & Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-neutral-darkBg border-primary-gold/20 hover:border-primary-gold/50 hover:shadow-primary-orange/20 relative rounded-2xl border p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="text-primary-gold mb-3 text-2xl font-bold">{feature.title}</h3>
                <p className="text-neutral-lightText leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-neutral-gray mb-6 text-lg">
            Be the first to know when SkillQuest launches
          </p>
          <a
            href="#download"
            className="bg-phoenix-gradient hover:shadow-primary-orange/50 inline-block rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );
}

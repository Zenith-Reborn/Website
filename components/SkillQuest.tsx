import Image from 'next/image'

export default function SkillQuest() {
  const features = [
    {
      icon: '📊',
      title: 'Skill Mastery Tracking',
      description: 'Track multiple skills simultaneously with our XP-based progression system and visual skill trees.',
      gradient: 'from-primary-gold to-primary-amber',
    },
    {
      icon: '⏱️',
      title: 'Deep Focus Timer',
      description: 'Pomodoro-style focus sessions with background tracking and 40Hz gamma binaural beats for peak concentration.',
      gradient: 'from-primary-orange to-secondary-deepRed',
    },
    {
      icon: '🎮',
      title: 'Gamification',
      description: 'Level up your skills, unlock achievements, and maintain daily streaks with our innovative freeze system.',
      gradient: 'from-primary-amber to-primary-orange',
    },
    {
      icon: '👥',
      title: 'Social & Family',
      description: 'Challenge friends, manage family plans with parental controls, and compete on leaderboards.',
      gradient: 'from-secondary-deepRed to-secondary-burgundy',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: '19 unlockable themes with dark mode optimization and stunning Material 3 design language.',
      gradient: 'from-primary-gold to-primary-orange',
    },
    {
      icon: '📱',
      title: 'Cross-Platform',
      description: 'Seamless experience across all your devices with cloud sync and offline support.',
      gradient: 'from-primary-orange to-primary-gold',
    },
  ]

  return (
    <section id="skillquest" className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-phoenix-gradient rounded-full">
            <span className="font-semibold text-white">Coming Soon</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Introducing SkillQuest
          </h2>
          <p className="text-xl md:text-2xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Transform Practice into Progress. Your Journey to Skill Mastery Starts Here.
          </p>
        </div>

        {/* SkillQuest App Logo & Mockup */}
        <div className="mb-20 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-teal-500/20 blur-3xl"></div>
            <div className="relative flex flex-col items-center gap-8">
              {/* SkillQuest Logo */}
              <div className="w-48 h-48 relative animate-pulse">
                <Image
                  src="/skillquest-logo.png"
                  alt="SkillQuest - Skill Mastery App"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* App Preview Card */}
              <div className="bg-gradient-to-br from-neutral-darkBg to-black border-4 border-blue-500/30 rounded-3xl p-8 w-full max-w-sm">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-teal-400 bg-clip-text mb-2">
                    SkillQuest
                  </h3>
                  <p className="text-neutral-gray text-lg mb-1">Master Your Skills</p>
                  <p className="text-neutral-gray text-sm">Coming Soon to iOS & Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-neutral-darkBg border border-primary-gold/20 rounded-2xl p-8 hover:border-primary-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-orange/20"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary-gold mb-3">{feature.title}</h3>
                <p className="text-neutral-lightText leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-neutral-gray text-lg mb-6">
            Be the first to know when SkillQuest launches
          </p>
          <a
            href="#download"
            className="inline-block px-8 py-4 bg-phoenix-gradient text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-orange/50"
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  )
}

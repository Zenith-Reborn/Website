import Image from "next/image";

export default function SkillQuest() {
  const features = [
    {
      icon: "📊",
      title: "Skill Tracking",
      description:
        "Choose a skill, start a timer and see your XP, level and progress grow. Use it for study, training, reading, coding, music practice or any other skill.",
      gradient: "from-primary-gold to-primary-amber",
    },
    {
      icon: "⏱️",
      title: "Focus Timers",
      description:
        "Pomodoro, Deep Work, Flowtime and other timer modes. Every session counts toward the skill you are working on.",
      gradient: "from-primary-orange to-secondary-deepRed",
    },
    {
      icon: "📈",
      title: "Statistics by Skill",
      description: "Review your time, sessions and XP per skill by day, week, month and year.",
      gradient: "from-primary-amber to-primary-orange",
    },
    {
      icon: "👥",
      title: "Friends & Challenges",
      description: "Add friends and set challenges together when a bit of shared motivation helps.",
      gradient: "from-secondary-deepRed to-secondary-burgundy",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Family Plan",
      description:
        "With the Family subscription, parents can start timers for their children, see when practice sessions start, view their statistics and set goals.",
      gradient: "from-primary-gold to-primary-orange",
    },
    {
      icon: "✨",
      title: "Free to Start",
      description:
        "Try SkillQuest in Guest Mode before you create an account. No ads. Premium and Family are optional subscriptions.",
      gradient: "from-primary-orange to-primary-gold",
    },
  ];

  return (
    <section id="skillquest" className="bg-black px-6 py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="bg-phoenix-gradient mb-4 inline-block rounded-full px-6 py-2">
            <span className="font-semibold text-white">Out Now</span>
          </div>
          <h2 className="text-gradient mb-6 text-4xl font-bold md:text-6xl">
            Introducing SkillQuest
          </h2>
          <p className="text-neutral-gray mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl">
            A skill tracker with built-in focus timers. Every focused minute counts toward a skill
            you choose.
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
                  <p className="text-neutral-gray text-sm">Now on iOS & Android</p>
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
            SkillQuest is out now on iPhone, iPad and Android. Plans, guides and support are on its
            own website.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#download"
              className="bg-phoenix-gradient hover:shadow-primary-orange/50 inline-block rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get SkillQuest
            </a>
            <a
              href="https://skill-quest.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-neutral-darkBg inline-block rounded-full border-2 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Visit skill-quest.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

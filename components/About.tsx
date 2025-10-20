export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-neutral-darkBg to-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Zenith Reborn
          </h2>
          <div className="w-24 h-1 bg-phoenix-gradient mx-auto rounded-full"></div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Mission */}
          <div className="space-y-6">
            <div className="border-l-4 border-primary-gold pl-6">
              <h3 className="text-2xl font-semibold text-primary-amber mb-4">Our Mission</h3>
              <p className="text-neutral-lightText leading-relaxed text-lg">
                At Zenith Reborn, we believe in the power of transformation. Like the phoenix rising from the ashes,
                we help individuals rediscover their potential and reach new heights of excellence.
              </p>
            </div>

            <div className="border-l-4 border-primary-orange pl-6">
              <h3 className="text-2xl font-semibold text-primary-amber mb-4">Our Vision</h3>
              <p className="text-neutral-lightText leading-relaxed text-lg">
                We envision a world where everyone has the tools to master their craft, track their progress,
                and achieve their goals through focused practice and deliberate skill development.
              </p>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-amber mb-6">Our Values</h3>

            <div className="bg-neutral-darkBg border border-primary-gold/20 rounded-lg p-6 hover:border-primary-gold/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="text-xl font-semibold text-primary-gold mb-2">Excellence</h4>
                  <p className="text-neutral-gray">Striving for continuous improvement and mastery in everything we do.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-darkBg border border-primary-orange/20 rounded-lg p-6 hover:border-primary-orange/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔥</span>
                <div>
                  <h4 className="text-xl font-semibold text-primary-orange mb-2">Transformation</h4>
                  <p className="text-neutral-gray">Embracing change and helping others rise from challenges to success.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-darkBg border border-primary-amber/20 rounded-lg p-6 hover:border-primary-amber/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="text-xl font-semibold text-primary-amber mb-2">Innovation</h4>
                  <p className="text-neutral-gray">Creating premium tools that make skill mastery accessible and engaging.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

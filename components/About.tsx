export default function About() {
  return (
    <section id="about" className="from-neutral-darkBg bg-gradient-to-b to-black px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-gradient mb-6 text-4xl font-bold md:text-5xl">About Zenith Reborn</h2>
          <div className="bg-phoenix-gradient mx-auto h-1 w-24 rounded-full"></div>
        </div>

        {/* Content grid */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side - Mission */}
          <div className="space-y-6">
            <div className="border-primary-gold border-l-4 pl-6">
              <h3 className="text-primary-amber mb-4 text-2xl font-semibold">Our Mission</h3>
              <p className="text-neutral-lightText text-lg leading-relaxed">
                At Zenith Reborn, we believe in the power of transformation. Like the phoenix rising
                from the ashes, we help individuals rediscover their potential and reach new heights
                of excellence.
              </p>
            </div>

            <div className="border-primary-orange border-l-4 pl-6">
              <h3 className="text-primary-amber mb-4 text-2xl font-semibold">Our Vision</h3>
              <p className="text-neutral-lightText text-lg leading-relaxed">
                We envision a world where everyone has the tools to master their craft, track their
                progress, and achieve their goals through focused practice and deliberate skill
                development.
              </p>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-4">
            <h3 className="text-primary-amber mb-6 text-2xl font-semibold">Our Values</h3>

            <div className="bg-neutral-darkBg border-primary-gold/20 hover:border-primary-gold/50 rounded-lg border p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="text-primary-gold mb-2 text-xl font-semibold">Excellence</h4>
                  <p className="text-neutral-gray">
                    Striving for continuous improvement and mastery in everything we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-darkBg border-primary-orange/20 hover:border-primary-orange/50 rounded-lg border p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔥</span>
                <div>
                  <h4 className="text-primary-orange mb-2 text-xl font-semibold">Transformation</h4>
                  <p className="text-neutral-gray">
                    Embracing change and helping others rise from challenges to success.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-darkBg border-primary-amber/20 hover:border-primary-amber/50 rounded-lg border p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="text-primary-amber mb-2 text-xl font-semibold">Innovation</h4>
                  <p className="text-neutral-gray">
                    Creating premium tools that make skill mastery accessible and engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

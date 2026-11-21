import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/id6755604671";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.skillquest.app";

export default function Download() {
  return (
    <section id="download" className="to-neutral-darkBg bg-gradient-to-b from-black px-6 py-24">
      <div className="container mx-auto max-w-5xl">
        {/* Section header with logo */}
        <div className="mb-16 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32">
              <Image
                src="/skillquest-logo.png"
                alt="SkillQuest"
                width={128}
                height={128}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <h2 className="text-gradient mb-6 text-4xl font-bold md:text-5xl">Get SkillQuest</h2>
          <p className="text-neutral-gray mx-auto max-w-2xl text-xl">
            Available now on the App Store and Google Play
          </p>
        </div>

        {/* Download cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* iOS */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold block rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4 text-6xl">🍎</div>
            <h3 className="text-primary-gold mb-3 text-2xl font-bold">iOS</h3>
            <p className="text-neutral-gray mb-6">For iPhone and iPad</p>
            <span className="bg-phoenix-gradient inline-block rounded-full px-6 py-3 font-semibold text-white">
              Download on the App Store
            </span>
          </a>

          {/* Android */}
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-darkBg border-primary-orange/30 hover:border-primary-orange block rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4 text-6xl">🤖</div>
            <h3 className="text-primary-orange mb-3 text-2xl font-bold">Android</h3>
            <p className="text-neutral-gray mb-6">For Android phones and tablets</p>
            <span className="bg-phoenix-gradient inline-block rounded-full px-6 py-3 font-semibold text-white">
              Get it on Google Play
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

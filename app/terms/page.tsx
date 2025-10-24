import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Zenith Reborn - Legal terms and conditions governing use of our website and services.',
  openGraph: {
    title: 'Terms of Service | Zenith Reborn',
    description: 'Terms of Service for Zenith Reborn - Legal terms and conditions governing use of our website and services.',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-darkBg py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gold mb-4">
            Terms of Service
          </h1>
          <p className="text-neutral-lightText/70 text-lg">
            Last updated: October 24, 2025
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-secondary-deepRed/10 border border-secondary-deepRed/30 rounded-lg p-6 mb-12">
          <p className="text-neutral-lightText/90 text-sm">
            <strong className="text-primary-gold">Legal Disclaimer:</strong> This is a template Terms of Service.
            While we aim for legal accuracy, you should consult with qualified legal counsel to ensure
            these terms meet your specific needs and comply with all applicable laws.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-black/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-primary-gold mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-neutral-lightText">
            <li><a href="#acceptance" className="text-primary-gold hover:text-primary-amber transition-colors">1. Acceptance of Terms</a></li>
            <li><a href="#services" className="text-primary-gold hover:text-primary-amber transition-colors">2. Description of Services</a></li>
            <li><a href="#eligibility" className="text-primary-gold hover:text-primary-amber transition-colors">3. Eligibility</a></li>
            <li><a href="#user-conduct" className="text-primary-gold hover:text-primary-amber transition-colors">4. User Conduct</a></li>
            <li><a href="#intellectual-property" className="text-primary-gold hover:text-primary-amber transition-colors">5. Intellectual Property Rights</a></li>
            <li><a href="#user-content" className="text-primary-gold hover:text-primary-amber transition-colors">6. User-Generated Content</a></li>
            <li><a href="#third-party" className="text-primary-gold hover:text-primary-amber transition-colors">7. Third-Party Links and Services</a></li>
            <li><a href="#disclaimers" className="text-primary-gold hover:text-primary-amber transition-colors">8. Disclaimers</a></li>
            <li><a href="#limitation" className="text-primary-gold hover:text-primary-amber transition-colors">9. Limitation of Liability</a></li>
            <li><a href="#indemnification" className="text-primary-gold hover:text-primary-amber transition-colors">10. Indemnification</a></li>
            <li><a href="#termination" className="text-primary-gold hover:text-primary-amber transition-colors">11. Termination</a></li>
            <li><a href="#governing-law" className="text-primary-gold hover:text-primary-amber transition-colors">12. Governing Law and Jurisdiction</a></li>
            <li><a href="#changes" className="text-primary-gold hover:text-primary-amber transition-colors">13. Changes to Terms</a></li>
            <li><a href="#contact" className="text-primary-gold hover:text-primary-amber transition-colors">14. Contact Information</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="acceptance" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">1. Acceptance of Terms</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Welcome to Zenith Reborn. By accessing or using our website at <strong>zenithreborn.com</strong>
              (the &quot;Website&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree
              to these Terms, please do not use our Website.
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              These Terms constitute a legally binding agreement between you and Zenith Reborn (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <section id="services" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">2. Description of Services</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Zenith Reborn provides:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>A marketing website showcasing our products and services</li>
              <li>A blog with articles about productivity, development, and our projects</li>
              <li>A waitlist for our upcoming SkillQuest application</li>
              <li>A contact form for inquiries and support</li>
              <li>Information about our current and future products</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We reserve the right to modify, suspend, or discontinue any part of our services at any time
              without prior notice.
            </p>
          </section>

          <section id="eligibility" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">3. Eligibility</h2>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              You must be at least <strong>16 years of age</strong> to use this Website. By using the Website,
              you represent and warrant that you meet this age requirement and have the legal capacity to
              enter into these Terms.
            </p>
          </section>

          <section id="user-conduct" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">4. User Conduct</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              When using our Website, you agree to:
            </p>

            <div className="bg-black/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-primary-amber mb-3">You MUST:</h4>
              <ul className="list-disc list-inside text-neutral-lightText space-y-2 font-['Lora']">
                <li>Provide accurate, current, and complete information when submitting forms</li>
                <li>Respect the intellectual property rights of Zenith Reborn and others</li>
                <li>Use the Website in compliance with all applicable laws and regulations</li>
                <li>Maintain the confidentiality of any account credentials</li>
              </ul>
            </div>

            <div className="bg-secondary-deepRed/10 border border-secondary-deepRed/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-primary-amber mb-3">You MUST NOT:</h4>
              <ul className="list-disc list-inside text-neutral-lightText space-y-2 font-['Lora']">
                <li>Use the Website for any unlawful or fraudulent purpose</li>
                <li>Post or transmit harmful, offensive, defamatory, or abusive content</li>
                <li>Attempt to gain unauthorized access to our systems or data</li>
                <li>Distribute viruses, malware, or other malicious code</li>
                <li>Scrape, harvest, or collect data from the Website using automated means</li>
                <li>Impersonate any person or entity, or falsely state your affiliation</li>
                <li>Interfere with or disrupt the Website&apos;s functionality</li>
                <li>Use the Website to spam, phish, or engage in any form of harassment</li>
              </ul>
            </div>

            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Violation of these conduct rules may result in termination of your access to the Website
              and potential legal action.
            </p>
          </section>

          <section id="intellectual-property" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">5. Intellectual Property Rights</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              All content on this Website, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Text, graphics, logos, images, and photographs</li>
              <li>Software, code, and user interface elements</li>
              <li>Blog posts, articles, and written content</li>
              <li>Design elements, layouts, and branding</li>
              <li>Audio, video, and multimedia content</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              ...is the exclusive property of Zenith Reborn or its licensors and is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              You may not reproduce, distribute, modify, create derivative works, publicly display, or
              otherwise use any content from this Website without our prior written permission, except
              as expressly permitted by these Terms or applicable law.
            </p>

            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary-amber mb-2">Permitted Use</h4>
              <p className="text-neutral-lightText font-['Lora']">
                You may view and download content for personal, non-commercial use only, provided you
                retain all copyright and proprietary notices.
              </p>
            </div>
          </section>

          <section id="user-content" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">6. User-Generated Content</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              When you submit content to our Website (such as blog comments via Giscus), you:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Retain ownership of your content</li>
              <li>Grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content on the Website</li>
              <li>Warrant that you have the right to post the content and that it does not violate any third-party rights</li>
              <li>Acknowledge that your content is publicly visible and may be moderated or removed</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              We reserve the right to remove any user content that violates these Terms or is otherwise
              objectionable, without prior notice.
            </p>
          </section>

          <section id="third-party" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">7. Third-Party Links and Services</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Our Website may contain links to third-party websites and services, including:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>GitHub (for comment authentication)</li>
              <li>Unsplash (for blog images)</li>
              <li>External resources and references</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              We are not responsible for the content, privacy practices, or terms of service of any
              third-party websites. Your use of third-party services is at your own risk and subject
              to their respective terms.
            </p>
          </section>

          <section id="disclaimers" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">8. Disclaimers</h2>

            <div className="bg-secondary-deepRed/10 border border-secondary-deepRed/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-primary-amber mb-3">AS-IS BASIS</h4>
              <p className="text-neutral-lightText font-['Lora']">
                THE WEBSITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR SECURITY.
              </p>
            </div>

            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>The Website will be uninterrupted, secure, or error-free</li>
              <li>The information provided is accurate, complete, or up-to-date</li>
              <li>Any defects or errors will be corrected</li>
              <li>The Website is free from viruses or other harmful components</li>
            </ul>

            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Any reliance you place on information from the Website is at your own risk.
            </p>
          </section>

          <section id="limitation" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">9. Limitation of Liability</h2>

            <div className="bg-secondary-deepRed/10 border border-secondary-deepRed/30 rounded-lg p-6 mb-6">
              <p className="text-neutral-lightText font-['Lora']">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ZENITH REBORN SHALL NOT BE LIABLE FOR ANY:
              </p>
              <ul className="list-disc list-inside text-neutral-lightText mt-4 space-y-2 font-['Lora']">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damages resulting from your use or inability to use the Website</li>
                <li>Damages arising from third-party content or services</li>
              </ul>
            </div>

            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Our total liability to you for any claims arising from your use of the Website shall not
              exceed €100 (one hundred euros) or the amount you paid us (if any), whichever is greater.
            </p>

            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability,
              so the above limitations may not apply to you.
            </p>
          </section>

          <section id="indemnification" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">10. Indemnification</h2>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              You agree to indemnify, defend, and hold harmless Zenith Reborn, its affiliates, officers,
              directors, employees, and agents from any claims, liabilities, damages, losses, costs, or
              expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Your use or misuse of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights, including intellectual property rights</li>
              <li>Any content you submit or post on the Website</li>
            </ul>
          </section>

          <section id="termination" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">11. Termination</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Terminate or suspend your access to the Website at any time, with or without cause</li>
              <li>Remove or disable any content that violates these Terms</li>
              <li>Take appropriate legal action for violations</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Upon termination, your right to use the Website will immediately cease. Provisions of these
              Terms that by their nature should survive termination will remain in effect.
            </p>
          </section>

          <section id="governing-law" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              These Terms shall be governed by and construed in accordance with the laws of <strong>the Netherlands</strong>
              (&quot;Nederlandse wetgeving&quot;), without regard to its conflict of law principles.
            </p>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Any disputes arising from these Terms or your use of the Website shall be subject to the
              exclusive jurisdiction of the courts of the Netherlands.
            </p>
          </section>

          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">13. Changes to Terms</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately
              upon posting to this page with an updated &quot;Last updated&quot; date.
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Your continued use of the Website after changes are posted constitutes your acceptance of
              the modified Terms. We encourage you to review these Terms periodically.
            </p>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              For material changes, we will make reasonable efforts to provide notice through the Website
              or via email (if you have provided contact information).
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">14. Contact Information</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If you have questions about these Terms or need to report a violation, please contact us:
            </p>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="text-neutral-lightText font-['Lora']">
                <strong className="text-primary-gold">Zenith Reborn</strong><br />
                Nederland<br />
                <strong className="text-primary-gold">Email:</strong> <a href="mailto:hello@zenithreborn.com" className="text-primary-gold hover:text-primary-amber transition-colors">hello@zenithreborn.com</a><br />
                <strong className="text-primary-gold">Website:</strong> <a href="https://zenithreborn.com" className="text-primary-gold hover:text-primary-amber transition-colors">zenithreborn.com</a>
              </p>
            </div>
          </section>

          {/* Additional Notice */}
          <section className="mb-12">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary-amber mb-3">Future App Terms</h3>
              <p className="text-neutral-lightText mb-4 font-['Lora']">
                When our <strong>SkillQuest</strong> application launches, it will have separate Terms of Service
                and Privacy Policy specific to the app&apos;s functionality and features. Those terms will be presented
                to you when you download or register for SkillQuest.
              </p>
              <p className="text-neutral-lightText font-['Lora']">
                The waitlist signup on this Website is governed by these current Terms and our Privacy Policy.
              </p>
            </div>
          </section>

          {/* Severability */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-primary-gold mb-3">Severability</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If any provision of these Terms is found to be invalid or unenforceable by a court of competent
              jurisdiction, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-primary-gold mb-3">Entire Agreement</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement
              between you and Zenith Reborn regarding your use of the Website, and supersede any prior agreements.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-primary-gold/20">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/privacy" className="text-primary-gold hover:text-primary-amber transition-colors font-semibold">
              Privacy Policy
            </Link>
            <span className="text-neutral-lightText/30">•</span>
            <Link href="/cookies" className="text-primary-gold hover:text-primary-amber transition-colors font-semibold">
              Cookie Policy
            </Link>
            <span className="text-neutral-lightText/30">•</span>
            <Link href="/" className="text-primary-gold hover:text-primary-amber transition-colors font-semibold">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

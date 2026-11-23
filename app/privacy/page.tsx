import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Zenith Reborn - Learn how we collect, use, and protect your personal data in compliance with GDPR.',
  openGraph: {
    title: 'Privacy Policy | Zenith Reborn',
    description: 'Privacy Policy for Zenith Reborn - Learn how we collect, use, and protect your personal data in compliance with GDPR.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-darkBg py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gold mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-lightText/70 text-lg">
            Last updated: November 23, 2026
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-black/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-primary-gold mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-neutral-lightText">
            <li><a href="#introduction" className="text-primary-gold hover:text-primary-amber transition-colors">1. Introduction</a></li>
            <li><a href="#data-controller" className="text-primary-gold hover:text-primary-amber transition-colors">2. Data Controller</a></li>
            <li><a href="#data-collection" className="text-primary-gold hover:text-primary-amber transition-colors">3. What Data We Collect</a></li>
            <li><a href="#how-we-use" className="text-primary-gold hover:text-primary-amber transition-colors">4. How We Use Your Data</a></li>
            <li><a href="#legal-basis" className="text-primary-gold hover:text-primary-amber transition-colors">5. Legal Basis for Processing</a></li>
            <li><a href="#data-storage" className="text-primary-gold hover:text-primary-amber transition-colors">6. Data Storage and Security</a></li>
            <li><a href="#third-parties" className="text-primary-gold hover:text-primary-amber transition-colors">7. Third-Party Services</a></li>
            <li><a href="#cookies" className="text-primary-gold hover:text-primary-amber transition-colors">8. Cookies and Tracking</a></li>
            <li><a href="#your-rights" className="text-primary-gold hover:text-primary-amber transition-colors">9. Your Rights Under GDPR</a></li>
            <li><a href="#data-retention" className="text-primary-gold hover:text-primary-amber transition-colors">10. Data Retention</a></li>
            <li><a href="#children" className="text-primary-gold hover:text-primary-amber transition-colors">11. Children&apos;s Privacy</a></li>
            <li><a href="#changes" className="text-primary-gold hover:text-primary-amber transition-colors">12. Changes to This Policy</a></li>
            <li><a href="#contact" className="text-primary-gold hover:text-primary-amber transition-colors">13. Contact Us</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">1. Introduction</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Welcome to Zenith Reborn. We are committed to protecting your personal data and respecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website <strong>zenithreborn.com</strong> and use our services.
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              This policy complies with the General Data Protection Regulation (GDPR) and other applicable
              data protection laws in the European Union and the Netherlands.
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              This policy covers this website only. The SkillQuest app has its own privacy policy at{' '}
              <a href="https://skill-quest.app/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">skill-quest.app/privacy</a>.
            </p>
          </section>

          <section id="data-controller" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">2. Data Controller</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              The data controller responsible for your personal data is:
            </p>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="text-neutral-lightText font-['Lora']">
                <strong className="text-primary-gold">Zenith Reborn</strong><br />
                Johannes Willem Vlasblom, sole proprietorship (eenmanszaak), trading as SkillQuest and Zenith Reborn<br />
                Catharina Hoeve 13, 2804 HE Gouda, the Netherlands<br />
                Dutch Chamber of Commerce (KvK) number: 42188670<br />
                VAT number: NL004310890B26<br />
                Email: <a href="mailto:hello@zenithreborn.com" className="text-primary-gold hover:text-primary-amber transition-colors">hello@zenithreborn.com</a>
              </p>
            </div>
          </section>

          <section id="data-collection" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">3. What Data We Collect</h2>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              We collect and process the following types of personal data:
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">3.1 Website Analytics and Performance</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We use <strong>Vercel Web Analytics</strong> to count visits, including:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Page views and navigation patterns</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Geographic location (country level only)</li>
              <li>Referral source</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Vercel Web Analytics does not use cookies. We only see <strong>aggregated statistics</strong>, not
              individual visitors.
            </p>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              We also use <strong>Vercel Speed Insights</strong> to measure how fast our pages load (for example
              the Core Web Vitals), together with the page address, browser, device type and network speed.
              Speed Insights does not use cookies either.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">3.2 Error Tracking</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We use <strong>Sentry</strong> to find and fix errors on this website. When something goes wrong
              on a page, Sentry receives a technical error report, which may include:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>The error message and where in our code it happened</li>
              <li>The page address where the error occurred</li>
              <li>Browser type and version, and operating system</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              We have set up Sentry so that it does not add personal data such as your IP address or cookies to
              these reports. Like any web server, Sentry does receive your IP address when a report is sent.
              We do <strong>not</strong> record sessions (Session Replay is turned off), and Sentry sets no cookies
              on this website. Error data is sent to Sentry&apos;s EU data region (ingest.de.sentry.io) and stored
              in the EU.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">3.3 Comment System</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We use <strong>Giscus</strong> (GitHub Discussions) for blog comments. When you comment, we collect:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>GitHub username and profile information</li>
              <li>Comment content and timestamp</li>
              <li>Reactions and replies to comments</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              This data is stored on <strong>GitHub</strong> and governed by their privacy policy.
              Authentication is handled entirely by GitHub. Reading comments does not require signing in.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">3.4 Contact Form</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              When you submit our contact form, we collect:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Name</li>
              <li>Email address</li>
              <li>Subject line</li>
              <li>Message content</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              This information is transmitted via <strong>Resend</strong> and emailed to hello@zenithreborn.com.
              We use your email address only to reply to your message.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">3.5 SkillQuest Waitlist (closed)</h3>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              The SkillQuest waitlist has closed now that the app is available in the App Store and on Google Play.
              The sign-ups it held were deleted on November 14, 2026, and this website no longer collects them.
            </p>
          </section>

          <section id="how-we-use" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">4. How We Use Your Data</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Analytics:</strong> To understand how visitors use our website and improve user experience</li>
              <li><strong>Performance and Errors:</strong> To keep the website fast and to find and fix errors</li>
              <li><strong>Comments:</strong> To enable community discussion on blog posts</li>
              <li><strong>Contact Form:</strong> To respond to your inquiries and provide customer support</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section id="legal-basis" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">5. Legal Basis for Processing</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Under GDPR, we process your personal data based on:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Contact Form:</strong> Taking steps at your request and our legitimate interest in answering your message (Art. 6(1)(b) and (f) GDPR)</li>
              <li><strong>Legitimate Interest:</strong> For analytics, performance measurement and error tracking to keep our website working and improve it, and for the comment section on our blog (Art. 6(1)(f) GDPR)</li>
              <li><strong>Legal Obligation:</strong> Where the law requires us to keep or provide data (Art. 6(1)(c) GDPR)</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Where we rely on legitimate interest, you can object at any time (see section 9).
            </p>
          </section>

          <section id="data-storage" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">6. Data Storage and Security</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We implement appropriate technical and organizational measures to protect your data:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>HTTPS encryption for all data transmission</li>
              <li>Regular security updates and monitoring</li>
              <li>Limited access to personal data on a need-to-know basis</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              However, no method of transmission over the internet is 100% secure. While we strive to protect
              your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section id="third-parties" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">7. Third-Party Services</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We use the following third-party services that may process your data:
            </p>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">Vercel (Hosting & Web Analytics)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Purpose:</strong> Website hosting and cookieless analytics<br />
                <strong>Data Location:</strong> EU/US (GDPR-compliant with Standard Contractual Clauses)<br />
                <strong>Privacy Policy:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">vercel.com/legal/privacy-policy</a>
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">Vercel Speed Insights (Performance)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Purpose:</strong> Measuring page load performance, without cookies<br />
                <strong>Data Location:</strong> EU/US (GDPR-compliant with Standard Contractual Clauses)<br />
                <strong>Privacy Policy:</strong> <a href="https://vercel.com/docs/speed-insights/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">vercel.com/docs/speed-insights/privacy-policy</a>
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">Sentry (Error Tracking)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Provider:</strong> Functional Software, Inc.<br />
                <strong>Purpose:</strong> Error tracking for this website; no session recordings<br />
                <strong>Data Location:</strong> EU (error data is sent to ingest.de.sentry.io and stored in the EU)<br />
                <strong>Privacy Policy:</strong> <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">sentry.io/privacy</a>
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">GitHub (Comments via Giscus)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Purpose:</strong> Comment system and authentication<br />
                <strong>Data Location:</strong> US. GitHub stores the comments; the comment widget is loaded from giscus.app, which receives your IP address when a blog post loads<br />
                <strong>Privacy Policy:</strong> <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">docs.github.com/en/site-policy/privacy-policies</a>
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">Resend (Email Delivery)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Purpose:</strong> Contact form email delivery<br />
                <strong>Data Location:</strong> US (Standard Contractual Clauses)<br />
                <strong>Privacy Policy:</strong> <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">resend.com/legal/privacy-policy</a>
              </p>
            </div>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">8. Cookies and Tracking</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              This website itself sets no cookies. The services we use work as follows:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Vercel Web Analytics and Speed Insights:</strong> No cookies</li>
              <li><strong>Sentry:</strong> No cookies, no session recordings</li>
              <li><strong>Giscus (GitHub):</strong> Only when you sign in to comment. GitHub then sets its own cookies on github.com, and Giscus keeps a sign-in token in your browser</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We do <strong>not</strong> use:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Advertising cookies</li>
              <li>Scripts that track you across other websites</li>
              <li>Social media tracking pixels</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              For more details, see our <Link href="/cookies" className="text-primary-gold hover:text-primary-amber transition-colors">Cookie Policy</Link>.
            </p>
          </section>

          <section id="your-rights" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">9. Your Rights Under GDPR</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              As a data subject under GDPR, you have the following rights:
            </p>

            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Access (Art. 15 GDPR)</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Request a copy of the personal data we hold about you.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Rectification (Art. 16 GDPR)</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Request correction of inaccurate or incomplete data.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Erasure (Art. 17 GDPR)</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Request deletion of your personal data (&quot;right to be forgotten&quot;).
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Data Portability (Art. 20 GDPR)</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Receive your data in a structured, machine-readable format.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Object (Art. 21 GDPR)</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Object to processing based on legitimate interests.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Restrict Processing (Art. 18 GDPR)</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Request limitation of how we process your data.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Lodge a Complaint</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  File a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens)
                  at <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">autoriteitpersoonsgegevens.nl</a>
                </p>
              </div>
            </div>

            <p className="text-neutral-lightText mt-6 font-['Lora']">
              To exercise any of these rights, contact us at <a href="mailto:hello@zenithreborn.com" className="text-primary-gold hover:text-primary-amber transition-colors">hello@zenithreborn.com</a>.
              We will respond within <strong>30 days</strong> as required by GDPR.
            </p>
          </section>

          <section id="data-retention" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">10. Data Retention</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We retain your personal data only as long as necessary:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Analytics:</strong> Aggregated statistics without personal identifiers, retained indefinitely</li>
              <li><strong>Error Reports:</strong> Deleted automatically by Sentry after its retention period</li>
              <li><strong>Comments:</strong> Retained as long as the blog post exists (stored on GitHub)</li>
              <li><strong>Contact Form:</strong> Email correspondence retained for up to 2 years</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              You can request deletion of your data at any time.
            </p>
          </section>

          <section id="children" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">11. Children&apos;s Privacy</h2>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Our website is not directed to children under 16 years of age. We do not knowingly collect
              personal data from children. If you are a parent or guardian and believe your child has
              provided us with personal data, please contact us at hello@zenithreborn.com.
            </p>
          </section>

          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">12. Changes to This Policy</h2>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated &quot;Last updated&quot; date. For material changes, we will provide additional notice
              (such as a notice on this website).
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">13. Contact Us</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If you have questions about this Privacy Policy or wish to exercise your rights, contact us:
            </p>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="text-neutral-lightText font-['Lora']">
                <strong className="text-primary-gold">Email:</strong> <a href="mailto:hello@zenithreborn.com" className="text-primary-gold hover:text-primary-amber transition-colors">hello@zenithreborn.com</a><br />
                <strong className="text-primary-gold">Website:</strong> <a href="https://zenithreborn.com" className="text-primary-gold hover:text-primary-amber transition-colors">zenithreborn.com</a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-primary-gold/20">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/terms" className="text-primary-gold hover:text-primary-amber transition-colors font-semibold">
              Terms of Service
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

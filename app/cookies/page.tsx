import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Zenith Reborn - Learn about the cookies and tracking technologies we use on our website.',
  openGraph: {
    title: 'Cookie Policy | Zenith Reborn',
    description: 'Cookie Policy for Zenith Reborn - Learn about the cookies and tracking technologies we use on our website.',
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-neutral-darkBg py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gold mb-4">
            Cookie Policy
          </h1>
          <p className="text-neutral-lightText/70 text-lg">
            Last updated: October 24, 2025
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-secondary-deepRed/10 border border-secondary-deepRed/30 rounded-lg p-6 mb-12">
          <p className="text-neutral-lightText/90 text-sm">
            <strong className="text-primary-gold">Legal Disclaimer:</strong> This is a template cookie policy.
            While we strive for accuracy and GDPR compliance, you should consult with legal counsel to ensure
            it meets your specific needs and jurisdictional requirements.
          </p>
        </div>

        {/* Privacy-Friendly Notice */}
        <div className="bg-primary-gold/10 border border-primary-gold/30 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-bold text-primary-gold mb-2">Privacy-Friendly Approach</h3>
          <p className="text-neutral-lightText font-['Lora']">
            Zenith Reborn takes a <strong>privacy-first approach</strong>. We use minimal cookies and
            tracking technologies—only what&apos;s necessary for core functionality. We do not use advertising
            cookies, third-party trackers, or invasive analytics.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-black/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-primary-gold mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-neutral-lightText">
            <li><a href="#what-are-cookies" className="text-primary-gold hover:text-primary-amber transition-colors">1. What Are Cookies?</a></li>
            <li><a href="#how-we-use" className="text-primary-gold hover:text-primary-amber transition-colors">2. How We Use Cookies</a></li>
            <li><a href="#types-of-cookies" className="text-primary-gold hover:text-primary-amber transition-colors">3. Types of Cookies We Use</a></li>
            <li><a href="#third-party" className="text-primary-gold hover:text-primary-amber transition-colors">4. Third-Party Cookies</a></li>
            <li><a href="#no-tracking" className="text-primary-gold hover:text-primary-amber transition-colors">5. What We Don&apos;t Use</a></li>
            <li><a href="#managing-cookies" className="text-primary-gold hover:text-primary-amber transition-colors">6. Managing Cookies</a></li>
            <li><a href="#gdpr-compliance" className="text-primary-gold hover:text-primary-amber transition-colors">7. GDPR Compliance</a></li>
            <li><a href="#changes" className="text-primary-gold hover:text-primary-amber transition-colors">8. Changes to This Policy</a></li>
            <li><a href="#contact" className="text-primary-gold hover:text-primary-amber transition-colors">9. Contact Us</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="what-are-cookies" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">1. What Are Cookies?</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Cookies are small text files that are placed on your device (computer, smartphone, tablet) when
              you visit a website. They are widely used to make websites work more efficiently and provide
              information to website owners.
            </p>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Cookies can be &quot;session cookies&quot; (deleted when you close your browser) or &quot;persistent cookies&quot;
              (remain on your device for a set period or until manually deleted).
            </p>
          </section>

          <section id="how-we-use" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">2. How We Use Cookies</h2>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Zenith Reborn uses cookies and similar technologies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Essential Website Functionality:</strong> To enable core features like authentication</li>
              <li><strong>Anonymous Analytics:</strong> To understand how visitors use our website (no personal data)</li>
              <li><strong>User Preferences:</strong> To remember your settings and improve your experience</li>
            </ul>
          </section>

          <section id="types-of-cookies" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">3. Types of Cookies We Use</h2>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              Below is a detailed breakdown of the cookies and tracking technologies used on our website:
            </p>

            {/* Vercel Analytics */}
            <div className="bg-black/30 rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-primary-amber">Vercel Analytics</h3>
                <span className="bg-primary-gold/20 text-primary-gold px-3 py-1 rounded-full text-sm font-semibold">
                  Strictly Necessary
                </span>
              </div>
              <div className="space-y-3 text-neutral-lightText font-['Lora']">
                <p><strong className="text-primary-gold">Provider:</strong> Vercel Inc.</p>
                <p><strong className="text-primary-gold">Purpose:</strong> Privacy-friendly analytics to measure page views and performance</p>
                <p><strong className="text-primary-gold">Type:</strong> No cookies (uses anonymous beacons)</p>
                <p><strong className="text-primary-gold">Duration:</strong> N/A (no persistent storage)</p>
                <p><strong className="text-primary-gold">Personal Data:</strong> None - fully anonymous and aggregated</p>
                <p><strong className="text-primary-gold">GDPR Compliant:</strong> Yes - no consent required (legitimate interest)</p>
                <p>
                  <strong className="text-primary-gold">More Info:</strong>{' '}
                  <a
                    href="https://vercel.com/docs/analytics/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-primary-amber transition-colors underline"
                  >
                    Vercel Analytics Privacy Policy
                  </a>
                </p>
              </div>
            </div>

            {/* Vercel Speed Insights */}
            <div className="bg-black/30 rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-primary-amber">Vercel Speed Insights</h3>
                <span className="bg-primary-gold/20 text-primary-gold px-3 py-1 rounded-full text-sm font-semibold">
                  Performance
                </span>
              </div>
              <div className="space-y-3 text-neutral-lightText font-['Lora']">
                <p><strong className="text-primary-gold">Provider:</strong> Vercel Inc.</p>
                <p><strong className="text-primary-gold">Purpose:</strong> Real User Monitoring (RUM) for Core Web Vitals and performance metrics</p>
                <p><strong className="text-primary-gold">Type:</strong> No cookies (uses anonymous beacons)</p>
                <p><strong className="text-primary-gold">Duration:</strong> N/A (no persistent storage)</p>
                <p><strong className="text-primary-gold">Personal Data:</strong> None - performance data only</p>
                <p><strong className="text-primary-gold">GDPR Compliant:</strong> Yes - no consent required (legitimate interest)</p>
                <p>
                  <strong className="text-primary-gold">More Info:</strong>{' '}
                  <a
                    href="https://vercel.com/docs/speed-insights/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-primary-amber transition-colors underline"
                  >
                    Speed Insights Privacy Policy
                  </a>
                </p>
              </div>
            </div>

            {/* Giscus (GitHub) */}
            <div className="bg-black/30 rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-primary-amber">Giscus (GitHub Authentication)</h3>
                <span className="bg-primary-amber/20 text-primary-amber px-3 py-1 rounded-full text-sm font-semibold">
                  Functional
                </span>
              </div>
              <div className="space-y-3 text-neutral-lightText font-['Lora']">
                <p><strong className="text-primary-gold">Provider:</strong> GitHub Inc.</p>
                <p><strong className="text-primary-gold">Purpose:</strong> Authentication for blog comment system</p>
                <p><strong className="text-primary-gold">Type:</strong> Session and persistent cookies</p>
                <p><strong className="text-primary-gold">Cookie Names:</strong> <code className="bg-black/50 px-2 py-1 rounded text-sm">_gh_sess</code>, <code className="bg-black/50 px-2 py-1 rounded text-sm">logged_in</code>, <code className="bg-black/50 px-2 py-1 rounded text-sm">dotcom_user</code></p>
                <p><strong className="text-primary-gold">Duration:</strong> Session cookies (deleted when browser closes) and persistent cookies (up to 1 year)</p>
                <p><strong className="text-primary-gold">Personal Data:</strong> GitHub username, profile information (only if you sign in)</p>
                <p><strong className="text-primary-gold">GDPR Compliant:</strong> Yes - requires user action to authenticate</p>
                <p className="text-neutral-lightText/80 italic">
                  Note: These cookies are only set if you choose to sign in with GitHub to leave a comment.
                  They are managed entirely by GitHub and governed by their privacy policy.
                </p>
                <p>
                  <strong className="text-primary-gold">More Info:</strong>{' '}
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-primary-amber transition-colors underline"
                  >
                    GitHub Privacy Statement
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section id="third-party" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">4. Third-Party Cookies</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We use a limited number of third-party services that may set cookies:
            </p>

            <div className="bg-black/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-primary-amber mb-3">GitHub (via Giscus)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                When you authenticate with GitHub to comment on our blog, GitHub may set cookies to maintain
                your session. These cookies are governed by GitHub&apos;s privacy policy and cookie policy.
              </p>
              <p className="text-neutral-lightText font-['Lora']">
                We do not have control over these cookies, but they are only set if you actively choose to
                sign in with GitHub.
              </p>
            </div>

            <p className="text-neutral-lightText mb-4 font-['Lora']">
              All third-party services we use are carefully selected for their GDPR compliance and
              privacy-friendly practices.
            </p>
          </section>

          <section id="no-tracking" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">5. What We Don&apos;t Use</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              To respect your privacy, we explicitly <strong>DO NOT</strong> use:
            </p>

            <div className="bg-secondary-deepRed/10 border border-secondary-deepRed/30 rounded-lg p-6">
              <ul className="list-none space-y-3 text-neutral-lightText font-['Lora']">
                <li className="flex items-start">
                  <span className="text-primary-gold mr-3 text-xl">✗</span>
                  <span><strong>Advertising Cookies:</strong> No cookies for targeted ads or retargeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-gold mr-3 text-xl">✗</span>
                  <span><strong>Social Media Tracking Pixels:</strong> No Facebook Pixel, Twitter tracking, etc.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-gold mr-3 text-xl">✗</span>
                  <span><strong>Cross-Site Tracking:</strong> No cookies that track you across different websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-gold mr-3 text-xl">✗</span>
                  <span><strong>Google Analytics:</strong> We use privacy-friendly Vercel Analytics instead</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-gold mr-3 text-xl">✗</span>
                  <span><strong>Third-Party Ad Networks:</strong> No external advertising services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-gold mr-3 text-xl">✗</span>
                  <span><strong>Fingerprinting Technologies:</strong> No device fingerprinting or browser fingerprinting</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="managing-cookies" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">6. Managing Cookies</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              You have control over cookies and can manage them through your browser settings.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">Browser Settings</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>View cookies stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all third-party cookies</li>
              <li>Clear cookies when you close your browser</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">How to Disable Cookies by Browser</h3>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-primary-gold mb-2">Google Chrome</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Settings → Privacy and security → Cookies and other site data → Block third-party cookies<br />
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-primary-amber transition-colors underline text-sm"
                  >
                    Chrome Cookie Settings Guide
                  </a>
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-primary-gold mb-2">Mozilla Firefox</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Settings → Privacy &amp; Security → Enhanced Tracking Protection<br />
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-primary-amber transition-colors underline text-sm"
                  >
                    Firefox Cookie Settings Guide
                  </a>
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-primary-gold mb-2">Safari</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Preferences → Privacy → Block all cookies<br />
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-primary-amber transition-colors underline text-sm"
                  >
                    Safari Cookie Settings Guide
                  </a>
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-primary-gold mb-2">Microsoft Edge</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Settings → Cookies and site permissions → Manage and delete cookies<br />
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:text-primary-amber transition-colors underline text-sm"
                  >
                    Edge Cookie Settings Guide
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-primary-amber/10 border border-primary-amber/30 rounded-lg p-6 mt-6">
              <p className="text-neutral-lightText font-['Lora']">
                <strong className="text-primary-amber">Note:</strong> Disabling cookies may affect the functionality
                of our website. For example, you won&apos;t be able to sign in with GitHub to leave comments if you
                block all cookies.
              </p>
            </div>
          </section>

          <section id="gdpr-compliance" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">7. GDPR Compliance</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Our use of cookies complies with the General Data Protection Regulation (GDPR) and the ePrivacy Directive:
            </p>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-lg font-bold text-primary-amber mb-3">Legal Basis</h4>
              <ul className="list-disc list-inside text-neutral-lightText space-y-2 font-['Lora']">
                <li><strong>Strictly Necessary Cookies:</strong> No consent required (legitimate interest)</li>
                <li><strong>Functional Cookies:</strong> Implicit consent through user action (e.g., signing in with GitHub)</li>
                <li><strong>Analytics Cookies:</strong> Legitimate interest (anonymous, no personal data)</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-lg font-bold text-primary-amber mb-3">Your Rights</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                Under GDPR, you have the right to:
              </p>
              <ul className="list-disc list-inside text-neutral-lightText space-y-2 font-['Lora']">
                <li>Know what cookies are used and why</li>
                <li>Refuse or withdraw consent for non-essential cookies</li>
                <li>Access and delete cookie data</li>
              </ul>
            </div>

            <p className="text-neutral-lightText mb-4 font-['Lora']">
              For more information about how we handle your personal data, please see our{' '}
              <Link href="/privacy" className="text-primary-gold hover:text-primary-amber transition-colors">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">8. Changes to This Policy</h2>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for
              legal, operational, or regulatory reasons. Changes will be posted on this page with an updated
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">9. Contact Us</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If you have questions about this Cookie Policy or our use of cookies, please contact us:
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
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-primary-gold/20">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/privacy" className="text-primary-gold hover:text-primary-amber transition-colors font-semibold">
              Privacy Policy
            </Link>
            <span className="text-neutral-lightText/30">•</span>
            <Link href="/terms" className="text-primary-gold hover:text-primary-amber transition-colors font-semibold">
              Terms of Service
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

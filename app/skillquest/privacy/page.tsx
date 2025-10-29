import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - SkillQuest',
  description: 'Privacy Policy for SkillQuest - Learn how we collect, use, and protect your personal data when you use the SkillQuest mobile app.',
  openGraph: {
    title: 'Privacy Policy - SkillQuest | Zenith Reborn',
    description: 'Privacy Policy for SkillQuest - Learn how we collect, use, and protect your personal data when you use the SkillQuest mobile app.',
  },
};

export default function SkillQuestPrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-darkBg py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gold mb-4">
            Privacy Policy for SkillQuest
          </h1>
          <p className="text-neutral-lightText/70 text-lg">
            Last updated: October 25, 2024
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-black/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-primary-gold mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-neutral-lightText">
            <li><a href="#introduction" className="text-primary-gold hover:text-primary-amber transition-colors">1. Introduction</a></li>
            <li><a href="#information-we-collect" className="text-primary-gold hover:text-primary-amber transition-colors">2. Information We Collect</a></li>
            <li><a href="#how-we-use" className="text-primary-gold hover:text-primary-amber transition-colors">3. How We Use Your Information</a></li>
            <li><a href="#data-storage" className="text-primary-gold hover:text-primary-amber transition-colors">4. Data Storage and Security</a></li>
            <li><a href="#third-parties" className="text-primary-gold hover:text-primary-amber transition-colors">5. Third-Party Services</a></li>
            <li><a href="#your-rights" className="text-primary-gold hover:text-primary-amber transition-colors">6. Your Data Rights</a></li>
            <li><a href="#children" className="text-primary-gold hover:text-primary-amber transition-colors">7. Children&apos;s Privacy</a></li>
            <li><a href="#family-sharing" className="text-primary-gold hover:text-primary-amber transition-colors">8. Family Sharing</a></li>
            <li><a href="#international" className="text-primary-gold hover:text-primary-amber transition-colors">9. International Data Transfers</a></li>
            <li><a href="#changes" className="text-primary-gold hover:text-primary-amber transition-colors">10. Changes to This Privacy Policy</a></li>
            <li><a href="#contact" className="text-primary-gold hover:text-primary-amber transition-colors">11. Contact Us</a></li>
            <li><a href="#legal-compliance" className="text-primary-gold hover:text-primary-amber transition-colors">12. Legal Compliance</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">1. Introduction</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              SkillQuest (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our mobile
              application SkillQuest (the &quot;App&quot;).
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the application.
            </p>
          </section>

          <section id="information-we-collect" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">2. Information We Collect</h2>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">2.1 Personal Information You Provide</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              When you register for and use our App, you may provide us with:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Google Account Information:</strong> Email address, name, and profile picture when you sign in with Google</li>
              <li><strong>Profile Information:</strong> Username, display name, and optional profile customization</li>
              <li><strong>Usage Data:</strong> Skills you track, time spent on activities, session history, and progress statistics</li>
              <li><strong>Device Information:</strong> Device type, operating system version, and unique device identifiers</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              When you use the App, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>App Usage Data:</strong> Features you use, screens you visit, and actions you take within the App</li>
              <li><strong>Device Data:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Performance Data:</strong> Crash reports, error logs, and performance metrics (via Sentry)</li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">3. How We Use Your Information</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Provide and maintain the App:</strong> Enable core functionality including timer tracking, skill management, and progress statistics</li>
              <li><strong>Personalize your experience:</strong> Save your preferences, themes, and customization settings</li>
              <li><strong>Sync across devices:</strong> Store your data securely in the cloud for access from multiple devices</li>
              <li><strong>Improve the App:</strong> Analyze usage patterns to enhance features and user experience</li>
              <li><strong>Communicate with you:</strong> Send important updates, security alerts, and respond to support requests</li>
              <li><strong>Ensure security:</strong> Detect and prevent fraud, abuse, and security threats</li>
            </ul>
          </section>

          <section id="data-storage" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">4. Data Storage and Security</h2>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">4.1 Cloud Storage</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Your data is stored securely using Supabase, a cloud database provider:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Location:</strong> Data is stored in secure servers located in the United States (US-East-2 region)</li>
              <li><strong>Encryption:</strong> All data is encrypted in transit using HTTPS/TLS and at rest using AES-256 encryption</li>
              <li><strong>Access Control:</strong> Your data is protected by industry-standard security measures and access controls</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">4.2 Local Storage</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Some data is stored locally on your device:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Guest Mode Data:</strong> If you use the app without signing in, your data is stored only on your device</li>
              <li><strong>Cache Data:</strong> Temporary data cached locally for improved performance</li>
              <li><strong>Preferences:</strong> App settings and theme preferences</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">4.3 Data Retention</h3>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Active Accounts:</strong> We retain your data for as long as your account is active</li>
              <li><strong>Deleted Accounts:</strong> When you delete your account, we permanently delete your personal data within 30 days</li>
              <li><strong>Legal Requirements:</strong> Some data may be retained longer if required by law</li>
            </ul>
          </section>

          <section id="third-parties" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">5. Third-Party Services</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We use the following third-party services that may collect information about you:
            </p>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">Google Sign-In (Authentication)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Purpose:</strong> Secure authentication and account management<br />
                <strong>Data Shared:</strong> Email address, name, profile picture<br />
                <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">policies.google.com/privacy</a>
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">Supabase (Database & Backend)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Purpose:</strong> Cloud data storage and synchronization<br />
                <strong>Data Shared:</strong> All app data (skills, sessions, statistics, preferences)<br />
                <strong>Privacy Policy:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">supabase.com/privacy</a>
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">RevenueCat (Subscription Management)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Purpose:</strong> In-app purchase and subscription management<br />
                <strong>Data Shared:</strong> Purchase history, subscription status<br />
                <strong>Privacy Policy:</strong> <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">revenuecat.com/privacy</a>
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-bold text-primary-amber mb-2">Sentry (Error Monitoring - Optional)</h4>
              <p className="text-neutral-lightText mb-2 font-['Lora']">
                <strong>Purpose:</strong> Crash reporting and error monitoring<br />
                <strong>Data Shared:</strong> Anonymous error logs, device information<br />
                <strong>Privacy Policy:</strong> <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-amber transition-colors">sentry.io/privacy</a><br />
                <strong>Note:</strong> Error monitoring can be disabled in app settings
              </p>
            </div>
          </section>

          <section id="your-rights" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">6. Your Data Rights</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              You have the following rights regarding your personal data:
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">6.1 Access and Portability</h3>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>View Your Data:</strong> Access all your personal data through the app&apos;s profile and settings</li>
              <li><strong>Export Your Data:</strong> Request a copy of your data in a portable format by contacting support@zenithreborn.com</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">6.2 Modification and Deletion</h3>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Update Information:</strong> Modify your profile, preferences, and settings at any time within the App</li>
              <li><strong>Delete Account:</strong> Permanently delete your account and all associated data from Settings → Account → Delete Account</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">6.3 Control and Consent</h3>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Opt-Out of Analytics:</strong> Disable performance monitoring and error reporting in app settings</li>
              <li><strong>Manage Permissions:</strong> Control app permissions through your device settings</li>
            </ul>
          </section>

          <section id="children" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              SkillQuest is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us at support@zenithreborn.com, and we will
              delete such information from our systems.
            </p>
          </section>

          <section id="family-sharing" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">8. Family Sharing</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If you participate in our Family Plan feature:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Family Owner:</strong> The account that creates the family can manage member roles and permissions</li>
              <li><strong>Family Members:</strong> Members can view shared data as permitted by their role (Parent, Child, Normal)</li>
              <li><strong>Data Visibility:</strong> Parents can view child progress statistics; members cannot access each other&apos;s personal account data</li>
              <li><strong>Consent:</strong> Role changes to &quot;Child&quot; status require explicit consent from the target user</li>
            </ul>
          </section>

          <section id="international" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">9. International Data Transfers</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Your information may be transferred to and maintained on computers located outside of your state,
              province, country, or other governmental jurisdiction where data protection laws may differ. By
              using SkillQuest, you consent to such transfers.
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Our servers are located in the United States. If you are accessing the App from outside the United
              States, your information will be transferred to, stored, and processed in the United States.
            </p>
          </section>

          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the &quot;Last Updated&quot; date at the top of this Privacy Policy</li>
              <li>Sending an in-app notification for significant changes</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">11. Contact Us</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="text-neutral-lightText font-['Lora']">
                <strong className="text-primary-gold">Email:</strong> <a href="mailto:support@zenithreborn.com" className="text-primary-gold hover:text-primary-amber transition-colors">support@zenithreborn.com</a><br />
                <strong className="text-primary-gold">Website:</strong> <a href="https://zenithreborn.com/skillquest" className="text-primary-gold hover:text-primary-amber transition-colors">zenithreborn.com/skillquest</a><br />
                <strong className="text-primary-gold">Developer:</strong> Zenith Reborn
              </p>
            </div>
          </section>

          <section id="legal-compliance" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">12. Legal Compliance</h2>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">12.1 GDPR Compliance (EU Users)</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If you are located in the European Economic Area (EEA), you have additional rights under the
              General Data Protection Regulation (GDPR):
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Access</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Request access to your personal data
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Rectification</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Request correction of inaccurate data
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Erasure</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Request deletion of your personal data (&quot;right to be forgotten&quot;)
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Restrict Processing</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Request limitation of how we use your data
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Data Portability</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Receive your data in a structured, machine-readable format
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Object</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Object to our processing of your personal data
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-amber mb-2">Right to Withdraw Consent</h4>
                <p className="text-neutral-lightText font-['Lora']">
                  Withdraw consent for data processing at any time
                </p>
              </div>
            </div>

            <p className="text-neutral-lightText mb-6 font-['Lora']">
              To exercise these rights, contact us at support@zenithreborn.com.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">12.2 California Privacy Rights (CCPA)</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Right to Know:</strong> Know what personal information we collect, use, and disclose</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information (Note: We do not sell personal information)</li>
              <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your privacy rights</li>
            </ul>
            <p className="text-neutral-lightText mb-6 font-['Lora']">
              To exercise these rights, contact us at support@zenithreborn.com.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">12.3 Data Processing Legal Basis</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We process your personal data based on:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li><strong>Consent:</strong> You have given explicit consent for processing (e.g., creating an account)</li>
              <li><strong>Contract:</strong> Processing is necessary to provide the App services</li>
              <li><strong>Legitimate Interest:</strong> Processing is necessary for our legitimate business interests (e.g., improving the App)</li>
              <li><strong>Legal Obligation:</strong> Processing is required by law</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-primary-gold/20">
          <p className="text-center text-neutral-lightText/70 mb-4 font-['Lora']">
            <strong className="text-primary-gold">SkillQuest by Zenith Reborn</strong><br />
            Copyright © 2025 Zenith Reborn. All rights reserved.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/skillquest/terms" className="text-primary-gold hover:text-primary-amber transition-colors font-semibold">
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

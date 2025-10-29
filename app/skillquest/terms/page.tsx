import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - SkillQuest',
  description: 'Terms of Service for SkillQuest - Read the terms and conditions for using the SkillQuest mobile app.',
  openGraph: {
    title: 'Terms of Service - SkillQuest | Zenith Reborn',
    description: 'Terms of Service for SkillQuest - Read the terms and conditions for using the SkillQuest mobile app.',
  },
};

export default function SkillQuestTermsPage() {
  return (
    <div className="min-h-screen bg-neutral-darkBg py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gold mb-4">
            Terms of Service - SkillQuest
          </h1>
          <p className="text-neutral-lightText/70 text-lg">
            Last updated: October 25, 2024
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-black/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-primary-gold mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-neutral-lightText">
            <li><a href="#acceptance" className="text-primary-gold hover:text-primary-amber transition-colors">1. Acceptance of Terms</a></li>
            <li><a href="#license" className="text-primary-gold hover:text-primary-amber transition-colors">2. Use License</a></li>
            <li><a href="#account" className="text-primary-gold hover:text-primary-amber transition-colors">3. Account Responsibilities</a></li>
            <li><a href="#prohibited" className="text-primary-gold hover:text-primary-amber transition-colors">4. Prohibited Uses</a></li>
            <li><a href="#subscriptions" className="text-primary-gold hover:text-primary-amber transition-colors">5. Subscriptions</a></li>
            <li><a href="#intellectual-property" className="text-primary-gold hover:text-primary-amber transition-colors">6. Intellectual Property</a></li>
            <li><a href="#liability" className="text-primary-gold hover:text-primary-amber transition-colors">7. Limitation of Liability</a></li>
            <li><a href="#changes" className="text-primary-gold hover:text-primary-amber transition-colors">8. Changes to Terms</a></li>
            <li><a href="#contact" className="text-primary-gold hover:text-primary-amber transition-colors">9. Contact</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="acceptance" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">1. Acceptance of Terms</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              By downloading, installing, or using SkillQuest, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use the App.
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              These Terms constitute a legally binding agreement between you and Zenith Reborn regarding your
              use of the SkillQuest mobile application.
            </p>
          </section>

          <section id="license" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">2. Use License</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              SkillQuest grants you a personal, non-exclusive, non-transferable, revocable license to use the
              App for personal productivity purposes, subject to these Terms.
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              This license permits you to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Install and use the App on devices you own or control</li>
              <li>Access and use the App&apos;s features in accordance with these Terms</li>
              <li>Sync your data across multiple devices</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              This license does <strong>not</strong> permit you to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Modify, reverse engineer, or decompile the App</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use the App for commercial purposes without written permission</li>
              <li>Transfer or sublicense your rights to any other person</li>
            </ul>
          </section>

          <section id="account" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">3. Account Responsibilities</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              When you create an account with SkillQuest, you are responsible for:
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">3.1 Account Security</h3>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">3.2 Accurate Information</h3>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Providing accurate and complete information when creating your account</li>
              <li>Keeping your account information up to date</li>
              <li>Not impersonating any person or entity</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">3.3 Account Sharing</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              You must not share your account with others. Each user should maintain their own individual account.
              Family sharing is available through the Family Plan feature, which allows separate accounts with
              shared subscription benefits.
            </p>
          </section>

          <section id="prohibited" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">4. Prohibited Uses</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              You may not use the App to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others, including intellectual property rights</li>
              <li>Transmit any harmful code, viruses, or malware</li>
              <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
              <li>Interfere with the proper functioning of the App</li>
              <li>Use the App for any illegal, harmful, or abusive purpose</li>
              <li>Collect or harvest any information about other users</li>
              <li>Use automated systems or bots to access the App</li>
            </ul>

            <div className="bg-secondary-deepRed/10 border border-secondary-deepRed/30 rounded-lg p-6 mb-6">
              <p className="text-neutral-lightText/90 text-sm">
                <strong className="text-primary-gold">Important:</strong> Violation of these prohibited uses may
                result in immediate termination of your account and legal action if necessary.
              </p>
            </div>
          </section>

          <section id="subscriptions" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">5. Subscriptions</h2>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">5.1 Subscription Plans</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              SkillQuest offers both free and premium subscription plans. Premium subscriptions provide access
              to additional features and functionality.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">5.2 Billing</h3>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Premium subscriptions are billed monthly or yearly, as selected</li>
              <li>Billing is handled through the Google Play Store or Apple App Store</li>
              <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
              <li>Prices are subject to change with notice to existing subscribers</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">5.3 Free Trials</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Free trials, when offered, provide temporary access to premium features. Free trials automatically
              convert to paid subscriptions unless cancelled before the trial period ends.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">5.4 Cancellation and Refunds</h3>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>You can cancel subscriptions at any time through your device&apos;s app store settings</li>
              <li>Cancellations take effect at the end of the current billing period</li>
              <li>Refunds are handled according to Google Play Store and Apple App Store policies</li>
              <li>No refunds are provided for partial subscription periods</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">5.5 Family Plan</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              The Family Plan allows multiple family members to share a subscription. The family owner is
              responsible for managing the family and is liable for all subscription charges.
            </p>
          </section>

          <section id="intellectual-property" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">6. Intellectual Property</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              All content, features, and functionality of SkillQuest, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Software code, design, and architecture</li>
              <li>Text, graphics, logos, and images</li>
              <li>User interface and experience design</li>
              <li>Trademarks, service marks, and trade names</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              are owned by Zenith Reborn and protected by international copyright, trademark, patent, trade
              secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              <strong>Your Content:</strong> You retain ownership of any data or content you create within the
              App. By using the App, you grant us a limited license to store, process, and display your content
              solely for the purpose of providing the App&apos;s services to you.
            </p>
          </section>

          <section id="liability" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">7. Limitation of Liability</h2>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">7.1 &quot;As Is&quot; Disclaimer</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              SkillQuest is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express
              or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the App will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy or reliability of any content</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">7.2 Limitation of Damages</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              To the maximum extent permitted by law, Zenith Reborn shall not be liable for any:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, or use</li>
              <li>Business interruption or loss of goodwill</li>
              <li>Damages arising from your use or inability to use the App</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              Our total liability to you for all claims arising from your use of the App shall not exceed the
              amount you paid to us in the twelve (12) months preceding the claim, or $100 USD, whichever is
              greater.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">7.3 Indemnification</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              You agree to indemnify and hold harmless Zenith Reborn from any claims, damages, losses, or
              expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>Your use or misuse of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another person or entity</li>
            </ul>
          </section>

          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">8. Changes to Terms</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              We reserve the right to modify these Terms at any time. When we make changes:
            </p>
            <ul className="list-disc list-inside text-neutral-lightText mb-6 space-y-2 font-['Lora']">
              <li>We will update the &quot;Last Updated&quot; date at the top of this page</li>
              <li>We will provide notice of material changes through the App or via email</li>
              <li>Continued use of the App after changes constitutes acceptance of the updated Terms</li>
            </ul>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If you do not agree to the modified Terms, you must stop using the App and may delete your account.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">9. Contact</h2>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              For questions about these Terms, contact:
            </p>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="text-neutral-lightText font-['Lora']">
                <strong className="text-primary-gold">Email:</strong> <a href="mailto:support@zenithreborn.com" className="text-primary-gold hover:text-primary-amber transition-colors">support@zenithreborn.com</a><br />
                <strong className="text-primary-gold">Website:</strong> <a href="https://zenithreborn.com/skillquest" className="text-primary-gold hover:text-primary-amber transition-colors">zenithreborn.com/skillquest</a><br />
                <strong className="text-primary-gold">Developer:</strong> Zenith Reborn
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-gold mb-4">Additional Terms</h2>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">Governing Law</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              These Terms shall be governed by and construed in accordance with the laws of the Netherlands,
              without regard to its conflict of law provisions.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">Severability</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be
              limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain
              in full force and effect.
            </p>

            <h3 className="text-2xl font-bold text-primary-amber mb-3">Entire Agreement</h3>
            <p className="text-neutral-lightText mb-4 font-['Lora']">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and
              Zenith Reborn regarding the use of SkillQuest and supersede all prior agreements.
            </p>
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
            <Link href="/skillquest/privacy" className="text-primary-gold hover:text-primary-amber transition-colors font-semibold">
              Privacy Policy
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

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-secondary/30 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">Last updated: September 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              AruArts ("we" or "us" or "our") operates the www.aruarts.com website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We collect several different types of information for various purposes to provide and improve our service to you.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li><strong>Personal Data:</strong> While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you</li>
                  <li><strong>Usage Data:</strong> We may also collect information about how the Site is accessed and used</li>
                  <li><strong>Location Data:</strong> We may request access to your location for delivery purposes</li>
                  <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our Site</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              AruArts uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>To provide and maintain our Site</li>
              <li>To notify you about changes to our Site</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information so that we can improve our Site</li>
              <li>To monitor the usage of our Site</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site may contain links to third-party sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove such information from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <p className="text-foreground font-medium">AruArts</p>
              <p className="text-muted-foreground text-sm">Email: privacy@aruarts.com</p>
              <p className="text-muted-foreground text-sm">Phone: +91 98765 43210</p>
              <p className="text-muted-foreground text-sm">Address: Bengaluru, India</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability where applicable</li>
            </ul>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 border-t pt-8">
          <div className="mx-auto max-w-4xl">
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

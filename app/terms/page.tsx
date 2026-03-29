import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — Nativ Social',
  description: 'Terms of Use for Nativ Social mobile application.',
}

export default function TermsPage() {
  return (
    <main className="legal-page">
      <nav className="legal-nav">
        <a href="/" className="logo">
          nativ<span>.</span>social
        </a>
      </nav>

      <article className="legal-content">
        <h1>Terms of Use</h1>
        <p className="legal-updated">Last updated: March 29, 2026</p>

        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you
          (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and Subroutine Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          or &ldquo;our&rdquo;), governing your use of the Nativ Social mobile application (&ldquo;App&rdquo;).
          By creating an account or using the App, you agree to be bound by these Terms. If you do not agree,
          do not use the App.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least 13 years old to use the App. By using the App, you represent that you meet this
          age requirement. If you are under the age of majority in your jurisdiction, you must have the consent
          of a parent or legal guardian.
        </p>

        <h2>2. Account Registration</h2>
        <p>
          To access certain features, you must create an account using Apple Sign-In or Google Sign-In. You are
          responsible for maintaining the security of your account credentials. You may not share your account or
          allow others to access it.
        </p>

        <h2>3. User-Generated Content</h2>

        <h3>3.1 Content You Create</h3>
        <p>The App allows you to create and share content including:</p>
        <ul>
          <li><strong>Pulses</strong> &mdash; short text posts (up to 20 words) pinned to your location, with optional photos</li>
          <li><strong>Replies</strong> &mdash; text responses to Pulses</li>
          <li><strong>Direct Messages</strong> &mdash; text and photo messages to other users</li>
          <li><strong>Profile Information</strong> &mdash; display name, profile photo, and other profile details</li>
        </ul>
        <p>
          You retain ownership of the content you create. By posting content on the App, you grant us a
          non-exclusive, worldwide, royalty-free license to use, display, reproduce, and distribute your content
          solely for the purpose of operating and improving the App.
        </p>

        <h3>3.2 Zero-Tolerance Policy for Objectionable Content</h3>
        <p>
          We have a <strong>zero-tolerance policy</strong> for objectionable content and abusive behavior.
          You agree NOT to post, share, or transmit content that:
        </p>
        <ul>
          <li>Contains hate speech, slurs, or discrimination based on race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic</li>
          <li>Is harassing, bullying, threatening, or abusive toward any individual or group</li>
          <li>Contains or promotes violence, terrorism, or violent extremism</li>
          <li>Contains nudity, sexually explicit material, or sexual solicitation</li>
          <li>Is spam, fraud, scams, or deceptive content</li>
          <li>Contains false or misleading information intended to deceive</li>
          <li>Promotes or facilitates illegal activities</li>
          <li>Infringes on the intellectual property rights of others</li>
        </ul>

        <h3>3.3 Content Moderation</h3>
        <p>We employ multiple methods to enforce our content standards:</p>
        <ul>
          <li><strong>Automated filtering</strong> &mdash; text content is screened against prohibited words and phrases before submission</li>
          <li><strong>Image screening</strong> &mdash; uploaded images are analyzed for objectionable material using automated safety detection</li>
          <li><strong>User reporting</strong> &mdash; users can report content that violates these Terms</li>
          <li><strong>Manual review</strong> &mdash; reported content is reviewed by our team</li>
        </ul>

        <h3>3.4 Consequences of Violations</h3>
        <p>If you violate these Terms:</p>
        <ul>
          <li>Your content will be removed promptly, and we commit to acting on reports within <strong>24 hours</strong></li>
          <li>Your account may be suspended or permanently terminated</li>
          <li>We may block your access to the App without prior notice</li>
          <li>We reserve the right to report illegal activity to law enforcement</li>
        </ul>

        <h2>4. Reporting and Blocking</h2>

        <h3>4.1 Reporting Content</h3>
        <p>
          You can report any Pulse, reply, or user that you believe violates these Terms. Reports are reviewed
          by our team, and we will take appropriate action within 24 hours. Report categories include: spam,
          false information, violent speech, hate/harassment/bullying/abuse, terrorism, nudity/sexual activity,
          and illegal content.
        </p>

        <h3>4.2 Blocking Users</h3>
        <p>You can block any user at any time. When you block a user:</p>
        <ul>
          <li>All existing conversations between you and the blocked user are permanently deleted</li>
          <li>The blocked user will no longer appear in your feed or nearby users</li>
          <li>The block is logged and our team is notified for review</li>
        </ul>

        <h2>5. Location Data</h2>
        <p>
          The App uses your device location to provide its core functionality, including showing nearby Pulses,
          displaying nearby users, and attaching location to content you share. Location is accessed only while
          the App is in use. You can revoke location permission at any time through your device settings, though
          this will limit the App&apos;s functionality.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          The App, including its design, code, branding, and all non-user-generated content, is owned by
          Subroutine Labs and protected by applicable intellectual property laws. You may not copy, modify,
          distribute, or reverse-engineer any part of the App.
        </p>

        <h2>7. DMCA and Copyright</h2>
        <p>
          If you believe that content on the App infringes your copyright, please contact us at{' '}
          <a href="mailto:admin@nativ.social">admin@nativ.social</a> with the following information:
        </p>
        <ul>
          <li>A description of the copyrighted work</li>
          <li>The location of the infringing content within the App</li>
          <li>Your contact information</li>
          <li>A statement that you have a good-faith belief that the use is unauthorized</li>
          <li>A statement, under penalty of perjury, that the information is accurate and that you are the copyright owner or authorized to act on behalf of the owner</li>
        </ul>

        <h2>8. Privacy</h2>
        <p>
          Your use of the App is also governed by our <a href="/privacy">Privacy Policy</a>. Please review it
          to understand how we collect, use, and protect your information.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          The App is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without warranties of any kind,
          whether express or implied, including but not limited to implied warranties of merchantability, fitness
          for a particular purpose, and non-infringement.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Subroutine Labs shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill,
          arising from or related to your use of the App. Our total liability shall not exceed $100 USD.
        </p>

        <h2>11. Account Termination</h2>
        <p>
          You may delete your account at any time from the App settings. We may suspend or terminate your account
          at any time if you violate these Terms, your content is found to be objectionable, or as required by law.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Subroutine Labs, its officers, directors, employees, and agents
          from any claims, liabilities, damages, losses, and expenses arising from your use of the App or violation
          of these Terms.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
          United States, without regard to its conflict of law provisions.
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of material changes by updating the
          &ldquo;Last updated&rdquo; date. Continued use of the App after changes constitutes acceptance.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          If you have questions about these Terms, please contact us at{' '}
          <a href="mailto:admin@nativ.social">admin@nativ.social</a>.
        </p>
      </article>

      <footer className="legal-footer">
        <span>&copy; {new Date().getFullYear()} Nativ Social, Inc.</span>
        <span>nativ.social</span>
      </footer>
    </main>
  )
}

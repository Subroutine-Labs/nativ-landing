import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Guidelines — Nativ Social',
  description: 'Community Guidelines for Nativ Social mobile application.',
}

export default function GuidelinesPage() {
  return (
    <main className="legal-page">
      <nav className="legal-nav">
        <a href="/" className="logo">
          nativ<span>.</span>social
        </a>
      </nav>

      <article className="legal-content">
        <h1>Community Guidelines</h1>
        <p className="legal-updated">Last updated: March 29, 2026</p>

        <p>
          Nativ is a location-based social platform where people share what&apos;s happening around them and
          connect with others nearby. These guidelines exist to keep Nativ safe, respectful, and useful for everyone.
        </p>
        <p>
          By using Nativ, you agree to follow these guidelines. Violations may result in content removal and
          account termination.
        </p>

        <h2>Be Respectful</h2>
        <ul>
          <li>Treat others the way you&apos;d want to be treated</li>
          <li>Disagree respectfully &mdash; personal attacks and insults are not tolerated</li>
          <li>Respect people&apos;s privacy &mdash; do not share others&apos; personal information</li>
        </ul>

        <h2>No Hate Speech or Discrimination</h2>
        <p>
          Content that promotes hatred, violence, or discrimination based on race, ethnicity, religion, gender,
          sexual orientation, age, disability, or any other protected characteristic is strictly prohibited.
        </p>

        <h2>No Harassment or Bullying</h2>
        <ul>
          <li>Do not threaten, intimidate, or target individuals or groups</li>
          <li>Do not engage in stalking, doxxing, or coordinated harassment</li>
          <li>Do not send unwanted or inappropriate messages</li>
        </ul>

        <h2>No Violence or Dangerous Content</h2>
        <ul>
          <li>Do not post content that promotes or glorifies violence</li>
          <li>Do not post content related to terrorism or violent extremism</li>
          <li>Do not post content that encourages self-harm or dangerous activities</li>
        </ul>

        <h2>No Sexual or Explicit Content</h2>
        <ul>
          <li>Nudity and sexually explicit material are not allowed</li>
          <li>Sexual solicitation is prohibited</li>
        </ul>

        <h2>No Spam, Fraud, or Deception</h2>
        <ul>
          <li>Do not post repetitive, misleading, or deceptive content</li>
          <li>Do not impersonate others or create fake accounts</li>
          <li>Do not promote scams or fraudulent schemes</li>
        </ul>

        <h2>No Illegal Content</h2>
        <ul>
          <li>Do not post content that promotes or facilitates illegal activities</li>
          <li>Do not use Nativ to buy, sell, or trade illegal goods or services</li>
          <li>Respect copyright and intellectual property rights</li>
        </ul>

        <h2>Keep It Relevant</h2>
        <p>
          Nativ is about sharing local knowledge and connecting with people nearby. Content should be relevant
          to the location where it&apos;s posted.
        </p>

        <h2>How We Enforce These Guidelines</h2>

        <h3>Automated Filtering</h3>
        <p>
          We use on-device text filtering and automated image screening to prevent objectionable content from
          being posted. Content that triggers these filters will be blocked or removed automatically.
        </p>

        <h3>Reporting</h3>
        <p>
          If you see content that violates these guidelines, report it. You can report any Pulse or reply
          directly from the App. Report categories include:
        </p>
        <ul>
          <li>Spam, fraud, or scam</li>
          <li>False information</li>
          <li>Violent speech</li>
          <li>Hate, harassment, bullying, or abuse</li>
          <li>Terrorism</li>
          <li>Nudity or sexual activity</li>
          <li>Illegal content</li>
        </ul>

        <h3>Our Response</h3>
        <ul>
          <li>We review all reports and take action within <strong>24 hours</strong></li>
          <li>Violating content will be removed</li>
          <li>Users who post objectionable content may have their accounts suspended or permanently terminated</li>
          <li>Repeat offenders will be banned</li>
        </ul>

        <h3>Blocking</h3>
        <p>
          You can block any user at any time. Blocking a user removes their content from your feed and deletes
          any conversations between you. Blocks are logged and reviewed by our team.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about these guidelines or want to report an issue, contact us at{' '}
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

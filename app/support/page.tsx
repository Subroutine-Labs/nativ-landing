import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — Nativ Social',
  description: 'Get help and contact support for the Nativ Social mobile application.',
}

export default function SupportPage() {
  return (
    <main className="legal-page">
      <nav className="legal-nav">
        <a href="/" className="logo">
          nativ<span>.</span>social
        </a>
      </nav>

      <article className="legal-content">
        <h1>Support</h1>
        <p>
          We&apos;re here to help. If you have any questions, issues, feedback, or feature requests
          regarding the Nativ Social app, please reach out to us through any of the channels below.
        </p>

        <h2>Get in Touch</h2>

        <h3>Email</h3>
        <p>
          For any inquiries, you can email us directly at{' '}
          <a href="mailto:admin@nativ.social">admin@nativ.social</a>.
        </p>

        <h3>Telegram</h3>
        <p>
          Reach us on Telegram for quick support:{' '}
          <a href="https://t.me/sub_six" target="_blank" rel="noopener noreferrer">@sub_six</a>
        </p>

        <h3>Twitter / X</h3>
        <p>
          Follow us and send a DM on Twitter:{' '}
          <a href="https://x.com/NativSocial" target="_blank" rel="noopener noreferrer">@NativSocial</a>
        </p>

        <h3>Phone</h3>
        <p>
          <a href="tel:+917970956543">+91 7970956543</a>
        </p>

        <h3>Address</h3>
        <p>
          Subroutine Labs<br />
          Unique Pride, Building No. 144<br />
          Kannamwar Nagar Road No. 2<br />
          Vikhroli East, Mumbai 400083<br />
          Maharashtra, India
        </p>

        <h2>In-App Support</h2>
        <p>
          You can also reach us directly from within the Nativ Social iOS app. Go to your
          {' '}<strong>Profile &rarr; Settings</strong> and use:
        </p>
        <ul>
          <li><strong>Contact Us</strong> &mdash; send us a message about any issue or question</li>
          <li><strong>Feedback</strong> &mdash; share your thoughts on how we can improve the app</li>
        </ul>

        <h2>App Issues &amp; Bug Reports</h2>
        <p>
          If you are experiencing a bug or technical issue, please email us or use the in-app
          Contact Us option with a description of the problem, your device model, and your iOS
          version. We will do our best to respond within 48 hours.
        </p>

        <h2>Feature Requests</h2>
        <p>
          We welcome your ideas and suggestions for improving Nativ Social. Reach out via email,
          Telegram, Twitter, or the in-app Feedback option and let us know what you&apos;d like to
          see in a future update.
        </p>

        <h2>Content &amp; Safety Reports</h2>
        <p>
          To report objectionable content or abusive users, please use the in-app reporting feature.
          You can also email us at{' '}
          <a href="mailto:admin@nativ.social">admin@nativ.social</a>{' '}
          and we will act within 24 hours.
        </p>

        <h2>Account Deletion</h2>
        <p>
          You can delete your account directly from the app under Profile &rarr; Settings. If you
          need assistance, contact us at{' '}
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

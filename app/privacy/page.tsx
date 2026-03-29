import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Nativ Social',
  description: 'Privacy Policy for Nativ Social mobile application.',
}

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <nav className="legal-nav">
        <a href="/" className="logo">
          nativ<span>.</span>social
        </a>
      </nav>

      <article className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: March 29, 2026</p>

        <p>
          Nativ Social (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the Nativ Social
          mobile application (the &ldquo;App&rdquo;). This Privacy Policy explains how we collect, use, and
          protect your information when you use our App.
        </p>

        <h2>Information We Collect</h2>

        <h3>Personal Information</h3>
        <p>When you create an account, we collect:</p>
        <ul>
          <li><strong>Email address</strong> &mdash; provided by your sign-in provider (Apple or Google) for authentication and account recovery</li>
          <li><strong>Display name</strong> &mdash; chosen by you during onboarding, visible to other users</li>
          <li><strong>Profile photo</strong> &mdash; optional, uploaded by you</li>
          <li><strong>Date of birth</strong> &mdash; provided during onboarding</li>
          <li><strong>Gender</strong> &mdash; optionally provided during onboarding</li>
          <li><strong>Country</strong> &mdash; optionally provided during onboarding</li>
          <li><strong>Authentication provider</strong> &mdash; the method you used to sign in (Apple or Google)</li>
        </ul>

        <h3>Location Data</h3>
        <ul>
          <li><strong>Device location</strong> &mdash; collected while the App is in use to show nearby Pulses, display your presence to nearby users, attach location to content you share, and track which cities you visit</li>
          <li><strong>Location is not tracked in the background</strong> &mdash; we only access your location while the App is active in the foreground</li>
        </ul>

        <h3>User-Generated Content</h3>
        <ul>
          <li><strong>Pulses</strong> &mdash; short text posts (up to 20 words) with optional photos, pinned to your location with a 48-hour expiry</li>
          <li><strong>Replies</strong> &mdash; text responses to Pulses</li>
          <li><strong>Direct messages</strong> &mdash; text and photo messages between you and other users</li>
          <li><strong>Photos</strong> &mdash; images you attach to Pulses, messages, or your profile</li>
        </ul>

        <h3>Presence Data</h3>
        <ul>
          <li><strong>Online status</strong> &mdash; whether you are currently active in the App</li>
          <li><strong>Nearby visibility</strong> &mdash; your approximate location is shared with other users within proximity while you are online</li>
        </ul>

        <h3>Usage Data</h3>
        <ul>
          <li><strong>Analytics events</strong> &mdash; screen views, feature usage, and interactions within the App</li>
          <li><strong>Device information</strong> &mdash; device model, OS version, and app version for diagnostics</li>
          <li><strong>Session data</strong> &mdash; authentication session maintained locally by our backend provider</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li><strong>Provide the service</strong> &mdash; display nearby Pulses, enable messaging, show your presence to nearby users, track your travel history</li>
          <li><strong>Authentication</strong> &mdash; verify your identity and maintain your session</li>
          <li><strong>Content moderation</strong> &mdash; filter objectionable content, screen uploaded images for safety, and review user reports</li>
          <li><strong>Improve the App</strong> &mdash; analyze usage patterns to enhance features and fix issues</li>
          <li><strong>Safety</strong> &mdash; enforce our Terms of Use and Community Guidelines, block abusive users, and act on content reports</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Purpose</th>
              <th>Data Shared</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supabase</td>
              <td>Authentication, database, file storage, real-time messaging</td>
              <td>Email, display name, profile photo, location, user-generated content</td>
            </tr>
            <tr>
              <td>Mapbox</td>
              <td>Interactive map display</td>
              <td>Device location (for map rendering)</td>
            </tr>
            <tr>
              <td>Google Cloud Vision API</td>
              <td>Automated image safety screening</td>
              <td>Uploaded photos (analyzed for objectionable content)</td>
            </tr>
            <tr>
              <td>Apple Sign-In</td>
              <td>Authentication</td>
              <td>Email, name (from Apple account)</td>
            </tr>
            <tr>
              <td>Google Sign-In</td>
              <td>Authentication</td>
              <td>Email, name (from Google account)</td>
            </tr>
          </tbody>
        </table>

        <h2>Device Permissions</h2>
        <p>The App requests the following device permissions:</p>
        <ul>
          <li><strong>Location (When In Use)</strong> &mdash; to show nearby Pulses and users on the map, enable proximity-based chat, and track which cities you visit. Requested during onboarding.</li>
          <li><strong>Camera</strong> &mdash; to capture photos for Pulses you share, your profile picture, and photos in direct messages. Requested when you first use the camera.</li>
          <li><strong>Photo Library</strong> &mdash; to select existing photos for Pulses, your profile picture, or direct messages. Uses the modern iOS photo picker with limited, per-selection access.</li>
        </ul>
        <p>All permissions are optional and requested only when you use the relevant feature.</p>

        <h2>Content Moderation and Safety</h2>
        <ul>
          <li><strong>Text filtering</strong> &mdash; content is screened on-device against prohibited words and phrases before submission</li>
          <li><strong>Image screening</strong> &mdash; uploaded photos are analyzed using automated safety detection for adult content, violence, and other objectionable material</li>
          <li><strong>User reporting</strong> &mdash; users can flag Pulses, replies, and users for review</li>
          <li><strong>User blocking</strong> &mdash; users can block other users, which removes content from their feed and deletes shared conversations</li>
          <li><strong>Developer notification</strong> &mdash; reports and blocks are forwarded to our moderation team for review and action within 24 hours</li>
        </ul>

        <h2>Data Storage</h2>
        <ul>
          <li><strong>Cloud storage</strong> &mdash; your account data, content, and messages are stored securely on Supabase servers</li>
          <li><strong>File storage</strong> &mdash; profile photos, Pulse photos, and chat media are stored in Supabase Storage</li>
          <li><strong>Local storage</strong> &mdash; minimal data on your device including unread message indicators and queued analytics events</li>
          <li><strong>Session tokens</strong> &mdash; your authentication session is stored locally to keep you signed in</li>
        </ul>

        <h2>Data Retention</h2>
        <ul>
          <li>Your data is retained as long as your account is active</li>
          <li>Pulses automatically expire and are removed after 48 hours</li>
          <li>You can delete your account at any time from the App settings</li>
          <li>Chat messages and replies may persist after account deletion for continuity of other users&apos; conversations</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. Your data is only shared
          with the third-party services listed above, solely to provide the App&apos;s functionality.
        </p>

        <h2>Data Security</h2>
        <ul>
          <li>Row Level Security (RLS) policies on all database tables</li>
          <li>Authenticated API access with scoped permissions</li>
          <li>On-device content filtering</li>
          <li>HTTPS encryption for all data in transit</li>
          <li>Signed URLs for private media access with time-limited expiry</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          The App is not intended for children under 13. We do not knowingly collect personal information from
          children under 13. If you believe a child has provided us with personal information, please contact us.
        </p>

        <h2>Your Rights</h2>
        <ul>
          <li>Access your personal data through your profile in the App</li>
          <li>Update your display name and profile photo at any time</li>
          <li>Delete your account and associated data from the App settings</li>
          <li>Revoke device permissions at any time through your device settings</li>
          <li>Block other users to prevent contact</li>
          <li>Report content that violates our Terms of Use</li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by updating the
          &ldquo;Last updated&rdquo; date at the top of this policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
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

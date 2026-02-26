'use client'

import { useState, useEffect } from 'react'

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('nativ-theme') as 'light' | 'dark' | null
    const initial = saved || 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('nativ-theme', next)
  }

  return { theme, toggle }
}

export default function Privacy() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <div className="topo-bg" />
      <div className="grain" />

      <main>
        <nav>
          <a href="/" className="logo">
            nativ
          </a>
          <div className="nav-right">
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
              <span>{theme === 'light' ? 'Night' : 'Day'}</span>
              <div className="toggle-track">
                <div className="toggle-thumb" />
              </div>
            </button>
          </div>
        </nav>

        <article className="privacy">
          <h1>Privacy Policy</h1>
          <p className="privacy-updated">Last updated: February 26, 2026</p>
          <p>
            Nativ Social (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the Nativ Social mobile application (the &ldquo;App&rdquo;). This Privacy Policy explains how we collect, use, and protect your information when you use our App.
          </p>

          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li><strong>Email address</strong> — for authentication and account recovery</li>
            <li><strong>Display name</strong> — chosen by you, visible to other users</li>
            <li><strong>Profile photo</strong> — optional, uploaded by you</li>
            <li><strong>Authentication provider</strong> — the method you used to sign in (Email, Google, or Apple)</li>
          </ul>

          <h3>Location Data</h3>
          <ul>
            <li><strong>Device location</strong> — collected while the App is in use to show nearby knowledge, display your presence to nearby users, and attach location to content you share</li>
            <li><strong>Location is not tracked in the background</strong> — we only access your location while the App is active</li>
          </ul>

          <h3>User-Generated Content</h3>
          <ul>
            <li><strong>Text fragments</strong> — knowledge and tips you share about places</li>
            <li><strong>Photos</strong> — images you attach to your shared knowledge</li>
            <li><strong>Voice recordings</strong> — optional voice notes with on-device transcription</li>
            <li><strong>Chat messages</strong> — direct messages between you and other users</li>
            <li><strong>Event RSVPs</strong> — your responses to events</li>
          </ul>

          <h3>Usage Data</h3>
          <ul>
            <li><strong>Analytics events</strong> — screen views, feature usage, and interactions within the App</li>
            <li><strong>Device information</strong> — device model and app version for diagnostics</li>
            <li><strong>Session data</strong> — authentication session maintained locally by our backend provider</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li><strong>Provide the service</strong> — display nearby knowledge, enable messaging, show your presence to nearby users</li>
            <li><strong>Authentication</strong> — verify your identity and maintain your session</li>
            <li><strong>Improve the App</strong> — analyze usage patterns to enhance features and fix issues</li>
            <li><strong>Content moderation</strong> — ensure shared knowledge meets community standards</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <div className="privacy-table-wrap">
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
                  <td><strong>Supabase</strong></td>
                  <td>Authentication, database, file storage, real-time messaging</td>
                  <td>Email, display name, profile photo, location, user-generated content</td>
                </tr>
                <tr>
                  <td><strong>Google Places API</strong></td>
                  <td>Place search and autocomplete</td>
                  <td>Search queries, approximate location</td>
                </tr>
                <tr>
                  <td><strong>Google OAuth</strong></td>
                  <td>Sign in with Google</td>
                  <td>Email, name (from Google account)</td>
                </tr>
                <tr>
                  <td><strong>Apple Sign-In</strong></td>
                  <td>Sign in with Apple</td>
                  <td>Email, name (from Apple account)</td>
                </tr>
                <tr>
                  <td><strong>Resend</strong></td>
                  <td>Transactional emails (OTP codes)</td>
                  <td>Email address</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Device Permissions</h2>
          <p>The App requests the following device permissions:</p>
          <ul>
            <li><strong>Location</strong> — to show nearby knowledge and users on the map</li>
            <li><strong>Camera</strong> — to capture photos for knowledge you share</li>
            <li><strong>Photo Library</strong> — to select existing photos for knowledge or your profile picture</li>
            <li><strong>Microphone</strong> — to record voice notes for knowledge you share</li>
            <li><strong>Speech Recognition</strong> — to transcribe your voice notes into text (processed on-device)</li>
          </ul>
          <p>All permissions are optional and requested only when you use the relevant feature.</p>

          <h2>Data Storage</h2>
          <ul>
            <li><strong>Cloud storage</strong> — your account data, content, and messages are stored securely on Supabase servers</li>
            <li><strong>Local storage</strong> — we store minimal data on your device including unread message indicators and queued analytics events</li>
            <li><strong>Session tokens</strong> — your authentication session is stored locally to keep you signed in</li>
          </ul>

          <h2>Data Retention</h2>
          <ul>
            <li>Your data is retained as long as your account is active</li>
            <li>You can delete your account at any time from the App settings, which removes your user record and signs you out</li>
            <li>Chat messages and shared knowledge may persist after account deletion for the continuity of other users&apos; conversations and content</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We do <strong>not</strong> sell, trade, or rent your personal information to third parties. Your data is only shared with the third-party services listed above, solely to provide the App&apos;s functionality.
          </p>

          <h2>Data Security</h2>
          <p>We use industry-standard security measures including:</p>
          <ul>
            <li>Row Level Security (RLS) policies on all database tables</li>
            <li>Authenticated API access with scoped permissions</li>
            <li>On-device voice transcription (audio is not sent to external servers)</li>
            <li>HTTPS encryption for all data in transit</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            The App is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access</strong> your personal data through your profile in the App</li>
            <li><strong>Update</strong> your display name and profile photo at any time</li>
            <li><strong>Delete</strong> your account and associated data from the App settings</li>
            <li><strong>Revoke</strong> device permissions at any time through your device settings</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &ldquo;Last updated&rdquo; date at the top of this policy.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:admin@nativ.social">admin@nativ.social</a><br />
            <strong>Website:</strong> <a href="https://nativ.social">https://nativ.social</a>
          </p>
        </article>

        <footer>
          <span className="footer-text">&copy; {new Date().getFullYear()} Nativ Social, Inc.</span>
          <a href="/privacy" className="footer-text footer-link">Privacy Policy</a>
          <span className="footer-text" style={{ letterSpacing: '0.15em' }}>nativ.social</span>
        </footer>
      </main>
    </>
  )
}

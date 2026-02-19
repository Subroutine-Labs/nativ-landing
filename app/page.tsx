'use client'

import { useState, useEffect, useRef } from 'react'

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('nativ-theme') as 'light' | 'dark' | null
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initial = saved || preferred
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

function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage("You're on the list.")
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Try again.')
    }
  }

  return (
    <div className={className}>
      <form className="waitlist-form" onSubmit={submit}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={status === 'loading' || status === 'success'}
        />
        <button type="submit" disabled={status === 'loading' || status === 'success'}>
          {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined ✓' : 'Join Waitlist'}
        </button>
      </form>
      {message && (
        <p className={`form-status ${status}`}>{message}</p>
      )}
    </div>
  )
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Home() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <div className="topo-bg" />
      <div className="grain" />

      <main>
        <nav>
          <a href="/" className="logo">
            nativ<span>.</span>social
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

        {/* Hero */}
        <section className="hero">
          <p className="hero-eyebrow"><span className="pin-mark" />Local knowledge, finally captured</p>
          <h1 className="hero-title">
            Travel like you know<br /><em>someone there.</em>
          </h1>
          <p className="hero-sub">
            The street vendor worth finding. The actual taxi price. The neighborhood that&apos;s really fine.
            Real knowledge from locals and travelers who&apos;ve just been — not content optimised for clicks.
          </p>
          <WaitlistForm />
          <p className="form-status" style={{ opacity: 0.5, fontSize: '0.72rem', marginTop: '0.6rem' }}>
            Early access. No spam.
          </p>
        </section>

        {/* Problem */}
        <section className="section">
          <FadeIn>
            <p className="section-label">The problem</p>
            <h2 className="section-title">
              Hours of searching.<br />
              <em>Still generic.</em>
            </h2>
            <p className="section-body">
              Before every trip, people mine YouTube, Reddit, Instagram — spending hours to piece together
              information that&apos;s outdated, inaccurate, or written for an audience of millions.
              Meanwhile, the people who actually know — the local, the traveler who just got back —
              share their knowledge once in a comment, or with a friend over drinks, and it evaporates.
              Instagram and YouTube capture all the value. The people who created it get nothing.
              The knowledge disappears.
            </p>
          </FadeIn>

          <div className="cards" style={{ marginTop: '4rem' }}>
            {[
              {
                num: '01',
                title: 'Locals share what they know',
                body: 'The street with the best food at 11pm. Which neighbourhoods are genuinely safe. The price you should actually pay. Structured, searchable, attributed to people who were actually there.',
              },
              {
                num: '02',
                title: 'Travellers get what they need',
                body: 'Not a curated feed of what performed well. Specific answers to specific questions — ranked by recency and reliability, not by engagement metrics.',
              },
              {
                num: '03',
                title: 'Knowledge doesn\'t evaporate',
                body: 'The person who lived in Lisbon for three years and knows every shortcut — that knowledge has a place to live, and gets properly attributed to the person who built it.',
              },
            ].map((c, i) => (
              <FadeIn key={c.num} delay={i * 100}>
                <div className="card">
                  <div className="card-num">{c.num}</div>
                  <div className="card-title">{c.title}</div>
                  <div className="card-body">{c.body}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <FadeIn>
              <p className="section-label">Early access</p>
              <h2 className="cta-title">
                The real place,<br /><em>not the tourist version.</em>
              </h2>
              <p className="cta-sub">
                We&apos;re opening access city by city. Get on the list.
              </p>
              <WaitlistForm />
            </FadeIn>
          </div>
        </section>

        <footer>
          <span className="footer-text">© {new Date().getFullYear()} Nativ Social, Inc.</span>
          <span className="footer-text" style={{ letterSpacing: '0.15em' }}>nativ.social</span>
        </footer>
      </main>
    </>
  )
}

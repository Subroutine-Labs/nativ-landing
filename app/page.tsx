'use client'

import { useState, useEffect, useRef } from 'react'

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

        {/* Hero */}
        <section className="hero">
          <h1 className="hero-title">
            nativ<span className="hero-dot">.</span>social
          </h1>
          <p className="hero-tagline"><em>knowledge should compound, not evaporate.</em></p>
          <WaitlistForm />
          <div className="hero-contacts">
            <a href="https://x.com/NativSocial" target="_blank" rel="noopener noreferrer" className="contact-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span>Twitter</span>
            </a>
            <a href="mailto:admin@subroutinelabs.com" className="contact-pill" aria-label="Email us">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
              <span>Contact</span>
            </a>
          </div>
          <a href="https://www.subroutinelabs.com" target="_blank" rel="noopener noreferrer" className="hero-attribution">A product by SubroutineLabs</a>
        </section>

        <section className="section">
          <div className="cards">
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

        <footer>
          <span className="footer-text">© {new Date().getFullYear()} Nativ Social, Inc.</span>
          <span className="footer-text" style={{ letterSpacing: '0.15em' }}>nativ.social</span>
        </footer>
      </main>
    </>
  )
}

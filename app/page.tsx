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
        setMessage(data.message || "You're on the list.")
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
          <p className="hero-tagline"><em>talk to travelers around you</em></p>
          <WaitlistForm />
          <div className="hero-contacts">
            <a href="https://x.com/NativSocial" target="_blank" rel="noopener noreferrer" className="contact-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span>Twitter</span>
            </a>
            <a href="https://t.me/sub_six" target="_blank" rel="noopener noreferrer" className="contact-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              <span>Support</span>
            </a>
            <a href="mailto:admin@subroutinelabs.com" className="contact-pill" aria-label="Email us">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
              <span>Contact</span>
            </a>
          </div>
          <a href="https://www.subroutinelabs.com" target="_blank" rel="noopener noreferrer" className="hero-attribution">A product by Subroutine Labs</a>
        </section>

        <section className="section">
          <div className="cards">
            {[
              {
                num: '01',
                title: 'Same place, no shared space',
                body: 'Travelers, locals, and regulars move through the same streets every day. Some have useful knowledge. Some want company. Most would get along if they ever crossed paths. They never will — because there\'s no shared space to talk.',
              },
              {
                num: '02',
                title: 'A live feed of people nearby',
                body: 'Open Nativ and see short messages from people around you. Someone found great food. Someone got scammed. Someone wants dinner company. You read it. You reply. You drop your own. The feed is the conversation.',
              },
              {
                num: '03',
                title: 'Connections that start in person',
                body: 'Tap a pulse, reply to it, start a thread. Send a message request if you want to keep talking. You met in Colaba — you can keep the conversation going from anywhere in the world.',
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
          <span className="footer-text">&copy; {new Date().getFullYear()} Nativ Social, Inc.</span>
          <div className="footer-links">
            <a href="/terms" className="footer-text footer-link">Terms of Use</a>
            <a href="/privacy" className="footer-text footer-link">Privacy Policy</a>
            <a href="/guidelines" className="footer-text footer-link">Guidelines</a>
          </div>
          <span className="footer-text" style={{ letterSpacing: '0.15em' }}>nativ.social</span>
        </footer>
      </main>
    </>
  )
}

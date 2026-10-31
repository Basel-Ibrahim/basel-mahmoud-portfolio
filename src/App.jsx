import { useState, useEffect } from 'react'
import en from './locale/en.json'
import ar from './locale/ar.json'

const LOCALES = { en, ar }

const PROJECT_COLORS = {
  socialist: { bg: '#0F1A2E', accent: '#3B82F6', label: 'S' },
  reachflex: { bg: '#1E1410', accent: '#A78D6B', label: 'R' },
  zoud:      { bg: '#0D1A14', accent: '#22C55E', label: 'Z' },
  teqball:   { bg: '#1A1020', accent: '#A855F7', label: 'T' },
  alhout:    { bg: '#1A0D0D', accent: '#EF4444', label: 'A' },
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = LOCALES[lang]
  const isRTL = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.body.classList.toggle('rtl', isRTL)
  }, [lang, isRTL])

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en')

  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav t={t} lang={lang} toggleLang={toggleLang} isRTL={isRTL} />
      <Hero t={t} isRTL={isRTL} />
      <About t={t} />
      <Work t={t} isRTL={isRTL} />
      <Skills t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}

/* ─── Nav ─── */
function Nav({ t, lang, toggleLang, isRTL }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 24px',
    background: scrolled ? 'rgba(13,11,9,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    transition: 'all 0.3s ease',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 64,
  }

  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav style={navStyle}>
      <a href="#" style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em', color: 'var(--text)' }}>
        {isRTL ? 'ب.إ' : 'B.I'}
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontSize: 14, color: 'var(--text-muted)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {l.label}
          </a>
        ))}
        <LangToggle lang={lang} toggleLang={toggleLang} />
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(m => !m)}
        style={{ display: 'none', color: 'var(--text-muted)', fontSize: 22, padding: 4 }}
        className="nav-mobile-btn"
        aria-label="Menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0,
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: 20,
        }} className="nav-mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 16, color: 'var(--text)', fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <LangToggle lang={lang} toggleLang={toggleLang} />
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

function LangToggle({ lang, toggleLang }) {
  return (
    <button onClick={toggleLang} style={{
      background: 'var(--surface-2)', border: '1px solid var(--border)',
      borderRadius: 20, padding: '4px 12px',
      fontSize: 12, fontWeight: 600, color: 'var(--accent)',
      letterSpacing: '0.05em', transition: 'all 0.2s',
    }}>
      {lang === 'en' ? 'عربي' : 'EN'}
    </button>
  )
}

/* ─── Hero ─── */
function Hero({ t, isRTL }) {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 24px 80px',
      maxWidth: 1100, margin: '0 auto',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isRTL ? 'row-reverse' : 'row',
        gap: 64, alignItems: 'center',
        width: '100%',
      }} className="hero-inner">
        {/* Photo */}
        <div style={{ flexShrink: 0 }} className="hero-photo-wrap">
          <div style={{
            width: 200, height: 200,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--border)',
            background: 'var(--surface)',
            position: 'relative',
          }}>
            <img
              src="/img/photo.jpg"
              alt="Basel Ibrahim"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              onError={e => { e.target.style.display = 'none' }}
            />
            {/* Fallback initials */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 56, fontWeight: 700, color: 'var(--accent)',
              opacity: 0.3,
            }}>
              ب
            </div>
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
            {t.hero.title}
          </p>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700, lineHeight: 1.08,
            letterSpacing: '-0.03em', marginBottom: 20,
            color: 'var(--text)',
          }}>
            {t.hero.name}
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            fontWeight: 500, color: 'var(--text)',
            marginBottom: 12, lineHeight: 1.4,
          }}>
            {t.hero.tagline}
          </p>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 36, lineHeight: 1.6 }}>
            {t.hero.sub}
          </p>
          <a href="#work" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--accent)', color: 'var(--bg)',
            padding: '12px 24px', borderRadius: 8,
            fontSize: 14, fontWeight: 600,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {t.hero.cta}
            <span style={{ opacity: 0.7 }}>{isRTL ? '↑' : '↓'}</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-inner { flex-direction: column !important; text-align: center; gap: 32px !important; }
          .hero-photo-wrap div { width: 140px !important; height: 140px !important; }
          body.rtl .hero-inner { flex-direction: column !important; }
        }
      `}</style>
    </section>
  )
}

/* ─── About ─── */
function About({ t }) {
  return (
    <section id="about" style={{ padding: '100px 24px', maxWidth: 800, margin: '0 auto' }}>
      <SectionLabel>{t.about.label}</SectionLabel>
      <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 32, lineHeight: 1.2 }}>
        {t.about.heading}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[t.about.p1, t.about.p2, t.about.p3].map((p, i) => (
          <p key={i} style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.75 }}>{p}</p>
        ))}
      </div>
    </section>
  )
}

/* ─── Work ─── */
function Work({ t, isRTL }) {
  return (
    <section id="work" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionLabel>{t.work.label}</SectionLabel>
      <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 48, lineHeight: 1.2 }}>
        {t.work.heading}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {t.work.projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} t={t} isRTL={isRTL} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, t, isRTL, index }) {
  const [hovered, setHovered] = useState(false)
  const colors = PROJECT_COLORS[project.id] || PROJECT_COLORS.socialist

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: isRTL ? 'row-reverse' : 'row',
        gap: 0, alignItems: 'stretch',
        background: hovered ? 'var(--surface)' : 'transparent',
        border: '1px solid', borderColor: hovered ? 'var(--border)' : 'transparent',
        borderRadius: 12,
        transition: 'all 0.25s ease',
        overflow: 'hidden',
      }}
      className="project-card"
    >
      {/* Visual panel */}
      <div style={{
        width: 200, flexShrink: 0,
        background: colors.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: 140,
        borderRight: isRTL ? 'none' : '1px solid var(--border)',
        borderLeft: isRTL ? '1px solid var(--border)' : 'none',
        transition: 'all 0.25s',
        position: 'relative', overflow: 'hidden',
      }} className="project-visual">
        <span style={{
          fontSize: 64, fontWeight: 800,
          color: colors.accent, opacity: hovered ? 0.25 : 0.12,
          transition: 'opacity 0.3s',
          fontFamily: 'var(--font-en)',
        }}>
          {colors.label}
        </span>
        {hovered && (
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at center, ${colors.accent}15, transparent 70%)`,
          }} />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '28px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, letterSpacing: '-0.01em' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {project.role}
            </p>
          </div>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{
              fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap',
              border: '1px solid var(--border)', borderRadius: 6,
              padding: '4px 12px', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              {t.work.live}
            </a>
          )}
        </div>

        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, margin: '12px 0' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontSize: 11, padding: '3px 10px', borderRadius: 20,
                background: 'var(--surface-2)', color: 'var(--text-muted)',
                border: '1px solid var(--border)', fontWeight: 500,
              }}>
                {tag}
              </span>
            ))}
          </div>
          {project.stat && (
            <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>
              {project.stat}
            </span>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-card { flex-direction: column !important; }
          body.rtl .project-card { flex-direction: column !important; }
          .project-visual { width: 100% !important; min-height: 80px !important; border-right: none !important; border-left: none !important; border-bottom: 1px solid var(--border) !important; }
        }
      `}</style>
    </div>
  )
}

/* ─── Skills ─── */
function Skills({ t }) {
  return (
    <section id="skills" style={{ padding: '100px 24px', maxWidth: 900, margin: '0 auto' }}>
      <SectionLabel>{t.skills.label}</SectionLabel>
      <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 48, lineHeight: 1.2 }}>
        {t.skills.heading}
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
        {t.skills.groups.map(group => (
          <div key={group.name}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              {group.name}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {group.items.map(item => (
                <div key={item} style={{
                  fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.4,
                  paddingLeft: 10, borderLeft: '2px solid var(--border)',
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Contact ─── */
function Contact({ t }) {
  return (
    <section id="contact" style={{
      padding: '100px 24px 80px', maxWidth: 700, margin: '0 auto',
      textAlign: 'center',
    }}>
      <SectionLabel center>{t.contact.label}</SectionLabel>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.1 }}>
        {t.contact.heading}
      </h2>
      <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
        {t.contact.sub}
      </p>
      <a
        href={`mailto:${t.contact.email}`}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: '1px solid var(--accent)', borderRadius: 8,
          padding: '14px 28px', color: 'var(--accent)',
          fontSize: 15, fontWeight: 600, transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
      >
        {t.contact.emailLabel}
        <span style={{ opacity: 0.6 }}>✉</span>
      </a>
    </section>
  )
}

/* ─── Footer ─── */
function Footer({ t }) {
  return (
    <footer style={{
      padding: '24px', borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 12,
    }}>
      <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>
        © {new Date().getFullYear()} Basel Ibrahim
      </p>
      <div style={{ display: 'flex', gap: 20 }}>
        <a href="https://socialist.agency" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 12, color: 'var(--text-dim)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--text-muted)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
        >
          Socialist Agency
        </a>
        <a href="https://reachflexhub.com" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 12, color: 'var(--text-dim)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--text-muted)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
        >
          ReachFlex
        </a>
      </div>
    </footer>
  )
}

/* ─── Shared ─── */
function SectionLabel({ children, center }) {
  return (
    <p style={{
      fontSize: 11, fontWeight: 700, color: 'var(--accent)',
      letterSpacing: '0.12em', textTransform: 'uppercase',
      marginBottom: 14,
      textAlign: center ? 'center' : 'inherit',
    }}>
      {children}
    </p>
  )
}

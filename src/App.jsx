import { useEffect, useState } from 'react'
import { copy, projectMeta, archiveMeta, SECTIONS, SITE } from './content.js'

const YEAR = new Date().getFullYear()
const BASE = import.meta.env.BASE_URL

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ar') return saved
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = copy[lang]

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = t.meta.title
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang, t])

  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'))

  return (
    <>
      <Nav t={t} onToggle={toggle} />
      <main>
        <Hero t={t} />
        <Marquee items={t.marquee} />
        {SECTIONS.map((s) => (
          <ProjectSection key={s.key} section={s} t={t} />
        ))}
        <About t={t} />
        <Skills t={t} />
        <Archive t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}

function Nav({ t, onToggle }) {
  return (
    <header className="nav-wrap">
      <nav className="nav box" aria-label="Main">
        <a className="nav-logo" href="#top" aria-label="Basel Ibrahim">
          B.I
        </a>
        <div className="nav-links">
          <a href="#work">{t.nav.work}</a>
          <a href="#side">{t.nav.side}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#archive">{t.nav.archive}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <button type="button" className="lang-btn" onClick={onToggle} aria-label={t.nav.toggleLabel}>
          {t.nav.toggle}
        </button>
      </nav>
    </header>
  )
}

function Hero({ t }) {
  const h = t.hero
  return (
    <section className="hero band-yellow" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="tags">
            <span className="pill">{h.tags[0]}</span>
            <span className="pill coral">{h.tags[1]}</span>
          </div>
          <h1>
            <span>{h.title[0]}</span>
            <mark>{h.title[1]}</mark>
            <span>{h.title[2].replace('-', '‑')}</span>
          </h1>
          <p className="hero-sub">{h.sub}</p>
          <div className="btn-row">
            <a className="btn" href="#work">
              {h.cta}
            </a>
            <a className="btn dark" href="#contact">
              {h.cta2}
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={`${BASE}img/basel.jpg`} alt={h.photoAlt} width="800" height="1200" fetchPriority="high" />
          <span className="sticker s1">{h.stickers[0]}</span>
          <span className="sticker s2">{h.stickers[1]}</span>
        </figure>
      </div>
    </section>
  )
}

function Marquee({ items }) {
  const line = items.map((n) => `${n} ✱ `).join('')
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{line}</span>
        <span>{line}</span>
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  )
}

function ProjectSection({ section, t }) {
  const info = t.sections[section.key]
  return (
    <section className={`proj-section ${section.band}`} id={section.id}>
      <div className="wrap">
        <h2 className="section-title">{info.title}</h2>
        {info.sub && <p className="section-sub">{info.sub}</p>}
        <div className="cards">
          {projectMeta
            .filter((m) => m.section === section.key)
            .map((meta) => (
              <Project key={meta.id} meta={meta} p={t.projects[meta.id]} t={t} />
            ))}
        </div>
      </div>
    </section>
  )
}

function Project({ meta, p, t }) {
  const [active, setActive] = useState(0)
  const img = meta.images[active]
  const many = meta.images.length > 1

  return (
    <article className="proj box" style={{ '--accent': meta.accent }} id={meta.id}>
      <div className="proj-visual">
        <figure className="shot">
          <img
            className={img.fit === 'contain' ? 'contain' : undefined}
            src={`${BASE}img/work/${img.file}.webp`}
            style={img.pos ? { objectPosition: img.pos } : undefined}
            alt={p.alts[active]}
            width={img.w}
            height={img.h}
            loading="lazy"
          />
        </figure>
        {many && (
          <div className="thumbs" role="group" aria-label={t.ui.thumbsLabel}>
            {meta.images.map((m, i) => (
              <button
                type="button"
                key={m.file}
                className={i === active ? 'thumb on' : 'thumb'}
                aria-pressed={i === active}
                aria-label={p.alts[i]}
                onClick={() => setActive(i)}
              >
                <img src={`${BASE}img/work/${m.file}.webp`} alt="" width="96" height="60" loading="lazy" />
              </button>
            ))}
          </div>
        )}
        <p className="shot-note">{p.note}</p>
      </div>

      <div className="proj-body">
        <span className="role">{p.role}</span>
        <h3>{p.title}</h3>
        <p className="proj-text">{p.text}</p>
        {p.stats && (
          <ul className="stats">
            {p.stats.map(([v, l]) => (
              <li key={l} className="stat">
                <b dir="ltr">{v}</b>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        )}
        <ul className="chips">
          {p.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {meta.url && (
          <a className="btn small" href={meta.url} target="_blank" rel="noopener noreferrer">
            {p.link} ↗
          </a>
        )}
      </div>
    </article>
  )
}

function About({ t }) {
  return (
    <section className="about band-mint" id="about">
      <div className="wrap about-grid">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-body">
          {t.about.paras.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="facts">
            {t.about.facts.map((f, i) => (
              <li key={f} className={`fact f${i % 4}`}>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Skills({ t }) {
  return (
    <section className="skills band-blue" id="skills">
      <div className="wrap">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skill-grid">
          {t.skills.groups.map((g) => (
            <div key={g.name} className="skill box">
              <h3>{g.name}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it} dir="auto">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Archive({ t }) {
  return (
    <section className="archive band-white" id="archive">
      <div className="wrap">
        <h2 className="section-title">{t.archive.title}</h2>
        <div className="arc-grid">
          {archiveMeta.map((meta, i) => {
            const a = t.archive.items[i]
            return (
              <article key={meta.id} className="arc box" style={{ '--accent': meta.accent }}>
                <img src={`${BASE}img/archive/${meta.file}.webp`} alt={a.alt} width="900" height="1200" loading="lazy" />
                <div className="arc-body">
                  <span className="role" dir="ltr">
                    {a.platform}
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <ul className="chips">
                    {a.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact({ t }) {
  const c = t.contact
  return (
    <section className="contact band-yellow" id="contact">
      <div className="wrap contact-grid">
        <h2 className="section-title big">{c.title}</h2>
        <div className="contact-body">
          <p>{c.text}</p>
          <p className="email box" dir="ltr">
            <span>{c.label}</span>
            {SITE.email}
          </p>
          <a className="btn" href={`mailto:${SITE.email}`}>
            {c.button}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <span>
          © {YEAR} {t.footer.rights}
        </span>
        <span className="footer-links">
          <a href={SITE.socialist} target="_blank" rel="noopener noreferrer">
            Socialist Agency
          </a>
          <a href={SITE.reachflex} target="_blank" rel="noopener noreferrer">
            ReachFlex
          </a>
        </span>
      </div>
    </footer>
  )
}

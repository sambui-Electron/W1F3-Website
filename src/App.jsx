import { useEffect, useState } from 'react'

const REPO = 'https://github.com/sambui-Electron/W1F3'
const RELEASES = `${REPO}/releases/latest`
const VERSION = 'v0.5.2'

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>,
    github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></>,
    terminal: <><path d="m4 17 6-5-6-5" /><path d="M12 19h8" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    code: <><path d="m16 18 6-6-6-6M8 6l-6 6 6 6m6-14-4 20" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
    gauge: <><path d="M12 14 16 8" /><path d="M3.3 18a10 10 0 1 1 17.4 0" /><path d="M12 14a2 2 0 1 0 0 .01" /><path d="M12 2v2" /></>,
    rotate: <><path d="M3 12a9 9 0 0 1 15.4-6.4L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15.4 6.4L3 16" /><path d="M3 21v-5h5" /></>,
    monitor: <><rect x="3" y="3" width="18" height="13" rx="2" /><path d="M8 21h8m-4-5v5" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
  }
  return <svg {...common}>{paths[name] || paths.code}</svg>
}

function Brand() {
  return <a className="brand" href="#top" aria-label="W1F3 home"><span className="brand-mark">W</span><span>W1F3</span></a>
}

function TerminalPreview() {
  const rows = [['OS', 'Windows 11'], ['Kernel', 'Win32_NT'], ['CPU', 'Your processor'], ['Memory', 'System memory'], ['Disk', 'Named volumes'], ['Shell', 'PowerShell']]
  return (
    <div className="terminal-scene" aria-label="Illustrative W1F3 terminal preview">
      <div className="scene-glow" />
      <div className="scene-orbit orbit-one" /><div className="scene-orbit orbit-two" />
      <div className="terminal-window">
        <div className="terminal-titlebar"><div className="window-controls"><i /><i /><i /></div><span><Icon name="terminal" size={13} /> Windows Terminal</span><span className="terminal-title-right">PowerShell</span></div>
        <div className="terminal-content">
          <div className="terminal-command"><span className="prompt">PS</span> <span className="path">~</span> <span className="prompt-mark">&gt;</span> W1F3</div>
          <div className="terminal-output">
            <div className="terminal-graphic" aria-hidden="true"><div className="wire-cube cube-back" /><div className="wire-cube cube-front" /><div className="wire-ring" /><span>W</span></div>
            <div className="system-lines"><div className="terminal-greeting">W1F3 <span>system overview</span></div><div className="terminal-rule" />
              {rows.map(([label, value]) => <div className="sys-row" key={label}><b>{label}</b><span>{value}</span></div>)}
              <div className="terminal-rule terminal-rule-bottom" /><div className="terminal-footer-line"><span>Ready</span><i /> <span>Interactive view</span></div>
            </div>
          </div>
          <div className="terminal-hint"><span className="hint-key">drag</span> rotate the logo <span className="hint-separator">·</span> <span className="hint-key">config</span> make it yours</div>
        </div>
      </div>
      <div className="preview-caption">Illustrative preview · Actual values depend on your system and configuration</div>
      <div className="floating-note note-version"><i /> {VERSION} <span>release</span></div>
      <div className="floating-note note-windows"><Icon name="monitor" size={15} /> Windows 10 / 11</div>
    </div>
  )
}

const features = [
  { icon: 'rotate', tag: 'INTERACTIVE', title: 'A logo with depth', text: 'An animated 3D logo adds character to the familiar system-information view. Drag to rotate it and release to let it move.' },
  { icon: 'layers', tag: 'SYSTEM OVERVIEW', title: 'Your system, in context', text: 'A focused information panel brings together Windows details and Fastfetch modules in one terminal experience.' },
  { icon: 'code', tag: 'CONFIGURABLE', title: 'Make it yours', text: 'Choose from 70 selectable information fields, reorder them, and keep your preferences in a readable YAML configuration.' },
  { icon: 'gauge', tag: 'ADAPTIVE', title: 'Adapts to your terminal', text: 'Responsive layout and adaptive logo scaling help the interface fit a range of terminal sizes without losing its balance.' },
]

const faq = [
  ['What do I need before installing W1F3?', 'W1F3 targets Windows 10 or 11 (x64). Fastfetch must be installed and available as fastfetch.exe on PATH. Fastfetch 2.68.0 or newer is recommended for the complete selectable module catalog. Windows Terminal is recommended.'],
  ['Does W1F3 require Go?', 'No. Go is only needed when building W1F3 from source. The release executable runs without a Go installation.'],
  ['Will an update overwrite my configuration?', 'No. The installer preserves your existing configuration settings and logo cache. It refreshes the editor schema and repairs the YAML schema reference without replacing config.yaml.'],
  ['Where is the configuration stored?', 'W1F3 stores its configuration at %USERPROFILE%\.config\fetch\config.yaml. The JSON Schema is stored beside it as config.schema.json.'],
]

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('w1f3-theme')
    setTheme(saved === 'light' || saved === 'dark' ? saved : (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))
  }, [])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = theme === 'dark' ? '#2e3440' : '#eceff4'
  }, [theme])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next); localStorage.setItem('w1f3-theme', next)
  }
  const copyCommand = async () => {
    try { await navigator.clipboard.writeText('W1F3 -v'); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
    catch { setCopied(false) }
  }
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell" id="top">
    <header className="site-header"><div className="header-inner container-wide">
      <Brand />
      <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <a href="#features" onClick={closeMenu}>Features</a><a href="#install" onClick={closeMenu}>Get started</a><a href="#faq" onClick={closeMenu}>FAQ</a><a href={`${REPO}#readme`} onClick={closeMenu}>Documentation <Icon name="arrow" size={13} /></a>
      </nav>
      <div className="header-actions flex items-center gap-2"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} /></button>
        <a className="header-github" href={REPO} target="_blank" rel="noreferrer"><Icon name="github" size={16} /><span>GitHub</span></a>
        <button className="mobile-menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}><Icon name={menuOpen ? 'close' : 'menu'} size={20} /></button>
      </div>
    </div></header>

    <main>
      <section className="hero-section section-pad"><div className="hero-grid container-wide">
        <div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-line" /> WINDOWS TERMINAL, REIMAGINED</div>
          <h1>Your system.<br /><span>At a glance.</span></h1>
          <p className="hero-description">A Windows-native, animated 3D system-information viewer. A little more character for the place where you work.</p>
          <div className="hero-cta-row flex items-center gap-3"><a className="button button-primary inline-flex items-center gap-2 transition-all duration-300" href={RELEASES} target="_blank" rel="noreferrer"><Icon name="download" size={17} /> Get W1F3 <Icon name="arrow" size={15} /></a><a className="button button-quiet" href={REPO} target="_blank" rel="noreferrer"><Icon name="github" size={17} /> View source</a></div>
          <div className="hero-meta"><span><i className="meta-dot" /> Open source</span><span className="meta-divider" /><span>Windows 10 / 11 x64</span><span className="meta-divider" /><span>Latest release: {VERSION}</span></div>
        </div>
        <div className="hero-visual reveal reveal-delay-1"><TerminalPreview /></div>
      </div><a className="scroll-cue" href="#features"><span /> Explore W1F3</a></section>

      <section className="trust-strip"><div className="container-wide trust-inner"><span>BUILT FOR YOUR TERMINAL</span><div><b>Go</b><i /> Native Windows details</div><div><b>Fastfetch</b><i /> System information backend</div><div><b>YAML</b><i /> Human-readable configuration</div></div></section>

      <section className="features-section section-pad" id="features"><div className="container-wide">
        <div className="section-heading reveal"><div className="eyebrow"><span className="eyebrow-line" /> THE DETAILS</div><div className="heading-row"><h2>Useful information.<br /><span>With a little more life.</span></h2><p>W1F3 keeps the focus on the information you came for, while giving the terminal a visual identity of its own.</p></div></div>
        <div className="feature-grid">{features.map((feature, index) => <article className={`feature-card reveal reveal-delay-${index % 3}`} key={feature.title}><div className="feature-card-top"><span className="feature-icon"><Icon name={feature.icon} size={21} /></span><span className="feature-tag">{feature.tag}</span></div><h3>{feature.title}</h3><p>{feature.text}</p><span className="feature-index">0{index + 1}</span></article>)}</div>
      </div></section>

      <section className="config-section section-pad"><div className="container-wide config-grid">
        <div className="config-copy reveal"><div className="eyebrow"><span className="eyebrow-line" /> YOUR SETUP, YOUR RULES</div><h2>Make the output<br /><span>feel like yours.</span></h2><p>Choose the information you want to see, put it in the order that makes sense to you, and keep the setup in a simple YAML file.</p>
          <div className="config-points"><div><span className="point-check"><Icon name="check" size={14} /></span>70 selectable information fields</div><div><span className="point-check"><Icon name="check" size={14} /></span>Reorder fields to change their display order</div><div><span className="point-check"><Icon name="check" size={14} /></span>JSON Schema support for editor completion</div></div>
          <a className="text-link" href={`${REPO}#configuration`} target="_blank" rel="noreferrer">Explore configuration <Icon name="arrow" size={14} /></a>
        </div>
        <div className="config-window reveal reveal-delay-1"><div className="code-window-top"><div className="window-controls"><i /><i /><i /></div><span>config.yaml</span><span className="code-file-type">YAML</span></div><div className="code-content">
          <div className="code-line"><span className="line-no">01</span><span className="code-comment"># Choose what appears in your system view</span></div><div className="code-line"><span className="line-no">02</span><span className="code-key">fields:</span></div><div className="code-line"><span className="line-no">03</span><span className="code-value">  - os</span></div><div className="code-line"><span className="line-no">04</span><span className="code-value">  - host</span></div><div className="code-line"><span className="line-no">05</span><span className="code-value">  - cpu</span></div><div className="code-line"><span className="line-no">06</span><span className="code-value">  - memory</span></div><div className="code-line"><span className="line-no">07</span><span className="code-value">  - disk</span></div><div className="code-line"><span className="line-no">08</span><span className="code-muted">  # Add, remove or reorder fields</span></div><div className="code-cursor" />
        </div><div className="code-window-footer"><span className="code-status-dot" /> Editable configuration <span>·</span> Schema-assisted</div></div>
      </div></section>

      <section className="install-section section-pad" id="install"><div className="container-wide">
        <div className="section-heading install-heading reveal"><div className="eyebrow"><span className="eyebrow-line" /> GET UP AND RUNNING</div><div className="heading-row"><h2>Ready when<br /><span>you are.</span></h2><p>Get the latest Windows release, run the installer, and open a new terminal. No Go toolchain required.</p></div></div>
        <div className="install-layout"><div className="install-steps">
          <article className="install-step reveal"><div className="step-number">01</div><div><h3>Download the release</h3><p>Open the latest release and download the Windows x64 ZIP asset. Extract it to a folder.</p><a className="text-link" href={RELEASES} target="_blank" rel="noreferrer">View release assets <Icon name="arrow" size={14} /></a></div></article>
          <article className="install-step reveal reveal-delay-1"><div className="step-number">02</div><div><h3>Run the installer</h3><p>Open PowerShell in the extracted folder and run these commands:</p><div className="command-stack"><code>Set-ExecutionPolicy -Scope Process Bypass</code><code>.\install.ps1</code></div></div></article>
          <article className="install-step reveal reveal-delay-2"><div className="step-number">03</div><div><h3>Open a new terminal</h3><p>Check the installed version, then launch W1F3.</p><div className="command-row"><code>W1F3 -v</code><button onClick={copyCommand} aria-label="Copy version command"><Icon name={copied ? 'check' : 'copy'} size={15} />{copied ? 'Copied' : 'Copy'}</button></div></div></article>
        </div>
        <aside className="requirements-card reveal reveal-delay-1"><div className="requirements-icon"><Icon name="monitor" size={21} /></div><h3>Before you begin</h3><p>W1F3 is built for a Windows environment and uses Fastfetch to gather system information.</p><div className="requirement-row"><span>Operating system</span><b>Windows 10 / 11 x64</b></div><div className="requirement-row"><span>Required</span><b>Fastfetch on PATH</b></div><div className="requirement-row"><span>Recommended</span><b>Windows Terminal</b></div><div className="requirements-note">Go is only required to build from source, not to run a release.</div></aside>
        </div>
      </div></section>

      <section className="faq-section section-pad" id="faq"><div className="container-wide faq-layout">
        <div className="faq-heading reveal"><div className="eyebrow"><span className="eyebrow-line" /> A FEW DETAILS</div><h2>Good to<br /><span>know.</span></h2><p>More details are available in the project documentation.</p><a className="text-link" href={`${REPO}#readme`} target="_blank" rel="noreferrer">Read the documentation <Icon name="arrow" size={14} /></a></div>
        <div className="faq-list reveal reveal-delay-1">{faq.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}><button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><span className="faq-chevron"><Icon name="chevron" size={17} /></span></button><div className="faq-answer-wrap"><p>{answer}</p></div></div>)}</div>
      </div></section>

      <section className="final-cta-section"><div className="container-wide"><div className="final-cta reveal"><div className="cta-orb" aria-hidden="true"><div className="cta-orb-inner">W</div></div><div className="cta-copy"><div className="eyebrow"><span className="eyebrow-line" /> TAKE A CLOSER LOOK</div><h2>Make your terminal<br /><span>a little more yours.</span></h2><p>Explore W1F3, see what's included, and make your system details part of the view.</p></div><div className="cta-actions"><a className="button button-primary inline-flex items-center gap-2 transition-all duration-300" href={RELEASES} target="_blank" rel="noreferrer"><Icon name="download" size={17} /> Get W1F3 <Icon name="arrow" size={15} /></a><a className="cta-github-link" href={REPO} target="_blank" rel="noreferrer">Explore on GitHub <Icon name="arrow" size={14} /></a></div></div></div></section>
    </main>

    <footer className="site-footer"><div className="container-wide footer-main"><div className="footer-brand-col"><Brand /><p>A more considered system-information experience for Windows terminals.</p></div><div className="footer-links"><div><span className="footer-label">EXPLORE</span><a href="#features">Features</a><a href="#install">Get started</a><a href="#faq">FAQ</a></div><div><span className="footer-label">PROJECT</span><a href={REPO} target="_blank" rel="noreferrer">GitHub repository</a><a href={RELEASES} target="_blank" rel="noreferrer">Releases</a><a href={`${REPO}#readme`} target="_blank" rel="noreferrer">Documentation</a></div></div></div><div className="container-wide footer-bottom"><span>© {new Date().getFullYear()} W1F3. Open source software.</span><span>Made for the terminal.</span></div></footer>
  </div>
}

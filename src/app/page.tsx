const installer = 'https://pub-8b7757f6961e4446bb1e0473b118ad34.r2.dev/Darkz%20OCR%20Utility%20Setup%201.0.0.exe';
const portable = '/downloads/Darkz-OCR-Utility-1.0.0-portable.exe';

function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark${small ? ' brand-mark-small' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M7 12V7h5M25 12V7h-5M7 20v5h5M25 20v5h-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="11" y="11" width="10" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M13.5 14.5h5M13.5 17.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function DownloadIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2.75v9.5m0 0 3.5-3.5M10 12.25l-3.5-3.5M3.5 13.5v2.75h13V13.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 10.5 3.1 3.1L15.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ScanArtwork() {
  return (
    <div className="artwork" aria-hidden="true">
      <div className="art-grid" />
      <div className="art-cross art-cross-one">+</div>
      <div className="art-cross art-cross-two">+</div>
      <div className="art-back-window"><span /><span /><span /><span /></div>
      <div className="art-screen">
        <div className="art-window-bar"><i /><i /><i /><span>Quarterly report.pdf</span></div>
        <div className="art-document">
          <b>Quarterly performance</b>
          <span className="line line-long" /><span className="line line-mid" />
          <strong>Revenue increased 18% year over year</strong>
          <span className="line line-long" /><span className="line line-short" />
          <div className="art-selection"><i /><i /><i /><i /><span /></div>
        </div>
        <div className="art-scan-line" />
      </div>
      <div className="art-result">
        <div className="art-result-head"><Mark small /><span>TEXT EXTRACTED</span><b><CheckIcon /></b></div>
        <strong>Revenue increased 18%</strong>
        <span className="result-line result-line-one" /><span className="result-line result-line-two" />
      </div>
      <div className="art-status"><span /> PRIVATE · ON-DEVICE OCR</div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Darkz OCR Utility home">
          <Mark />
          <span className="brand-copy"><strong>darkz</strong><small>OCR UTILITY</small></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#download">Download</a>
        </nav>
        <a className="header-download" href={installer}>
          <DownloadIcon /> <span>Get the app</span>
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> WINDOWS DESKTOP UTILITY <i /> VERSION 1.0.0</div>
          <h1>Make every word<br />on your screen <em>usable.</em></h1>
          <p className="hero-description">Select a screen area. Read an image or PDF. Copy the text in seconds with a small OCR assistant that stays close while you work.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={installer}><DownloadIcon />Download for Windows <span className="button-arrow"><ArrowIcon /></span></a>
            <a className="button button-quiet" href="#download">Explore downloads <ArrowIcon /></a>
          </div>
          <div className="trust-row"><span><CheckIcon /> Windows x64</span><i /><span><CheckIcon /> No account needed</span><i /><span><CheckIcon /> Your files stay local</span></div>
        </div>
        <ScanArtwork />
      </section>

      <section className="feature-strip shell" id="features">
        <article><span className="feature-index">01</span><div><strong>Capture any region</strong><p>Click the quick button, select an area, and read what’s there.</p></div></article>
        <article><span className="feature-index">02</span><div><strong>Images and PDFs</strong><p>Crop precisely or extract a full image or document page.</p></div></article>
        <article><span className="feature-index">03</span><div><strong>Private by design</strong><p>OCR runs on your PC. Keep, copy, or export your results.</p></div></article>
      </section>

      <section className="download-section shell" id="download">
        <div className="section-heading">
          <div><div className="section-overline">CHOOSE YOUR DOWNLOAD</div><h2>Get Darkz OCR Utility</h2></div>
          <span className="windows-chip"><span className="windows-glyph">⊞</span> Windows · x64</span>
        </div>
        <div className="download-grid">
          <article className="download-card download-card-featured">
            <div className="card-topline"><span className="download-icon"><DownloadIcon /></span><span className="recommended-tag"><i /> RECOMMENDED</span></div>
            <h3>Windows Installer</h3>
            <p>Install Darkz on your PC with Start menu and desktop shortcuts.</p>
            <div className="card-meta"><span>Version 1.0.0</span><i /><span>64-bit</span></div>
            <a className="button button-primary card-button" href={installer}><DownloadIcon />Download installer <ArrowIcon /></a>
            <small className="download-note">Setup file · EXE</small>
          </article>
          <article className="download-card">
            <div className="card-topline"><span className="download-icon download-icon-muted"><ScanIcon /></span><span className="portable-tag">NO INSTALLATION</span></div>
            <h3>Portable Version</h3>
            <p>Run Darkz directly from a folder or USB drive. No installer required.</p>
            <div className="card-meta"><span>Version 1.0.0</span><i /><span>64-bit</span></div>
            <a className="button button-secondary card-button" href={portable} download><DownloadIcon />Download portable <ArrowIcon /></a>
            <small className="download-note">Portable app · EXE</small>
          </article>
        </div>
        <div className="requirements"><span className="requirements-mark"><CheckIcon /></span><span>For 64-bit Windows PCs. English and Hindi OCR available. Internet is needed once to download OCR language data.</span><a href={installer}>Download now <ArrowIcon /></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner shell">
          <a className="footer-brand" href="#top"><Mark small /><span>darkz <b>OCR UTILITY</b></span></a>
          <div className="footer-credit"><span>Developed under <strong>Busiserve Infotech Solutions</strong></span><i /><span>Developer: <strong>DarkZ143</strong></span></div>
          <span className="copyright">© 2026 Darkz OCR Utility</span>
        </div>
      </footer>
    </main>
  );
}

function ScanIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1v3m10-4h3a1 1 0 0 1 1 1v3M3 13v3a1 1 0 0 0 1 1h3m10-4v3a1 1 0 0 1-1 1h-3M6.5 10h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

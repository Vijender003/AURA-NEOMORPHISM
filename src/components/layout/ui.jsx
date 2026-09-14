import { Link } from 'react-router-dom';
import { Logo } from '../navigation/Navbar';

/* Consistent chapter header — one pattern for every page */
export function ChapterHead({ eyebrow, title, lede, meta }) {
  return (
    <div className="max-w-[1200px] mx-auto elev-raised rounded-[28px] px-6 sm:px-10 lg:px-12 py-9 sm:py-12">
      <div className="flex items-center gap-3 mb-5">
        <span className="h-px w-8 bg-active/60" aria-hidden="true" />
        <span className="meta-label">{eyebrow}</span>
      </div>
      <h1 className="display text-balance max-w-[16ch]">{title}</h1>
      {lede && <p className="body mt-5 max-w-[62ch] text-[16px] sm:text-[17px]">{lede}</p>}
      {meta && <div className="micro mt-6 pt-5 border-t border-line/70">{meta}</div>}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={`max-w-[720px] ${align === 'center' ? 'mx-auto text-center' : ''} mb-10`}>
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-7 bg-active/60" aria-hidden="true" />
        <span className="meta-label">{eyebrow}</span>
      </div>
      <h2 className="h2 text-balance text-ink">{title}</h2>
      {copy && <p className="body mt-4">{copy}</p>}
    </div>
  );
}

export function NeuButton({ to, children, primary = false, quiet = false, live = false, onClick, type = 'button', className = '', disabled = false }) {
  const base = 'tactile inline-flex items-center justify-center gap-2.5 rounded-[18px] px-6 min-h-[48px] text-[14.5px] font-semibold tracking-[0.01em] select-none';
  const variant = primary
    ? 'bg-ink text-[#EDEFEF] shadow-[5px_5px_12px_#B4BCC2,-5px_-5px_12px_#FFFFFF] hover:-translate-y-px'
    : quiet
      ? 'elev-recessed-sm text-ink'
      : 'elev-raised text-ink';
  const cls = `${base} ${variant} ${disabled ? 'opacity-45 pointer-events-none' : ''} ${className}`;
  const inner = (<>{live && <span className="volt-dot" aria-hidden="true" />}{children}</>);
  if (to && !disabled) return <Link to={to} className={cls}>{inner}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{inner}</button>;
}

/* Recessed instrumentation metric */
export function StatWell({ label, value, sub, tone = 'ink', live = false }) {
  const dot = live ? 'volt-dot' : tone === 'ink' ? 'bg-ink' : tone === 'accent' ? 'bg-active' : 'bg-faint';
  return (
    <div className="elev-recessed rounded-[18px] px-5 py-4 min-h-[118px] flex flex-col justify-between">
      <div className="flex items-center justify-between gap-2">
        <span className="meta-label !text-[10px]">{label}</span>
        <span className={`w-[6px] h-[6px] rounded-full ${dot} ${live ? '' : ''}`} aria-hidden="true" />
      </div>
      <div>
        <div className="inst text-[29px] leading-none font-extrabold tracking-[-0.02em] text-ink">{value}</div>
        {sub && <div className="mt-1.5 text-[12.5px] font-medium text-muted">{sub}</div>}
      </div>
    </div>
  );
}

export function Divider({ className = '' }) {
  return <div className={`rule ${className}`} role="separator" aria-hidden="true" />;
}

export function SiteFooter() {
  const cols = [
    { h: 'SYSTEM', links: [['Experience', '/experience'], ['Devices', '/devices'], ['Intelligence', '/intelligence'], ['Control Center', '/dashboard']] },
    { h: 'COMPANY', links: [['Technology', '/technology'], ['Routines', '/routines'], ['Journal', '/journal'], ['About', '/about']] },
    { h: 'CONTACT', links: [['Start a conversation', '/contact'], ['Build your environment', '/build'], ['Privacy', '/privacy'], ['Terms', '/terms']] },
  ];
  return (
    <footer className="px-3 sm:px-6 pb-6 mt-[88px]">
      <div className="max-w-[1200px] mx-auto elev-raised rounded-[22px] px-6 sm:px-10 py-9 sm:py-11">
        <div className="grid md:grid-cols-[1.1fr_1.9fr] gap-10">
          <div>
            <Logo />
            <p className="body mt-4 max-w-[34ch] text-[14px]">A living layer of intelligence between you and the space around you.</p>
            <div className="mt-5 inline-flex items-center gap-2.5 elev-recessed-sm rounded-full pl-3 pr-4 py-2">
              <span className="volt-dot" aria-hidden="true" />
              <span className="micro !text-muted">ALL SYSTEMS NOMINAL</span>
            </div>
          </div>
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8" aria-label="Footer">
            {cols.map(c => (
              <div key={c.h}>
                <div className="meta-label !text-[10px] mb-4">{c.h}</div>
                <ul className="space-y-2">
                  {c.links.map(([label, to]) => (
                    <li key={label}><Link to={to} className="text-[13.5px] font-medium text-muted hover:text-ink transition-colors py-1 inline-block">{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-9 pt-5 border-t border-line/70 flex flex-col sm:flex-row justify-between gap-2">
          <span className="text-[12px] text-faint">© 2026 AURA Environmental Systems — Concept experience.</span>
          <span className="micro">NEO-LUXURY NEUMORPHISM · 60/30/10</span>
        </div>
      </div>
    </footer>
  );
}

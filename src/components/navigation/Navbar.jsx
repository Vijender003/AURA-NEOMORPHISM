import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/experience', label: 'Experience' },
  { to: '/devices', label: 'Devices' },
  { to: '/intelligence', label: 'Intelligence' },
  { to: '/routines', label: 'Routines' },
  { to: '/technology', label: 'Technology' },
  { to: '/journal', label: 'Journal' },
];

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group rounded-[12px]" aria-label="AURA home">
      <span className="w-[34px] h-[34px] rounded-full elev-recessed-sm grid place-items-center shrink-0" aria-hidden="true">
        <span className="w-[20px] h-[20px] rounded-full border-[2px] border-ink grid place-items-center relative">
          <span className="w-[5px] h-[5px] rounded-full bg-ink" />
          <span className="absolute -top-[1px] -right-[1px] w-[6px] h-[6px] rounded-full bg-volt border border-ink" />
        </span>
      </span>
      <span className="font-extrabold tracking-[0.16em] text-[15.5px] text-ink">AURA</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3"
      >
        <div className={`max-w-[1200px] mx-auto rounded-[18px] pl-4 pr-2.5 sm:px-5 h-[60px] flex items-center justify-between gap-3 ${scrolled ? 'elev-elevated' : 'elev-raised'}`}>
          <Logo />
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) => `relative px-3.5 py-2.5 rounded-[12px] text-[13.5px] font-medium tracking-[0.01em] transition-all min-h-[40px] inline-flex items-center ${isActive ? 'elev-recessed-sm text-ink font-semibold' : 'text-muted hover:text-ink'}`}>
                {({ isActive }) => (<>{l.label}{isActive && <span className="volt-dot absolute bottom-[5px] left-1/2 -translate-x-1/2" aria-hidden="true" />}</>)}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => nav('/dashboard')}
              className="tactile hidden sm:inline-flex items-center gap-2.5 rounded-[14px] pl-4 pr-5 min-h-[44px] text-[13.5px] font-semibold bg-ink text-[#EDEFEF]">
              <span className="volt-dot" aria-hidden="true" />
              Control Center
            </button>
            <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}
              className="lg:hidden w-11 h-11 rounded-[14px] elev-raised tactile grid place-items-center">
              <span className="space-y-[5px]" aria-hidden="true">
                {[0, 1].map(i => <span key={i} className={`block h-[2px] bg-ink rounded-full transition-all duration-200 ${open ? (i === 0 ? 'w-5 rotate-45 translate-y-[3.5px]' : 'w-5 -rotate-45 -translate-y-[3.5px]') : 'w-5'}`} />)}
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-base/70 backdrop-blur-[2px] pt-[84px] px-3">
            <motion.nav initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 8, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="elev-elevated rounded-[22px] p-2.5 grid gap-1" aria-label="Mobile">
              {[{ to: '/', label: 'Home' }, ...links, { to: '/dashboard', label: 'Control Center' }].map(l => (
                <NavLink key={l.to + l.label} to={l.to}
                  className={({ isActive }) => `flex items-center justify-between px-4 min-h-[52px] rounded-[14px] text-[15px] font-semibold ${isActive ? 'elev-recessed text-ink' : 'text-muted'}`}>
                  {({ isActive }) => (<>{l.label}{isActive && <span className="volt-dot" aria-hidden="true" />}</>)}
                </NavLink>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

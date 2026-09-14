import { Outlet } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import { SiteFooter } from './ui';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SiteLayout() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-[#EDEFEF] focus:px-4 focus:py-2.5 focus:rounded-[12px] focus:text-[14px] focus:font-semibold">Skip to content</a>
      <Navbar />
      <main id="main" className="pt-[84px]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

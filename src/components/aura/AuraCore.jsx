import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/** THE AURA CORE — refined signature. Calm, tactile, performant.
 * No continuous spin, no heavy blur. Pointer parallax only on fine pointers.
 */
export default function AuraCore({ size = 320, temp = 24.0, light = 72, aqi = 96, compact = false }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const fine = typeof window !== 'undefined' && window.matchMedia?.('(pointer: fine)').matches;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 22 });
  const sy = useSpring(my, { stiffness: 120, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [3.5, -3.5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-4.5, 4.5]);

  useEffect(() => {
    if (reduce || !fine) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      });
    };
    const leave = () => { mx.set(0); my.set(0); };
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', leave);
    return () => { cancelAnimationFrame(raf); el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
  }, [mx, my, reduce, fine]);

  const R1 = 100, C1 = 2 * Math.PI * R1;
  const R2 = 86, C2 = 2 * Math.PI * R2;
  const lightOff = C1 * (1 - light / 100);
  const aqiOff = C2 * (1 - aqi / 100);
  // volt marker angle for light value
  const ang = (-135 + (light / 100) * 270) * (Math.PI / 180);
  const vx = 140 + Math.cos(ang) * R1, vy = 140 + Math.sin(ang) * R1;

  return (
    <motion.div
      ref={ref}
      style={{
        width: `min(${size}px, 100%)`, aspectRatio: '1/1', maxWidth: size,
        rotateX: reduce || !fine ? 0 : rotateX, rotateY: reduce || !fine ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative mx-auto select-none"
      role="img"
      aria-label={`AURA core. Temperature ${Number(temp).toFixed(1)} degrees, light ${light} percent, air quality ${aqi}.`}
    >
      <div className="absolute inset-0 rounded-full elev-recessed-lg" aria-hidden="true" />
      <div className="absolute inset-[12px] rounded-full elev-elevated overflow-hidden" aria-hidden="true">
        {/* soft studio highlight — static, cheap */}
        <div className="absolute left-1/2 top-[8%] -translate-x-1/2 w-[56%] h-[30%] rounded-full bg-white/50 blur-2xl" />
        <svg viewBox="0 0 280 280" className="absolute inset-0 w-full h-full" aria-hidden="true">
          {Array.from({ length: 60 }).map((_, i) => {
            const a = (i * 6 * Math.PI) / 180;
            const major = i % 5 === 0;
            const x1 = 140 + Math.cos(a) * 122, y1 = 140 + Math.sin(a) * 122;
            const x2 = 140 + Math.cos(a) * (major ? 114 : 118), y2 = 140 + Math.sin(a) * (major ? 114 : 118);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={major ? '#3A3E3E' : '#B9C1C7'} strokeWidth={major ? 2 : 1} strokeLinecap="round" opacity={major ? 0.85 : 0.7} />;
          })}
        </svg>
        <svg viewBox="0 0 280 280" className="absolute inset-0 w-full h-full -rotate-[135deg]" aria-hidden="true">
          <circle cx="140" cy="140" r={R1} fill="none" stroke="#CBD2D8" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${C1 * 0.75} ${C1}`} opacity="0.9" />
          <circle cx="140" cy="140" r={R1} fill="none" stroke="#262828" strokeWidth="8" strokeLinecap="round"
            strokeDasharray={`${C1 * 0.75 * (light / 100)} ${C1}`} />
          <circle cx="140" cy="140" r={R2} fill="none" stroke="#D4D9DE" strokeWidth="4" />
          <circle cx="140" cy="140" r={R2} fill="none" stroke="#50616E" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={`${C2 * (aqi / 100)} ${C2}`} opacity="0.9" />
        </svg>
        {/* volt position marker — the single 6px signal */}
        <svg viewBox="0 0 280 280" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <circle cx={vx} cy={vy} r="5" fill="#FFF55D" stroke="#262828" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <div className={`rounded-full elev-raised grid place-items-center text-center ${reduce ? '' : 'animate-breathe'}`}
          style={{ width: '44%', height: '44%' }}>
          <div>
            <div className="meta-label !text-[9px] !tracking-[0.2em]">AURA</div>
            <div className="inst font-extrabold text-ink tracking-[-0.03em] leading-none mt-1" style={{ fontSize: compact ? 30 : 40 }}>{Number(temp).toFixed(1)}°</div>
            <div className="mt-1.5 flex items-center justify-center gap-1.5">
              <span className="volt-dot" aria-hidden="true" />
              <span className="micro !text-[9px] !text-muted">ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      {!compact && (
        <>
          <span className="absolute top-[5.5%] left-1/2 -translate-x-1/2 text-center"><span className="meta-label !text-[9px] block">AIR {aqi}</span></span>
          <span className="absolute bottom-[5.5%] left-1/2 -translate-x-1/2 inst text-[13px] font-bold text-ink">{Number(temp).toFixed(1)}°C</span>
          <span className="absolute left-[2.5%] top-1/2 -translate-y-1/2 text-center"><span className="meta-label !text-[9px] block">LIGHT</span><span className="inst text-[13px] font-bold">{light}%</span></span>
          <span className="absolute right-[2.5%] top-1/2 -translate-y-1/2 text-center"><span className="meta-label !text-[9px] block">SOUND</span><span className="inst text-[13px] font-bold">38%</span></span>
        </>
      )}
    </motion.div>
  );
}

import { useRef, useState, useCallback } from 'react';

/** Tactile temperature dial — L2 body, recessed track, ink arc, volt marker. */
export function TempDial({ value, min = 16, max = 30, onChange }) {
  const ref = useRef(null);
  const [drag, setDrag] = useState(false);

  const setFromEvent = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const ang = Math.atan2(clientY - cy, clientX - cx) * 180 / Math.PI;
    let deg = ang + 135;
    if (deg < 0) deg += 360;
    if (deg > 270) deg = deg > 315 ? 0 : 270;
    onChange(Math.round((min + (deg / 270) * (max - min)) * 2) / 2);
  }, [min, max, onChange]);

  const pct = (value - min) / (max - min);
  const arc = 2 * Math.PI * 96;

  return (
    <section className="elev-raised rounded-[22px] p-6" aria-label="Climate control">
      <div className="flex items-center justify-between mb-5">
        <span className="meta-label !text-[10px]">CLIMATE</span>
        <span className="micro">18° — 30°</span>
      </div>
      <div
        ref={ref} role="slider" tabIndex={0} aria-label="Target temperature" aria-valuemin={min} aria-valuemax={max} aria-valuenow={value} aria-valuetext={`${value.toFixed(1)} degrees`}
        onKeyDown={(e) => {
          if (e.key === 'ArrowUp' || e.key === 'ArrowRight') { e.preventDefault(); onChange(Math.min(max, value + 0.5)); }
          if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') { e.preventDefault(); onChange(Math.max(min, value - 0.5)); }
          if (e.key === 'Home') onChange(min);
          if (e.key === 'End') onChange(max);
        }}
        onPointerDown={(e) => { setDrag(true); e.currentTarget.setPointerCapture?.(e.pointerId); setFromEvent(e); }}
        onPointerMove={(e) => drag && setFromEvent(e)}
        onPointerUp={() => setDrag(false)} onPointerCancel={() => setDrag(false)}
        className="relative w-full max-w-[232px] aspect-square mx-auto rounded-full elev-elevated grid place-items-center cursor-grab active:cursor-grabbing touch-none select-none"
      >
        <svg viewBox="0 0 232 232" className="absolute inset-0 w-full h-full -rotate-[135deg]" aria-hidden="true">
          <circle cx="116" cy="116" r="96" fill="none" stroke="#CBD2D8" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${arc * 0.75} ${arc}`} />
          <circle cx="116" cy="116" r="96" fill="none" stroke="#262828" strokeWidth="10" strokeLinecap="round"
            strokeDasharray={`${arc * 0.75 * pct} ${arc}`} style={{ transition: 'stroke-dasharray 240ms ease' }} />
        </svg>
        <div className="w-[138px] h-[138px] rounded-full elev-raised grid place-items-center text-center">
          <div>
            <div className="inst text-[46px] leading-none font-extrabold tracking-[-0.03em] text-ink">{value.toFixed(1)}°</div>
            <div className="micro mt-2">DRAG OR ← →</div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ transform: `rotate(${-135 + pct * 270}deg)` }} aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 top-[7px] w-[18px] h-[18px] rounded-full elev-raised grid place-items-center">
            <span className="volt-dot" />
          </div>
        </div>
      </div>
      <div className="rule mt-5" aria-hidden="true" />
      <div className="mt-3 flex justify-between text-[12.5px] text-muted"><span>Comfort band 22–24°</span><span className="inst font-semibold text-ink">{value >= 22 && value <= 24 ? 'OPTIMAL' : 'ADJUSTING'}</span></div>
    </section>
  );
}

export function TactileSlider({ label, hint, value, onChange, min = 0, max = 100, unit = '%' }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <section className="elev-raised rounded-[22px] p-6" aria-label={label}>
      <div className="flex items-center justify-between gap-3 mb-1">
        <span className="meta-label !text-[10px]">{label}</span>
        <span className="elev-recessed-sm rounded-full px-3.5 py-1.5 inst font-bold text-[14px] text-ink tabular-nums">{value}{unit}</span>
      </div>
      {hint && <div className="text-[12.5px] text-faint mb-2">{hint}</div>}
      <input type="range" className="aura-range" min={min} max={max} value={value} aria-label={label} onChange={(e) => onChange(Number(e.target.value))} />
      <div className="mt-1 flex justify-between micro"><span>OFF</span><span>MAX</span></div>
      <div className="mt-3 h-[8px] rounded-full elev-recessed-sm overflow-hidden" aria-hidden="true">
        <div className="h-full rounded-full bg-ink" style={{ width: `${pct}%`, transition: 'width 240ms ease' }} />
      </div>
    </section>
  );
}

export function ToggleRow({ label, desc, checked, onChange }) {
  return (
    <button role="switch" aria-checked={checked} onClick={() => onChange(!checked)}
      className="tactile w-full flex items-center justify-between gap-4 elev-raised rounded-[18px] px-5 min-h-[64px] text-left">
      <span className="min-w-0"><span className="block font-semibold text-[14px] text-ink truncate">{label}</span>{desc && <span className="block text-[12.5px] text-muted mt-0.5">{desc}</span>}</span>
      <span className={`relative w-[54px] h-[30px] rounded-full shrink-0 transition-colors duration-200 ${checked ? 'bg-ink' : 'elev-recessed-sm'}`} aria-hidden="true">
        <span className={`absolute top-[3px] w-[24px] h-[24px] rounded-full grid place-items-center transition-all duration-200 ${checked ? 'left-[27px] bg-[#EDEFEF]' : 'left-[3px] elev-raised'}`}>
          {checked && <span className="volt-dot !w-[7px] !h-[7px]" />}
        </span>
      </span>
    </button>
  );
}

export function AirMeter({ value, sub = 'Excellent · PM2.5 4 µg/m³' }) {
  const C = 2 * Math.PI * 62;
  return (
    <section className="elev-raised rounded-[22px] p-6 text-center" aria-label={`Air quality ${value}`}>
      <div className="meta-label !text-[10px]">AIR QUALITY</div>
      <div className="relative w-[164px] h-[164px] mx-auto mt-4">
        <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90" aria-hidden="true">
          <circle cx="80" cy="80" r="62" fill="none" stroke="#CBD2D8" strokeWidth="10" />
          <circle cx="80" cy="80" r="62" fill="none" stroke="#262828" strokeWidth="10" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C * (1 - value / 100)} style={{ transition: 'stroke-dashoffset 500ms ease' }} />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div>
            <div className="inst text-[40px] font-extrabold leading-none text-ink">{value}</div>
            <div className="mt-2 inline-flex items-center gap-1.5 elev-recessed-sm rounded-full px-2.5 py-1">
              <span className="volt-dot !w-[5px] !h-[5px]" aria-hidden="true" />
              <span className="micro !text-[9px] !text-muted">EXCELLENT</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-[12.5px] text-muted">{sub}</div>
    </section>
  );
}

import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { devices, inr } from '../data';
import { ChapterHead, NeuButton, Divider } from '../components/layout/ui';

const ROOMS = [
  { id: 'studio', name: 'Studio · 1 room', mult: 1, hint: 'Single space' },
  { id: 'home', name: 'Home · 2–3 rooms', mult: 2.2, hint: 'Most popular' },
  { id: 'villa', name: 'Villa · 4+ rooms', mult: 3.6, hint: 'Full estate' },
];
const INSTALL = 9500;

export default function Build() {
  const [qty, setQty] = useState({ hub: 1, sense: 2, light: 4, air: 1, sound: 1, display: 1 });
  const [room, setRoom] = useState('home');
  const [install, setInstall] = useState(true);
  const roomCfg = ROOMS.find(r => r.id === room);

  const lines = useMemo(() => devices.map(d => ({ ...d, n: qty[d.id] || 0 })).filter(d => d.n > 0), [qty]);
  const hardware = lines.reduce((s, d) => s + d.priceValue * d.n, 0);
  const scaled = Math.round(hardware * (room === 'studio' ? 1 : room === 'home' ? 1.15 : 1.3));
  const total = scaled + (install ? INSTALL : 0);
  const set = (id, delta) => setQty(q => ({ ...q, [id]: Math.max(0, Math.min(12, (q[id] || 0) + delta)) }));

  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <ChapterHead eyebrow="BUILD" title="Build your environment."
          lede="Compose the system room by room. Quantities scale honestly — one Hub conducts, Senses and Lights multiply per space."
          meta="LIVE ESTIMATE · INR · INSTALL INCLUDED OPTION" />
        <div className="mt-4 grid lg:grid-cols-[1.15fr_0.85fr] gap-4 items-start">
          <div className="grid gap-2.5">
            <div className="elev-recessed rounded-[18px] p-1.5 flex flex-wrap gap-1" role="radiogroup" aria-label="Space size">
              {ROOMS.map(r => (
                <button key={r.id} role="radio" aria-checked={room === r.id} onClick={() => setRoom(r.id)}
                  className={`flex-1 min-w-[150px] rounded-[14px] px-4 py-3 text-left transition-all min-h-[62px] ${room === r.id ? 'bg-ink text-[#EDEFEF]' : 'text-muted hover:text-ink'}`}>
                  <span className="flex items-center gap-2 text-[13px] font-bold">{room === r.id && <span className="volt-dot" aria-hidden="true" />}{r.name}</span>
                  <span className={`block text-[11.5px] mt-0.5 ${room === r.id ? 'text-[#A7B0B6]' : 'text-faint'}`}>{r.hint}</span>
                </button>
              ))}
            </div>
            {devices.map(d => (
              <div key={d.id} className="elev-raised rounded-[18px] px-4 sm:px-5 min-h-[72px] py-3 flex items-center gap-4">
                <span className="w-11 h-11 rounded-full elev-recessed-sm grid place-items-center shrink-0" aria-hidden="true">
                  <span className="w-5 h-5 rounded-full border-2 border-ink grid place-items-center"><span className="w-1.5 h-1.5 rounded-full bg-ink" /></span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-[14px] text-ink leading-tight">{d.name}</span>
                  <span className="block micro inst tabular-nums mt-0.5">{d.price} · {d.tag.toUpperCase()}</span>
                </span>
                <span className="flex items-center gap-1 elev-recessed-sm rounded-full p-1" role="group" aria-label={`${d.name} quantity`}>
                  <button onClick={() => set(d.id, -1)} aria-label={`Remove one ${d.name}`} className="tactile w-9 h-9 rounded-full elev-raised grid place-items-center font-bold text-ink">−</button>
                  <span className="inst font-bold text-[15px] w-7 text-center tabular-nums" aria-live="polite">{qty[d.id] || 0}</span>
                  <button onClick={() => set(d.id, 1)} aria-label={`Add one ${d.name}`} className="tactile w-9 h-9 rounded-full bg-ink text-[#EDEFEF] grid place-items-center font-bold">+</button>
                </span>
              </div>
            ))}
            <button onClick={() => setInstall(v => !v)} role="switch" aria-checked={install}
              className="tactile elev-raised rounded-[18px] px-5 min-h-[64px] flex items-center justify-between gap-4 text-left">
              <span><span className="block font-semibold text-[14px] text-ink">White-glove installation</span><span className="block text-[12px] text-muted">Calibration · mesh survey · {inr(INSTALL)} flat</span></span>
              <span className={`relative w-[54px] h-[30px] rounded-full shrink-0 ${install ? 'bg-ink' : 'elev-recessed-sm'}`} aria-hidden="true">
                <span className={`absolute top-[3px] w-[24px] h-[24px] rounded-full grid place-items-center transition-all ${install ? 'left-[27px] bg-[#EDEFEF]' : 'left-[3px] elev-raised'}`}>{install && <span className="volt-dot !w-[7px] !h-[7px]" />}</span>
              </span>
            </button>
          </div>

          <aside className="elev-elevated rounded-[22px] p-6 sm:p-7 lg:sticky lg:top-[92px]" aria-label="Estimate">
            <div className="meta-label !text-[10px]">YOUR COMPOSITION · {roomCfg.name.toUpperCase()}</div>
            <div className="mt-4 space-y-2 max-h-[260px] overflow-auto pr-1">
              {lines.length === 0 && <p className="body text-[13.5px]">Nothing selected yet — add at least a Hub to conduct the room.</p>}
              {lines.map(d => (
                <div key={d.id} className="flex justify-between gap-3 text-[13.5px]"><span className="text-muted">{d.n} × {d.name}</span><span className="inst font-semibold text-ink tabular-nums">{inr(d.priceValue * d.n)}</span></div>
              ))}
            </div>
            <div className="rule my-4" aria-hidden="true" />
            <div className="space-y-1.5 text-[13.5px]">
              <div className="flex justify-between"><span className="text-muted">Hardware</span><span className="inst font-semibold tabular-nums">{inr(hardware)}</span></div>
              <div className="flex justify-between"><span className="text-muted">Space scaling ({roomCfg.name})</span><span className="inst font-semibold tabular-nums">{inr(scaled - hardware)}</span></div>
              <div className="flex justify-between"><span className="text-muted">Installation</span><span className="inst font-semibold tabular-nums">{install ? inr(INSTALL) : '—'}</span></div>
            </div>
            <div className="rule my-4" aria-hidden="true" />
            <div className="flex items-baseline justify-between"><span className="meta-label !text-[10px]">ESTIMATE</span><span className="inst text-[34px] font-extrabold tracking-[-0.02em] tabular-nums">{inr(total)}</span></div>
            <p className="micro mt-1">EXCL. TAXES · VALID 30 DAYS</p>
            <div className="mt-5 grid gap-2.5">
              <NeuButton to="/contact" primary className="w-full">Request this build →</NeuButton>
              <Link to="/devices" className="text-center text-[13px] font-semibold text-muted hover:text-ink py-2">Compare devices in detail →</Link>
            </div>
          </aside>
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

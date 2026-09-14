import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AuraCore from '../components/aura/AuraCore';
import { SectionHeading, NeuButton, StatWell, Divider } from '../components/layout/ui';
import { tokens } from '../tokens';
import { devices } from '../data';

const rise = { hidden: { opacity: 0, y: 22 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: Math.min(i * 0.07, 0.3), duration: 0.6, ease: [0.22, 1, 0.36, 1] } }) };

function useLiveEnv() {
  const reduce = useReducedMotion();
  const [env, setEnv] = useState({ t: 24.0, h: 48, aqi: 96, light: 72, energy: 4.2, occ: 2 });
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setEnv((p) => ({
        t: +(p.t + (Math.random() - 0.5) * 0.12).toFixed(1),
        h: Math.max(42, Math.min(54, p.h + Math.round((Math.random() - 0.5) * 2))),
        aqi: Math.max(91, Math.min(99, p.aqi + Math.round((Math.random() - 0.5) * 2))),
        light: Math.max(68, Math.min(76, p.light + Math.round((Math.random() - 0.5) * 2))),
        energy: +(Math.max(3.6, Math.min(4.8, p.energy + (Math.random() - 0.5) * 0.05))).toFixed(1),
        occ: p.occ,
      }));
    }, 2600);
    return () => clearInterval(id);
  }, [reduce]);
  return env;
}

export default function Home() {
  const env = useLiveEnv();
  const [mode, setMode] = useState('relax');
  const active = tokens.modes.find(m => m.id === mode);

  return (
    <div>
      {/* HERO — asymmetric editorial, one focal stage */}
      <section className="px-3 sm:px-5 pt-3">
        <div className="max-w-[1200px] mx-auto elev-raised rounded-[28px] overflow-hidden">
          <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-0 items-stretch">
            <motion.div variants={rise} initial="hidden" animate="show" className="px-6 sm:px-10 lg:px-12 py-9 sm:py-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="volt-dot" aria-hidden="true" />
                <span className="meta-label">INTELLIGENT ENVIRONMENT OS</span>
              </div>
              <h1 className="display text-balance">Your environment,<br />intelligently alive.</h1>
              <p className="body mt-5 max-w-[46ch] text-[16px]">
                AURA learns how your space behaves, adapts to how you live, and quietly orchestrates light, air, sound and climate around you.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <NeuButton to="/experience" primary>Explore AURA</NeuButton>
                <NeuButton to="/dashboard" live>Control Center</NeuButton>
              </div>
              <div className="mt-8 pt-5 border-t border-line/70 flex flex-wrap gap-x-6 gap-y-2 micro">
                <span>14 SENSOR STREAMS</span><span>ON-DEVICE AI</span><span>19 dB QUIET</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="elev-recessed-lg m-3 sm:m-4 rounded-[22px] px-5 sm:px-8 py-7 sm:py-9 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <span className="micro">LIVING ROOM · LIVE</span>
                <span className="micro inst">{env.t.toFixed(1)}°C · {env.light}% · {env.aqi} AQI</span>
              </div>
              <AuraCore size={320} temp={env.t} light={env.light} aqi={env.aqi} />
              <div className="mt-5 grid grid-cols-3 gap-2.5" aria-live="off">
                {[[`TEMP`, `${env.t.toFixed(1)}°`], [`LIGHT`, `${env.light}%`], [`AIR`, `${env.aqi}`]].map(([k, v]) => (
                  <div key={k} className="elev-recessed-sm rounded-[14px] py-2.5 text-center">
                    <div className="micro !text-[9px]">{k}</div>
                    <div className="inst font-bold text-[15px] text-ink tabular-nums">{v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PULSE */}
      <section className="px-3 sm:px-5 mt-[72px]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="ENVIRONMENTAL INTELLIGENCE" title="Your space has a pulse."
            copy="Six recessed instruments. One calm system, continuously aware — so you never have to check." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            <StatWell label="TEMP" value={`${env.t.toFixed(1)}°`} sub="Comfort band" />
            <StatWell label="HUMIDITY" value={`${env.h}%`} sub="Balanced" />
            <StatWell label="AIR" value={env.aqi} sub="Excellent" />
            <StatWell label="LIGHT" value={`${env.light}%`} sub="Circadian" />
            <StatWell label="ENERGY" value={`${env.energy}`} sub="kWh · −18%" live />
            <StatWell label="PRESENCE" value={`0${env.occ}`} sub="Calm" />
          </div>
        </div>
      </section>

      {/* MODES — segmented control, one detail well */}
      <section className="px-3 sm:px-5 mt-[88px]">
        <div className="max-w-[1200px] mx-auto elev-raised rounded-[28px] px-6 sm:px-10 py-9 sm:py-11">
          <SectionHeading eyebrow="ADAPTIVE MODES" title="One touch. The whole room follows."
            copy="Not scenes. States of being — tuned across light, climate, air and sound at once." />
          <div className="elev-recessed rounded-[18px] p-1.5 flex flex-wrap gap-1" role="tablist" aria-label="Adaptive modes">
            {tokens.modes.map((m) => {
              const on = mode === m.id;
              return (
                <button key={m.id} role="tab" aria-selected={on} onClick={() => setMode(m.id)}
                  className={`flex-1 min-w-[104px] min-h-[46px] rounded-[14px] px-4 text-[12px] font-bold tracking-[0.12em] transition-all duration-200 flex items-center justify-center gap-2 ${on ? 'bg-ink text-[#EDEFEF]' : 'text-muted hover:text-ink'}`}>
                  {on && <span className="volt-dot" aria-hidden="true" />}{m.name}
                </button>
              );
            })}
          </div>
          {active && (
            <motion.div key={active.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              className="mt-4 elev-recessed rounded-[18px] px-6 sm:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[['TEMPERATURE', active.temp], ['LIGHT', active.light], ['SOUND', active.sound]].map(([k, v]) => (
                <div key={k}><div className="micro mb-1.5">{k}</div><div className="inst font-extrabold text-[19px] text-ink">{v}</div></div>
              ))}
              <div className="col-span-2 lg:col-span-1"><div className="micro mb-1.5">CHARACTER</div><p className="text-[13.5px] text-muted leading-relaxed">{active.desc}</p></div>
            </motion.div>
          )}
        </div>
      </section>

      {/* RHYTHM — editorial split */}
      <section className="px-3 sm:px-5 mt-[88px]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-4 items-stretch">
          <div className="elev-raised rounded-[22px] px-7 sm:px-9 py-8 sm:py-10 flex flex-col justify-center">
            <div className="meta-label mb-4">INTELLIGENCE</div>
            <h2 className="h2 text-balance">It learns the rhythm of your life.</h2>
            <p className="body mt-4 max-w-[44ch]">Wake, focus, absence, return, rest. AURA observes the pattern and adjusts before you ask — no chatbot, no commands, just anticipation.</p>
            <div className="mt-6"><NeuButton to="/intelligence">How intelligence works</NeuButton></div>
          </div>
          <div className="elev-recessed-lg rounded-[22px] px-3 sm:px-4 py-3">
            {[['06:45', 'Morning', 'Warm 2200K · fresh air · 22°C'], ['08:30', 'Focus', 'Neutral 5000K · quiet · 23°C'], ['13:10', 'Away', 'Eco drift · secure · purify'], ['18:40', 'Return', 'Warm return · 23.5°C · soft mix'], ['22:30', 'Sleep', 'Dark · 19°C · silent']].map(([t, n, d], i) => (
              <motion.div key={t} custom={i} variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
                className={`flex items-center gap-4 px-4 py-[13px] rounded-[14px] ${i === 1 ? 'elev-raised' : ''}`}>
                <span className="inst font-bold text-[13px] text-ink tabular-nums w-[52px] shrink-0">{t}</span>
                <span className="w-px self-stretch bg-line/70" aria-hidden="true" />
                <span className="min-w-0"><span className="block font-semibold text-[14px] text-ink leading-tight">{n}</span><span className="block text-[12.5px] text-muted truncate">{d}</span></span>
                {i === 1 && <span className="volt-dot ml-auto shrink-0" aria-label="Current focus" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="px-3 sm:px-5 mt-[88px]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="ECOSYSTEM" title="Six instruments. One organism."
            copy="Machined, tactile, quiet. Every device is a physical extension of the same intelligence." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {devices.map((d, i) => (
              <motion.div key={d.id} custom={i} variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
                <Link to={`/device/${d.id}`} className="tactile elev-raised rounded-[22px] p-6 block h-full group" aria-label={`${d.name} — ${d.tag}`}>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="micro">{d.tag.toUpperCase()}</span>
                    <span className="inst text-[12px] text-faint tabular-nums">{d.price}</span>
                  </div>
                  <div className="elev-recessed rounded-[18px] h-[132px] grid place-items-center mb-5">
                    <span className="w-[68px] h-[68px] rounded-full elev-raised grid place-items-center transition-transform duration-300 group-hover:scale-[1.04]" aria-hidden="true">
                      <span className="w-[30px] h-[30px] rounded-full border-[2.5px] border-ink grid place-items-center">
                        <span className="w-[6px] h-[6px] rounded-full bg-ink" />
                      </span>
                    </span>
                  </div>
                  <h3 className="h3 text-ink">{d.name}</h3>
                  <p className="mt-1.5 text-muted text-[13.5px] leading-relaxed line-clamp-2">{d.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink">Explore <span aria-hidden="true">→</span></span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <NeuButton to="/devices" primary>View all devices</NeuButton>
            <NeuButton to="/dashboard">Try live Control Center</NeuButton>
          </div>
        </div>
      </section>

      {/* CLOSING — single ink band for the page */}
      <section className="px-3 sm:px-5 mt-[88px]">
        <div className="max-w-[1200px] mx-auto ink-band rounded-[28px] px-6 sm:px-12 py-11 sm:py-14 text-center">
          <div className="meta-label mb-4">BEGIN</div>
          <h2 className="h-display-sm text-balance text-[#EDEFEF]">Let&apos;s design your environment.</h2>
          <p className="mt-4 max-w-[52ch] mx-auto text-[15px] text-[#A7B0B6]">Tell us about your space. We&apos;ll compose light, air, sound and climate around the way you live.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="tactile inline-flex items-center gap-2.5 rounded-[18px] px-7 min-h-[50px] text-[14.5px] font-bold bg-volt text-ink">Start a conversation <span aria-hidden="true">→</span></Link>
            <Link to="/technology" className="tactile inline-flex items-center rounded-[18px] px-7 min-h-[50px] text-[14.5px] font-semibold text-[#EDEFEF] border border-white/20">Inside the technology</Link>
          </div>
        </div>
      </section>
      <div className="max-w-[1200px] mx-auto px-2 mt-10"><Divider /></div>
    </div>
  );
}

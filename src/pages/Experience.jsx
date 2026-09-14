import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChapterHead, SectionHeading, NeuButton, Divider } from '../components/layout/ui';

const states = [
  { id: 'morning', name: 'Morning', time: '06:45', desc: 'Warm light rises like dawn. Fresh air cycles in. 22°C. A soft playlist finds you before the alarm does.', specs: [['LIGHT', '2700K warm'], ['AIR', 'Purify'], ['CLIMATE', '22.0°C'], ['SOUND', 'Mix 22%']] },
  { id: 'focus', name: 'Focus', time: '08:30', desc: 'Balanced illumination. Quiet. 23°C. Distractions dissolve into a neutral, held attention.', specs: [['LIGHT', '5000K'], ['AIR', 'Silent'], ['CLIMATE', '23.0°C'], ['SOUND', 'Minimal']] },
  { id: 'evening', name: 'Evening', time: '18:40', desc: 'Amber pools of light. Lower intensity. 23.5°C. The room exhales with you.', specs: [['LIGHT', '2200K'], ['AIR', 'Relax 45%'], ['CLIMATE', '23.5°C'], ['SOUND', 'Mix 24%']] },
  { id: 'night', name: 'Night', time: '22:30', desc: 'Near-dark. Silent. 19°C. Security arms itself. Sleep arrives without negotiation.', specs: [['LIGHT', '2% ember'], ['AIR', 'Silent'], ['CLIMATE', '19.0°C'], ['SOUND', 'Guard']] },
];

export default function Experience() {
  const [active, setActive] = useState('morning');
  const cur = states.find(s => s.id === active);
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <ChapterHead eyebrow="EXPERIENCE" title="The room changes with you."
          lede="Not a demo. A day — compressed. Select a moment and feel the environment re-tune itself."
          meta="04 STATES · CIRCADIAN · 200 MS RESPONSE" />
        <div className="mt-4 elev-recessed rounded-[18px] p-1.5 flex flex-wrap gap-1" role="tablist" aria-label="Moments">
          {states.map(s => {
            const on = active === s.id;
            return (
              <button key={s.id} role="tab" aria-selected={on} onClick={() => setActive(s.id)}
                className={`flex-1 min-w-[132px] min-h-[48px] rounded-[14px] px-4 text-[12.5px] font-bold tracking-[0.08em] transition-all flex items-center justify-center gap-2 ${on ? 'bg-ink text-[#EDEFEF]' : 'text-muted hover:text-ink'}`}>
                {on && <span className="volt-dot" aria-hidden="true" />}{s.name.toUpperCase()} · {s.time}
              </button>
            );
          })}
        </div>

        <motion.div key={cur.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-4 items-stretch">
          <div className="elev-recessed-lg rounded-[22px] px-6 sm:px-9 py-8 min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="micro inst tabular-nums">{cur.time} — {cur.name.toUpperCase()}</div>
              <p className="mt-4 h3 !text-[24px] sm:!text-[28px] !leading-[1.25] text-ink max-w-[38ch]">{cur.desc}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8">
              {cur.specs.map(([k, v]) => (
                <div key={k} className="elev-raised rounded-[14px] px-3 py-3 text-center"><div className="micro !text-[9px]">{k}</div><div className="text-[13px] font-semibold text-ink mt-1">{v}</div></div>
              ))}
            </div>
          </div>
          <div className="elev-raised rounded-[22px] px-6 sm:px-8 py-7">
            <div className="meta-label !text-[10px] mb-4">WHAT YOU FEEL</div>
            <ul className="space-y-2.5">
              {[['No switches touched', 'Spectrum found on its own.'], ['No thermostat opened', 'Drifted 0.4° before you noticed.'], ['No app launched', 'Air, sound, security moved as one.'], ['No interruption', 'Only comfort remained.']].map(([h, d]) => (
                <li key={h} className="elev-recessed rounded-[16px] px-4 py-3.5"><div className="font-semibold text-[13.5px] text-ink">{h}</div><div className="text-muted text-[12.5px]">{d}</div></li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2.5"><NeuButton to="/devices" primary>Meet the devices</NeuButton><NeuButton to="/dashboard">Feel it live</NeuButton></div>
          </div>
        </motion.div>
        <div className="mt-[72px]"><SectionHeading eyebrow="CONTINUITY" title="Every page is the same room, from another angle." copy="Experience → Devices → Intelligence → Control Center. One system, told four ways." /></div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

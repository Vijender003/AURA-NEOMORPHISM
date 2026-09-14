import { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { routines as seed } from '../data';
import { ChapterHead, NeuButton, Divider } from '../components/layout/ui';

export default function Routines() {
  const [items, setItems] = useState(seed);
  const [active, setActive] = useState('morning');
  const [live, setLive] = useState(null);
  const cur = items.find(r => r.id === active) || items[0];
  const activate = () => {
    setLive(cur.id);
    setTimeout(() => setLive(null), 2400);
  };

  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <ChapterHead eyebrow="ROUTINES" title="Sequences that run the day."
          lede="Physical automation modules. Drag to reorder — the home respects the new order instantly."
          meta="04 ROUTINES · DRAG TO REORDER · LOCAL EXECUTION" />
        <div className="mt-4 grid lg:grid-cols-[0.95fr_1.05fr] gap-4 items-start">
          <Reorder.Group axis="y" values={items} onReorder={setItems} className="grid gap-2.5" aria-label="Routines order">
            {items.map(r => {
              const on = active === r.id;
              return (
                <Reorder.Item key={r.id} value={r} className="list-none">
                  <button onClick={() => setActive(r.id)} aria-pressed={on}
                    className={`tactile w-full text-left rounded-[18px] px-5 py-4 flex items-center justify-between gap-4 min-h-[76px] ${on ? 'elev-recessed' : 'elev-raised'}`}>
                    <span className="min-w-0">
                      <span className="micro inst tabular-nums">{r.time}</span>
                      <span className="block font-bold text-[16px] tracking-[-0.01em] text-ink mt-0.5 truncate">{r.name}</span>
                      <span className="block text-[12px] text-faint mt-0.5">Drag to reorder · {r.steps.length} steps</span>
                    </span>
                    {on ? <span className="volt-dot shrink-0" aria-hidden="true" /> : <span className="w-[6px] h-[6px] rounded-full bg-line shrink-0" aria-hidden="true" />}
                  </button>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>

          <motion.div key={cur.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}
            className="elev-recessed-lg rounded-[22px] p-5 sm:p-7">
            <div className="flex items-baseline justify-between gap-3 px-1">
              <h2 className="h3 text-ink">{cur.name}</h2>
              <span className="inst font-bold text-[18px] text-ink tabular-nums">{cur.time}</span>
            </div>
            <div className="mt-4 grid gap-2">
              {cur.steps.map(([k, v], i) => (
                <div key={k} className="elev-raised rounded-[14px] px-4 min-h-[52px] flex items-center justify-between gap-3">
                  <span className="flex items-center gap-3 min-w-0"><span className="micro w-6 shrink-0">0{i + 1}</span><span className="font-semibold text-[13.5px] text-ink truncate">{k}</span></span>
                  <span className="elev-recessed-sm rounded-full px-3.5 py-1.5 micro !text-ink font-bold shrink-0">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-2.5 flex-wrap" aria-live="polite">
              <NeuButton primary onClick={activate}>{live === cur.id ? '✓ Routine live' : 'Activate routine'}</NeuButton>
              <NeuButton to="/dashboard">Control Center</NeuButton>
            </div>
          </motion.div>
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

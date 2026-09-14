import { motion } from 'framer-motion';
import { ChapterHead, SectionHeading, NeuButton, Divider } from '../components/layout/ui';

const layers = [
  ['01', 'SENSOR LAYER', '14 streams per room — temperature, humidity, CO₂, VOC, lux, occupancy, noise. Sampled every second, calibrated every hour.'],
  ['02', 'INTELLIGENCE LAYER', 'On-device fusion interprets context: who is here, what time it is, what usually happens next. No cloud eavesdropping.'],
  ['03', 'CONTROL LAYER', 'One decision fans out to six instruments — light, climate, air, sound, security, energy — in under 200 ms.'],
  ['04', 'LEARNING LAYER', 'Patterns compress into preferences. The house gets quieter, warmer, sharper — exactly where you like it.'],
  ['05', 'PRIVACY LAYER', 'Local-first. Raw sensor data never leaves your walls. Only anonymous, encrypted model deltas — if you opt in.'],
];

export default function Technology() {
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <ChapterHead eyebrow="TECHNOLOGY" title="Technical, but elegant."
          lede="Five layers. Zero noise. A diagram, not a wall of text — because infrastructure should read like architecture."
          meta="SENSE → INTERPRET → COMMAND → LEARN · ≤200 MS" />
        <div className="mt-4 grid gap-2.5">
          {layers.map(([n, h, d], i) => (
            <motion.div key={h} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}
              className="elev-raised rounded-[18px] px-5 sm:px-7 py-5 grid sm:grid-cols-[190px_1fr_96px] gap-4 items-center">
              <div className="flex items-center gap-2.5">
                <span className="micro !text-ink font-bold">{n}</span>
                {i === 1 && <span className="volt-dot" aria-hidden="true" />}
                <span className="text-[12px] font-bold tracking-[0.08em] text-ink">{h.replace(/^\d+ · /, '')}</span>
              </div>
              <p className="body text-[13.5px]">{d}</p>
              <div className="elev-recessed-sm rounded-[12px] h-[48px] hidden sm:flex items-center justify-center micro">L0{i + 1}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-[72px]"><SectionHeading eyebrow="LOOP" title="Sense → Interpret → Command → Learn." copy="A closed loop inside your walls. The cloud is a guest, never the host." /></div>
        <div className="flex gap-2.5 flex-wrap"><NeuButton to="/intelligence" primary>Intelligence philosophy</NeuButton><NeuButton to="/contact">Talk to an architect</NeuButton></div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

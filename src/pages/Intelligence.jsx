import { motion } from 'framer-motion';
import AuraCore from '../components/aura/AuraCore';
import { ChapterHead, SectionHeading, NeuButton, Divider } from '../components/layout/ui';

const layers = [
  ['01', 'CONTEXT AWARENESS', 'Time · occupancy · environment · routines · preferences. AURA reads the room the way a good host does — without staring.'],
  ['02', 'ADAPTIVE ENVIRONMENT', 'Light, climate, air and sound move together. Not four apps — one gesture, composed in real time.'],
  ['03', 'PREDICTIVE BEHAVIOR', 'Instead of waiting for commands, AURA anticipates. 06:45 looks like morning before you say so.'],
  ['04', 'PERSONALIZATION', 'Two people, two climates, one room — negotiated gracefully. Your profile travels with you, room to room.'],
];

export default function Intelligence() {
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="elev-raised rounded-[28px] px-6 sm:px-10 py-8 sm:py-11 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <div>
            <div className="meta-label mb-4">INTELLIGENCE</div>
            <h1 className="display !text-[clamp(36px,4.6vw,54px)]">Intelligence without interruption.</h1>
            <p className="body mt-4 max-w-[48ch]">AURA is not a chatbot. It is an invisible layer — sensing, deciding, adjusting — that never asks for the spotlight.</p>
            <div className="mt-6 flex gap-2.5 flex-wrap"><NeuButton to="/dashboard" primary live>See it decide</NeuButton><NeuButton to="/technology">Under the hood</NeuButton></div>
          </div>
          <div className="elev-recessed-lg rounded-[22px] px-6 py-8 grid place-items-center"><AuraCore size={260} temp={22.4} light={64} aqi={97} /></div>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {layers.map(([n, h, d], i) => (
            <motion.div key={h} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="elev-raised rounded-[22px] p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="elev-recessed-sm rounded-[12px] w-10 h-10 grid place-items-center micro !text-ink font-bold">{n}</span>
                {i === 1 && <span className="volt-dot" aria-label="Signature layer" />}
              </div>
              <h2 className="text-[15px] font-bold tracking-[0.06em] text-ink">{h}</h2>
              <p className="body mt-2 text-[14px]">{d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-[72px]"><SectionHeading eyebrow="PRINCIPLE" title="The best automation is the one you never notice." copy="AURA learns how your environment behaves and adapts it before you need to ask." /></div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

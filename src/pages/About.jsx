import { ChapterHead, SectionHeading, NeuButton, Divider } from '../components/layout/ui';
import AuraCore from '../components/aura/AuraCore';

export default function About() {
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="elev-raised rounded-[28px] px-6 sm:px-10 py-8 sm:py-11 grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
          <div>
            <div className="meta-label mb-4">ABOUT</div>
            <h1 className="display !text-[clamp(34px,4.4vw,52px)]">Technology should disappear into the experience.</h1>
            <p className="body mt-5 max-w-[50ch]">AURA exists for one reason: rooms that take care of you without asking for attention. No feeds. No noise. No dashboards you must babysit. Only light that knows the hour, air that arrives before you notice, and quiet that holds your focus.</p>
            <div className="mt-6 flex gap-2.5 flex-wrap"><NeuButton to="/contact" primary>Start a conversation</NeuButton><NeuButton to="/journal">Read the journal</NeuButton></div>
          </div>
          <div className="elev-recessed-lg rounded-[22px] px-6 py-8 grid place-items-center"><AuraCore size={260} temp={23.5} light={45} aqi={98} /></div>
        </div>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          {[['CALM', 'If it needs your attention, it failed.'], ['PRECISE', '0.1°C · 1% RH · 1 lux. Feelings, measured.'], ['PRIVATE', 'Your patterns stay inside your walls.']].map(([h, d]) => (
            <div key={h} className="elev-raised rounded-[22px] p-6 text-left">
              <div className="flex items-center gap-2.5 mb-3"><span className="volt-dot" aria-hidden="true" style={{ visibility: h === 'CALM' ? 'visible' : 'hidden' }} /><span className="meta-label !text-[10px]">{h}</span></div>
              <p className="font-bold text-[16px] text-ink leading-snug">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-[72px]"><SectionHeading eyebrow="NORTH STAR" title="Make digital interfaces feel physically intelligent." copy="Where architecture, technology, intelligence and interface become one system." /></div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

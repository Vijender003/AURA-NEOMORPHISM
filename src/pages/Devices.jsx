import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { devices } from '../data';
import { ChapterHead, NeuButton, Divider } from '../components/layout/ui';

export default function Devices() {
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <ChapterHead eyebrow="DEVICES" title="Instruments, not gadgets."
          lede="Editorial hardware. Each device earns its place — machined surfaces, embedded controls, a decade-long presence in your walls."
          meta="06 INSTRUMENTS · LOCAL MESH · 10-YEAR DESIGN LIFE" />
        <div className="mt-4 grid gap-4">
          {devices.map((d, i) => (
            <motion.article key={d.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`elev-raised rounded-[22px] p-6 sm:p-9 grid lg:grid-cols-[0.95fr_1.05fr] gap-7 items-center`}>
              <div className={`elev-recessed-lg rounded-[18px] min-h-[240px] grid place-items-center relative ${i % 2 ? 'lg:order-2' : ''}`}>
                <span className="w-[120px] h-[120px] rounded-full elev-elevated grid place-items-center" aria-hidden="true">
                  <span className="w-[52px] h-[52px] rounded-full border-[2.5px] border-ink grid place-items-center">
                    <span className="w-[8px] h-[8px] rounded-full bg-ink" />
                  </span>
                </span>
                <span className="absolute bottom-4 micro">{d.dims.toUpperCase()}</span>
                <span className="absolute top-4 left-4 micro inst tabular-nums">0{i + 1} / 06</span>
              </div>
              <div>
                <div className="micro">{d.tag.toUpperCase()}</div>
                <h2 className="h2 mt-2">{d.name}</h2>
                <p className="body mt-3 max-w-[52ch] text-[14.5px]">{d.desc}</p>
                <dl className="mt-5 grid grid-cols-2 gap-2">
                  {Object.entries(d.specs).map(([k, v]) => (
                    <div key={k} className="elev-recessed-sm rounded-[12px] px-3.5 py-2.5"><dt className="micro !text-[9px]">{k.toUpperCase()}</dt><dd className="text-[12.5px] font-semibold text-ink mt-0.5">{v}</dd></div>
                  ))}
                </dl>
                <div className="mt-5 flex items-center gap-4 flex-wrap">
                  <NeuButton to={`/device/${d.id}`} primary>Explore {d.name}</NeuButton>
                  <span className="micro inst tabular-nums !text-muted">{d.price}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

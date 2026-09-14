import { posts } from '../data';
import { motion } from 'framer-motion';
import { ChapterHead, Divider } from '../components/layout/ui';

export default function Journal() {
  const [head, ...rest] = posts;
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <ChapterHead eyebrow="JOURNAL" title="Notes on living with intelligence."
          lede="Architecture, light, air, sound, wellbeing — the editorial layer that makes AURA a real technology brand."
          meta="06 ESSAYS · 4–9 MIN READS" />
        <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="mt-4 elev-raised rounded-[22px] px-6 sm:px-9 py-8 grid lg:grid-cols-[1fr_auto] gap-5 items-center cursor-pointer tactile">
          <div>
            <div className="flex items-center gap-3"><span className="volt-dot" aria-hidden="true" /><span className="micro !text-active font-bold">FEATURED · {head.cat}</span><span className="micro">{head.read}</span></div>
            <h2 className="h2 mt-3 max-w-[24ch]">{head.title}</h2>
            <p className="body mt-3 max-w-[58ch] text-[14.5px]">{head.excerpt}</p>
          </div>
          <span className="text-[14px] font-semibold text-ink whitespace-nowrap">Read →</span>
        </motion.article>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <motion.article key={p.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="tactile elev-raised rounded-[22px] p-6 cursor-pointer flex flex-col">
              <div className="flex items-center justify-between gap-2"><span className="micro !text-active font-bold">{p.cat}</span><span className="micro">{p.read}</span></div>
              <h2 className="mt-3.5 text-[18px] font-bold tracking-[-0.01em] leading-[1.3] text-ink">{p.title}</h2>
              <p className="mt-2.5 body text-[13.5px] flex-1">{p.excerpt}</p>
              <div className="rule my-4" aria-hidden="true" />
              <div className="text-[13.5px] font-semibold text-ink">Read <span aria-hidden="true">→</span></div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

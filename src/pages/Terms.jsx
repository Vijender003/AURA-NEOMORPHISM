import { ChapterHead, Divider } from '../components/layout/ui';

const sections = [
  ['The product', 'AURA sells environmental hardware, software, and installation as a one-time composition plus optional care. Estimates on /build are valid 30 days, exclusive of taxes, and confirmed by an environment architect before any charge.'],
  ['Installation and calibration', 'White-glove installation includes mesh survey, device placement, and a 14-day calibration window during which targets adapt to your routines. You may request re-calibration once, free, within 90 days.'],
  ['Returns', 'Unopened devices return within 30 days. Installed systems carry a 45-day comfort guarantee: if the environment does not hold agreed targets, we re-tune or remove the system and refund hardware.'],
  ['Warranty', 'Five years on Hub, Display and Air; three years on Sense, Light and Sound; lifetime mesh-compatibility commitment — new instruments join old Homes without forced upgrades.'],
  ['Acceptable use', 'Do not use presence or audio features to monitor people without their knowledge where the law requires notice. Guest mode exists for exactly this reason — use it.'],
  ['Service and uptime', 'Local control never depends on our servers. Cloud features (remote access, shared profiles) target 99.9% monthly availability; failures never degrade in-home automation.'],
  ['Liability', 'Maximum liability is the amount paid for the affected composition in the preceding 12 months. Nothing here limits rights you hold under applicable consumer law.'],
  ['Contact', 'Legal questions: legal@aura.example. Formal notices are answered within 15 working days.'],
];

export default function Terms() {
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[860px] mx-auto">
        <ChapterHead eyebrow="TERMS" title="Fair terms, engineered like the product."
          lede="No dark patterns, no forced obsolescence, no surprise renewals. The short version is the long version."
          meta="UPDATED SEP 2026 · 5 MIN READ" />
        <div className="mt-4 grid gap-2.5">
          {sections.map(([h, d], i) => (
            <section key={h} className="elev-raised rounded-[18px] px-6 py-5">
              <div className="flex items-center gap-3 mb-2"><span className="micro !text-ink font-bold">0{i + 1}</span><h2 className="text-[15px] font-bold text-ink">{h}</h2></div>
              <p className="body text-[14px]">{d}</p>
            </section>
          ))}
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

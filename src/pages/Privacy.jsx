import { ChapterHead, Divider } from '../components/layout/ui';

const sections = [
  ['What stays in your walls', 'Raw sensor streams — temperature, humidity, CO₂, occupancy, audio levels — are processed on the AURA Hub inside your home. They are never uploaded, sold, or used for advertising. Disconnect the internet and every routine keeps working.'],
  ['What may leave, with consent', 'If you opt into product improvement, the Hub sends only encrypted, anonymous model deltas — never audio recordings, timelines, or identities. Each payload is logged on-device where you can inspect it.'],
  ['Control and deletion', 'You can export everything AURA knows about your spaces, pause learning per room, or wipe the Hub to factory state at any time from the Control Center. Deletion propagates to paired devices within 24 hours.'],
  ['Security', 'Local mesh traffic uses rotating keys; remote access requires explicit pairing plus two-factor approval. Firmware updates are signed and staged — a failed verification rolls back automatically.'],
  ['Retention', 'Operational buffers (last 72 hours) support routines like Away detection, then roll off automatically. Aggregates older than 90 days exist only as on-device preference weights.'],
  ['Children and guests', 'Guest mode suspends personalization and presence history. Spaces marked for children disable voice profiling and retain nothing beyond session climate targets.'],
  ['Contact', 'Privacy questions: privacy@aura.example. Requests are answered within 30 days with a full export of what, if anything, left your walls.'],
];

export default function Privacy() {
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[860px] mx-auto">
        <ChapterHead eyebrow="PRIVACY" title="Your patterns stay in your walls."
          lede="Local-first is an architecture, not a promise. Here is exactly what AURA collects, what it never sends, and how you verify it."
          meta="UPDATED SEP 2026 · 6 MIN READ" />
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

import { useParams, Link } from 'react-router-dom';
import { devices } from '../data';
import { NeuButton, Divider } from '../components/layout/ui';
import { TactileSlider } from '../components/controls/controls';
import { useState } from 'react';
import AuraCore from '../components/aura/AuraCore';

export default function DeviceDetail() {
  const { id } = useParams();
  const d = devices.find(x => x.id === id) || devices[0];
  const [demo, setDemo] = useState(62);
  const others = devices.filter(x => x.id !== d.id).slice(0, 3);

  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="elev-raised rounded-[28px] px-6 sm:px-10 py-8 sm:py-11 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <div>
            <Link to="/devices" className="micro hover:text-ink transition-colors">← ALL DEVICES</Link>
            <div className="meta-label mt-5">{d.tag.toUpperCase()}</div>
            <h1 className="display !text-[clamp(38px,5vw,58px)] mt-2">{d.name}</h1>
            <p className="body mt-4 max-w-[48ch]">{d.desc}</p>
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <NeuButton primary>Build your environment</NeuButton>
              <span className="elev-recessed-sm rounded-[14px] px-4 min-h-[48px] inline-flex items-center micro inst tabular-nums !text-muted">{d.price}</span>
            </div>
          </div>
          <div className="elev-recessed-lg rounded-[22px] px-6 py-8 grid place-items-center">
            <span className="w-[180px] h-[180px] rounded-full elev-elevated grid place-items-center" aria-hidden="true">
              <span className="w-[76px] h-[76px] rounded-full border-[3px] border-ink grid place-items-center">
                <span className="w-[10px] h-[10px] rounded-full bg-ink" />
              </span>
            </span>
            <div className="micro mt-5">{d.dims.toUpperCase()}</div>
          </div>
        </div>

        <div className="mt-4 grid lg:grid-cols-3 gap-4 items-start">
          <div className="elev-raised rounded-[22px] p-6">
            <div className="meta-label !text-[10px] mb-3">PHILOSOPHY</div>
            <p className="h3 text-ink">Why {d.name} exists.</p>
            <p className="body mt-2.5 text-[14px]">Most {d.tag.toLowerCase()} shouts for attention. {d.name} disappears into the wall, the ceiling, the routine — and only the effect remains. Calm is the feature.</p>
          </div>
          <div className="grid gap-4">
            <TactileSlider label={`${d.name} · INTENSITY`} hint="Same control language as Control Center" value={demo} onChange={setDemo} />
          </div>
          <div className="elev-raised rounded-[22px] p-6">
            <div className="meta-label !text-[10px] mb-3">TECHNICAL</div>
            <dl className="space-y-2">{Object.entries(d.specs).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 elev-recessed-sm rounded-[12px] px-3.5 py-2.5 text-[12.5px]">
                <dt className="micro !text-[9px] pt-0.5">{k.toUpperCase()}</dt><dd className="font-semibold text-ink text-right">{v}</dd>
              </div>))}</dl>
          </div>
        </div>

        <div className="mt-4 elev-recessed-lg rounded-[22px] px-6 sm:px-9 py-8 grid lg:grid-cols-[1fr_auto] gap-7 items-center">
          <div>
            <div className="meta-label !text-[10px]">ECOSYSTEM</div>
            <h2 className="h2 mt-2">Plays as one organism.</h2>
            <p className="body mt-3 max-w-[52ch] text-[14.5px]">{d.name} meshes with every other AURA instrument over an encrypted local mesh. No cloud round-trip for the things that matter.</p>
          </div>
          <AuraCore size={200} compact />
        </div>

        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          {others.map(o => <Link key={o.id} to={`/device/${o.id}`} className="tactile elev-raised rounded-[18px] px-5 min-h-[56px] flex items-center justify-between text-[14px] font-semibold text-ink"><span>{o.name}</span><span aria-hidden="true">→</span></Link>)}
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

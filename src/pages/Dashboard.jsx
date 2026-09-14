import { useState } from 'react';
import AuraCore from '../components/aura/AuraCore';
import { TempDial, TactileSlider, ToggleRow, AirMeter } from '../components/controls/controls';
import { StatWell, Divider } from '../components/layout/ui';

export default function Dashboard() {
  const [temp, setTemp] = useState(24.0);
  const [light, setLight] = useState(72);
  const [sound, setSound] = useState(38);
  const [aqi] = useState(96);
  const [secure, setSecure] = useState(true);
  const [eco, setEco] = useState(true);
  const [notify, setNotify] = useState(false);

  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Console header */}
        <div className="elev-raised rounded-[22px] px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3"><span className="volt-dot" aria-hidden="true" /><span className="meta-label">GOOD EVENING · LIVING ROOM</span></div>
            <h1 className="h-display-sm mt-2 text-ink">Vijender</h1>
            <p className="body mt-1 text-[14px]">All zones nominal. Two present. Energy −18% vs average.</p>
          </div>
          <div className="elev-recessed-sm rounded-full pl-3.5 pr-5 py-2.5 inline-flex items-center gap-2.5 self-start sm:self-auto">
            <span className="volt-dot" aria-hidden="true" />
            <span className="micro !text-muted">AURA ONLINE · 200 MS LOOP</span>
          </div>
        </div>

        <div className="mt-4 grid lg:grid-cols-3 gap-4 items-start">
          {/* Environment stage */}
          <div className="elev-raised rounded-[22px] p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="meta-label !text-[10px]">ENVIRONMENT</span>
              <span className="micro inst tabular-nums">{temp.toFixed(1)}° · {light}% · {aqi}</span>
            </div>
            <div className="elev-recessed-lg rounded-[18px] px-4 py-6">
              <AuraCore size={240} temp={temp} light={light} aqi={aqi} compact />
            </div>
            <div className="mt-3.5 grid grid-cols-3 gap-2.5">
              <StatWell label="HUMIDITY" value="48%" sub="Balanced" />
              <StatWell label="ENERGY" value="4.2" sub="kWh · −18%" live />
              <StatWell label="OCCUPANCY" value="02" sub="Present" />
            </div>
          </div>

          {/* Climate column */}
          <div className="grid gap-4">
            <TempDial value={temp} onChange={setTemp} />
            <TactileSlider label="LIGHTING · LIVING" hint="Circadian · 2700–5000K" value={light} onChange={setLight} />
          </div>

          {/* Air + sound + security */}
          <div className="grid gap-4">
            <AirMeter value={aqi} />
            <TactileSlider label="SOUND · SPATIAL" hint="Room-mapped · 19 dB floor" value={sound} onChange={setSound} />
            <section className="elev-recessed-lg rounded-[22px] p-4 sm:p-5" aria-label="Security">
              <div className="flex items-center justify-between px-1 mb-3">
                <span className="meta-label !text-[10px]">SECURITY</span>
                <span className="inline-flex items-center gap-1.5 micro !text-muted"><span className="volt-dot !w-[5px] !h-[5px]" aria-hidden="true" />{secure ? 'PROTECTED' : 'CHECK'}</span>
              </div>
              <div className="grid gap-2 text-[13.5px]">
                {[['Front Door', secure ? 'Locked' : 'Unlocked'], ['Windows', 'Secure'], ['Motion', 'Clear']].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center elev-raised rounded-[14px] px-4 min-h-[46px]"><span className="text-muted">{k}</span><span className="font-semibold text-ink">{v}</span></div>
                ))}
              </div>
              <div className="mt-2.5 grid gap-2">
                <ToggleRow label="Night guard" desc="Arm perimeter after 22:30" checked={secure} onChange={setSecure} />
                <ToggleRow label="Eco drift" desc="Save ~18% when away" checked={eco} onChange={setEco} />
                <ToggleRow label="Minimal notifications" desc="Only urgent interruptions" checked={notify} onChange={setNotify} />
              </div>
            </section>
          </div>
        </div>

        {/* Energy ledger */}
        <div className="mt-4 elev-raised rounded-[22px] px-6 sm:px-8 py-6 grid sm:grid-cols-[0.9fr_1fr_1fr_1fr] gap-4 items-center">
          <div>
            <div className="meta-label !text-[10px]">ENERGY · TODAY</div>
            <div className="inst text-[38px] font-extrabold leading-none mt-1.5 text-ink tabular-nums">4.2 <span className="text-[15px] font-semibold text-muted">kWh</span></div>
            <div className="micro mt-2">−18% VS 7-DAY AVG</div>
          </div>
          {[['CLIMATE', '1.8 kWh', 43], ['LIGHT', '0.9 kWh', 21], ['AIR + SOUND', '1.5 kWh', 36]].map(([k, v, p]) => (
            <div key={k} className="elev-recessed rounded-[16px] px-4 py-3.5">
              <div className="micro">{k}</div>
              <div className="inst font-bold text-[16px] mt-1 text-ink tabular-nums">{v}</div>
              <div className="mt-2.5 h-[6px] rounded-full elev-recessed-sm overflow-hidden" aria-hidden="true">
                <div className="h-full rounded-full bg-ink" style={{ width: `${p}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

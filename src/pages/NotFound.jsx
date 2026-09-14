import { Link } from 'react-router-dom';
import { ChapterHead, NeuButton, Divider } from '../components/layout/ui';

export default function NotFound() {
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        <ChapterHead eyebrow="404 · NOT FOUND" title="This room doesn't exist."
          lede="The address you reached isn't part of the AURA system. The environment is fine — only the route drifted."
          meta="ERROR 404 · SAFE TO RETURN" />
        <div className="mt-4 elev-recessed-lg rounded-[22px] px-6 py-14 text-center">
          <div className="inst font-extrabold text-ink tabular-nums leading-none" style={{ fontSize: 'clamp(72px, 12vw, 132px)', letterSpacing: '-0.04em' }}>404</div>
          <p className="body mt-3 max-w-[44ch] mx-auto text-[14.5px]">Check the address, or return to a known space. Everything you configured is still where you left it.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <NeuButton to="/" primary>Back home</NeuButton>
            <NeuButton to="/dashboard">Control Center</NeuButton>
          </div>
          <div className="mt-8 micro">POPULAR · <Link to="/devices" className="underline hover:text-ink">DEVICES</Link> · <Link to="/journal" className="underline hover:text-ink">JOURNAL</Link> · <Link to="/contact" className="underline hover:text-ink">CONTACT</Link></div>
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

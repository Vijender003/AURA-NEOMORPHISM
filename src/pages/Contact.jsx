import { useState } from 'react';
import { ChapterHead, NeuButton, Divider } from '../components/layout/ui';

const inputCls = 'w-full elev-recessed-sm rounded-[14px] px-4 min-h-[52px] bg-transparent text-[14.5px] font-medium text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-active/50';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 700);
  };
  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[860px] mx-auto">
        <ChapterHead eyebrow="CONTACT" title="Let's design your environment."
          lede="Homes · studios · offices · hotels. We reply within one working day."
          meta="RESPONSE < 24 H · NDA ON REQUEST" />
        <div className="mt-4 elev-raised rounded-[22px] p-6 sm:p-9">
          {sent ? (
            <div className="elev-recessed rounded-[18px] px-6 py-10 text-center" role="status">
              <div className="w-14 h-14 mx-auto rounded-full elev-raised grid place-items-center" aria-hidden="true">
                <span className="w-6 h-6 rounded-full bg-ink grid place-items-center text-volt text-[13px] font-bold">✓</span>
              </div>
              <h2 className="h3 text-ink mt-4">Received.</h2>
              <p className="body text-[14px] mt-2">An environment architect will reach out shortly. The room is already listening.</p>
            </div>
          ) : (
            <form className="grid gap-3.5" onSubmit={submit}>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <label className="grid gap-1.5"><span className="micro !text-muted">NAME *</span><input required placeholder="Vijender" className={inputCls} autoComplete="name" /></label>
                <label className="grid gap-1.5"><span className="micro !text-muted">EMAIL *</span><input required type="email" placeholder="you@space.com" className={inputCls} autoComplete="email" /></label>
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <label className="grid gap-1.5"><span className="micro !text-muted">COMPANY / RESIDENCE</span><input placeholder="Atelier / Home" className={inputCls} autoComplete="organization" /></label>
                <label className="grid gap-1.5"><span className="micro !text-muted">ENVIRONMENT TYPE</span>
                  <select className={inputCls} defaultValue="Home"><option>Home</option><option>Studio</option><option>Office</option><option>Hospitality</option><option>Other</option></select>
                </label>
              </div>
              <label className="grid gap-1.5"><span className="micro !text-muted">MESSAGE *</span>
                <textarea required rows={5} placeholder="Tell us about your space, light, noise, air — and how you want to feel in it." className="w-full elev-recessed-sm rounded-[14px] px-4 py-3.5 bg-transparent text-[14.5px] text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-active/50 resize-y min-h-[128px]" />
              </label>
              <NeuButton type="submit" primary className="w-full min-h-[54px]" disabled={sending}>{sending ? 'Sending…' : 'Start a conversation →'}</NeuButton>
              <p className="micro text-center">LOCAL-FIRST · NO SPAM · UNSUBSCRIBE ANYTIME</p>
            </form>
          )}
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

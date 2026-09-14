import { Link, useParams } from 'react-router-dom';
import { posts } from '../data';
import { Divider } from '../components/layout/ui';
import NotFound from './NotFound';

export default function JournalArticle() {
  const { id } = useParams();
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) return <NotFound />;
  const post = posts[idx];
  const prev = posts[(idx - 1 + posts.length) % posts.length];
  const next = posts[(idx + 1) % posts.length];

  return (
    <div className="px-3 sm:px-5">
      <div className="max-w-[860px] mx-auto">
        <Link to="/journal" className="micro hover:text-ink transition-colors">← ALL ESSAYS</Link>
        <div className="mt-4 elev-raised rounded-[28px] px-6 sm:px-10 py-8 sm:py-11">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="volt-dot" aria-hidden="true" />
            <span className="micro !text-active font-bold">{post.cat}</span>
            <span className="micro">{post.read} · {post.date} · {post.author.toUpperCase()}</span>
          </div>
          <h1 className="h-display-sm mt-4 text-balance">{post.title}</h1>
          <p className="body mt-4 text-[16.5px] max-w-[58ch] border-l-2 border-active/50 pl-5 italic">{post.excerpt}</p>
        </div>
        <article className="mt-4 elev-raised rounded-[22px] px-6 sm:px-10 py-8 sm:py-10">
          {post.body.map((para, i) => (
            <p key={i} className={`text-[15.5px] leading-[1.8] ${i === 0 ? 'text-ink font-medium text-[16.5px]' : 'text-muted'} ${i > 0 ? 'mt-5' : 'mt-1'}`}>{para}</p>
          ))}
          <div className="rule my-8" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full elev-recessed-sm grid place-items-center font-extrabold text-[13px] text-ink" aria-hidden="true">A</span>
            <div><div className="text-[13.5px] font-bold text-ink">{post.author}</div><div className="micro">ENVIRONMENT · DESIGN · INTELLIGENCE</div></div>
          </div>
        </article>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <Link to={`/journal/${prev.id}`} className="tactile elev-raised rounded-[18px] px-5 py-4 block"><span className="micro">← PREVIOUS</span><span className="block font-bold text-[14px] text-ink mt-1 leading-snug">{prev.title}</span></Link>
          <Link to={`/journal/${next.id}`} className="tactile elev-raised rounded-[18px] px-5 py-4 block text-right"><span className="micro">NEXT →</span><span className="block font-bold text-[14px] text-ink mt-1 leading-snug">{next.title}</span></Link>
        </div>
        <div className="mt-8"><Divider /></div>
      </div>
    </div>
  );
}

import { BriefcaseBusiness, GitBranch, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 bg-black/20">
      <div className="page-width grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div><a href="#top" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-sun to-berry"><Sparkles size={18} /></span><span className="font-display text-lg font-bold">stacksmith<span className="text-sun">.</span></span></a><p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">A little workspace for making better technology decisions, one tool at a time.</p></div>
        <div className="flex items-center gap-4 text-slate-500"><a href="https://github.com" aria-label="GitHub" className="transition hover:text-white"><GitBranch size={18} /></a><a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-white"><BriefcaseBusiness size={18} /></a><span className="text-xs">Built for curious builders · 2025</span></div>
      </div>
    </footer>
  )
}

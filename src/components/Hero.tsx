import { ArrowDown, ArrowRight, Layers3 } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="hero-pattern relative overflow-hidden border-b border-white/10">
      <div className="page-width relative grid min-h-[560px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sun"><span className="h-1.5 w-1.5 rounded-full bg-sun" /> The developer's workbench</p>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Build a stack<br /><span className="gradient-text">that feels like you.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">Explore the tools shaping modern product teams. Pick your favorites, compare your choices, and leave with a stack ready to build something remarkable.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#explore" className="btn border-0 bg-gradient-to-r from-sun to-berry px-6 text-white shadow-lg shadow-berry/20 hover:brightness-110">Start building <ArrowRight size={17} /></a>
            <a href="#how-it-works" className="btn btn-ghost text-slate-300 hover:bg-white/5 hover:text-white">See how it works <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="relative hidden min-h-[390px] lg:block" aria-hidden="true">
          <div className="absolute right-4 top-8 h-72 w-72 rounded-full bg-berry/25 blur-3xl" />
          <div className="absolute bottom-5 left-6 h-48 w-48 rounded-full bg-sun/20 blur-3xl" />
          <div className="relative mx-auto mt-4 max-w-sm rotate-2 rounded-3xl border border-white/15 bg-white/[.07] p-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between text-xs text-slate-400"><span>YOUR NEXT PROJECT</span><span className="text-sun">01 / 04</span></div>
            <div className="rounded-2xl bg-gradient-to-br from-violet via-berry to-sun p-px"><div className="rounded-2xl bg-ink/90 p-6"><Layers3 size={30} className="mb-12 text-sun" /><p className="font-display text-2xl font-bold text-white">A thoughtful stack<br />makes room for<br /><span className="text-sun">better ideas.</span></p></div></div>
            <div className="mt-5 flex items-center justify-between text-xs text-slate-400"><span>8 tools curated</span><span className="flex gap-1"><i className="h-1.5 w-6 rounded-full bg-sun" /><i className="h-1.5 w-1.5 rounded-full bg-white/20" /><i className="h-1.5 w-1.5 rounded-full bg-white/20" /></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Check, Plus } from 'lucide-react'
import type { Technology } from '../types'

type TechnologyCardProps = {
  technology: Technology
  isSelected: boolean
  onToggle: (technology: Technology) => void
}

export function TechnologyCard({ technology, isSelected, onToggle }: TechnologyCardProps) {
  return (
    <article className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[.08]">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl" style={{ backgroundColor: technology.accent, opacity: 0.2 }} />
      <div className="relative flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-black/20 p-2.5">
          <img src={technology.icon} alt={`${technology.name} logo`} className="h-full w-full object-contain" />
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">{technology.category}</span>
      </div>
      <div className="relative mt-7 flex-1">
        <h3 className="font-display text-xl font-bold text-white">{technology.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{technology.description}</p>
      </div>
      <button onClick={() => onToggle(technology)} className={`btn btn-sm relative mt-5 w-full border-0 ${isSelected ? 'bg-emerald-400/15 text-emerald-300 hover:bg-emerald-400/25' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        {isSelected ? <><Check size={15} /> Added to stack</> : <><Plus size={15} /> Add to stack</>}
      </button>
    </article>
  )
}

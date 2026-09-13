import { ArrowUpRight, Layers3, Trash2 } from 'lucide-react'
import type { Technology } from '../types'

type StackSidebarProps = {
  stack: Technology[]
  onRemove: (technology: Technology) => void
}

export function StackSidebar({ stack, onRemove }: StackSidebarProps) {
  return (
    <aside id="your-stack" className="h-fit rounded-2xl border border-white/10 bg-white/[.06] p-5 lg:sticky lg:top-28">
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sun"><Layers3 size={18} /><span className="text-xs font-bold uppercase tracking-[0.18em]">Your stack</span></div>
          <h2 className="font-display text-2xl font-bold text-white">Make it yours.</h2>
        </div>
        <span className="grid h-8 min-w-8 place-items-center rounded-full bg-sun px-2 text-sm font-bold text-ink">{stack.length}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">Your selected tools will live here. Start with the essentials, then add what makes your workflow sing.</p>
      <div className="my-5 h-px bg-white/10" />
      {stack.length === 0 ? (
        <div className="rounded-xl border border-dashed border-white/15 px-5 py-8 text-center">
          <Layers3 className="mx-auto mb-3 text-slate-500" size={24} />
          <p className="text-sm font-semibold text-slate-300">Your stack is empty</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Choose a tool from the catalog to get started.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {stack.map((technology) => (
            <li key={technology.id} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/15 p-3">
              <img src={technology.icon} alt="" className="h-7 w-7 object-contain" />
              <span className="flex-1 text-sm font-semibold text-slate-200">{technology.name}</span>
              <button className="btn btn-ghost btn-xs text-slate-500 hover:bg-rose-400/10 hover:text-rose-300" onClick={() => onRemove(technology)} aria-label={`Remove ${technology.name}`}><Trash2 size={14} /></button>
            </li>
          ))}
        </ul>
      )}
      <button className="btn mt-5 w-full border border-white/15 bg-transparent text-slate-300 hover:border-sun hover:bg-sun/10 hover:text-white" disabled={stack.length === 0}>View stack details <ArrowUpRight size={16} /></button>
    </aside>
  )
}

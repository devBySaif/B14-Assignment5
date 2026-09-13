import { X } from 'lucide-react'
import type { Technology } from '../types'

type StackSidebarProps = {
  stack: Technology[]
  onRemove: (technology: Technology) => void
  onRemoveAll: () => void
}

export function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  return (
    <aside id="your-stack" className="stack-sidebar">
      <h2>Your Stack</h2><p className="stack-count">{stack.length ? `${stack.length} Technologies Selected` : 'No technologies selected yet.'}</p>
      {stack.length === 0 ? (
        <div className="empty-stack">Your stack is empty.</div>
      ) : (
        <ul className="selected-list">
          {stack.map((technology) => (
            <li key={technology.id}><img src={technology.icon} alt="" /><span><b>{technology.name}</b><small>{technology.category}</small></span><button onClick={() => onRemove(technology)} aria-label={`Remove ${technology.name}`}><X size={17} /></button>
            </li>
          ))}
        </ul>
      )}
      <button className="remove-all" disabled={stack.length === 0} onClick={onRemoveAll}>Remove All</button>
    </aside>
  )
}

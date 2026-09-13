import { useState } from 'react'
import { Check, Plus, Star } from 'lucide-react'
import type { Technology } from '../types'

type TechnologyCardProps = {
  technology: Technology
  isSelected: boolean
  onToggle: (technology: Technology) => void
}

export function TechnologyCard({ technology, isSelected, onToggle }: TechnologyCardProps) {
  const [iconFailed, setIconFailed] = useState(false)

  return (
    <article className="technology-card">
      <div className="card-top"><div className="tech-icon">{iconFailed ? <span className="tech-icon-fallback" style={{ backgroundColor: technology.accent }}>{technology.name.slice(0, 2)}</span> : <img src={technology.icon} alt={`${technology.name} logo`} onError={() => setIconFailed(true)} />}</div>{technology.badge && <span className="tech-badge">{technology.badge}</span>}</div>
      <div className="card-content">
        <h3>{technology.name}</h3>
        <p>{technology.description}</p>
      </div>
      <div className="card-meta"><span>{technology.category}</span><span>{technology.difficulty === 'Beginner' ? 'Beginner-Friendly' : technology.difficulty}</span><span className="rating"><Star size={9} fill="currentColor" /> {technology.rating}</span>
      </div>
      <button onClick={() => onToggle(technology)} disabled={isSelected} className={`card-button ${isSelected ? 'selected' : ''}`}>
        {isSelected ? <><Check size={13} /> Added to Stack</> : <><Plus size={13} /> Add to Stack</>}
      </button>
    </article>
  )
}

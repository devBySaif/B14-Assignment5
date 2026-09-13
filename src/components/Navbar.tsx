import { Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

type NavbarProps = {
  stackCount: number
}

export function Navbar({ stackCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <div className="page-width flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sun to-berry shadow-lg shadow-berry/20">
            <Sparkles size={20} strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">stacksmith<span className="text-sun">.</span></span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex" aria-label="Main navigation">
          <a className="transition hover:text-white" href="#explore">Explore</a>
          <a className="transition hover:text-white" href="#how-it-works">How it works</a>
          <a className="transition hover:text-white" href="#about">About</a>
          <a href="#your-stack" className="relative rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-sun/70 hover:bg-white/5">
            Your stack
            {stackCount > 0 && <span className="ml-2 rounded-full bg-sun px-1.5 py-0.5 text-xs text-ink">{stackCount}</span>}
          </a>
        </nav>

        <button className="btn btn-ghost btn-square text-white md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav className="border-t border-white/10 bg-ink px-6 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="page-width flex flex-col gap-5 text-sm font-semibold text-slate-300">
            <a href="#explore" onClick={closeMenu}>Explore</a>
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#your-stack" onClick={closeMenu}>Your stack <span className="text-sun">({stackCount})</span></a>
          </div>
        </nav>
      )}
    </header>
  )
}

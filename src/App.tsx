import './App.css'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import technologiesData from './data/technologies.json'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LoadingState } from './components/LoadingState'
import { Navbar } from './components/Navbar'
import { StackSidebar } from './components/StackSidebar'
import { TechnologyCard } from './components/TechnologyCard'
import type { Technology } from './types'

const technologies = technologiesData as Technology[]

function App() {
  const [stack, setStack] = useState<Technology[]>([])
  const [activeCategory, setActiveCategory] = useState('All tools')
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650)
    return () => window.clearTimeout(timer)
  }, [])

  const categories = ['All tools', ...new Set(technologies.map((technology) => technology.category))]
  const visibleTechnologies = technologies.filter((technology) => {
    const matchesCategory = activeCategory === 'All tools' || technology.category === activeCategory
    const matchesQuery = technology.name.toLowerCase().includes(query.toLowerCase()) || technology.description.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  const toggleTechnology = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      setStack((current) => current.filter((item) => item.id !== technology.id))
      toast.info(`${technology.name} removed from your stack.`)
    } else {
      setStack((current) => [...current, technology])
      toast.success(`${technology.name} added to your stack!`)
    }
  }

  const removeTechnology = (technology: Technology) => {
    setStack((current) => current.filter((item) => item.id !== technology.id))
    toast.info(`${technology.name} removed from your stack.`)
  }

  return (
    <div id="top" className="min-h-screen bg-ink text-white">
      <Navbar stackCount={stack.length} />
      <Hero />
      <main id="explore" className="page-width py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sun">The catalog</p><h2 className="font-display text-4xl font-bold tracking-tight text-white">Tools worth knowing.</h2><p className="mt-3 max-w-xl text-slate-400">A considered collection of tools for designing, building, shipping, and growing modern products.</p></div>
          <label className="input input-bordered flex w-full max-w-xs items-center gap-2 border-white/15 bg-white/5 text-slate-300"><svg className="h-4 w-4 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg><input type="search" className="grow bg-transparent text-sm" placeholder="Search tools" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        </div>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Technology categories">
          {categories.map((category) => <button key={category} role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} className={`btn btn-sm whitespace-nowrap rounded-full border-0 ${activeCategory === category ? 'bg-white text-ink' : 'bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white'}`}>{category}</button>)}
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          {isLoading ? <LoadingState /> : <div className="grid gap-4 sm:grid-cols-2">{visibleTechnologies.map((technology) => <TechnologyCard key={technology.id} technology={technology} isSelected={stack.some((item) => item.id === technology.id)} onToggle={toggleTechnology} />)}{visibleTechnologies.length === 0 && <div className="col-span-2 rounded-2xl border border-dashed border-white/15 p-10 text-center text-slate-400">No tools match that search yet.</div>}</div>}
          <StackSidebar stack={stack} onRemove={removeTechnology} />
        </div>
      </main>
      <section id="how-it-works" className="border-y border-white/10 bg-white/[.03]"><div className="page-width grid gap-8 py-16 md:grid-cols-3"><div><span className="text-4xl font-display font-bold text-sun">01</span><h3 className="mt-4 font-display text-xl font-bold">Explore with intent</h3><p className="mt-2 text-sm leading-6 text-slate-400">Browse a focused catalog built around the work developers actually do.</p></div><div><span className="text-4xl font-display font-bold text-berry">02</span><h3 className="mt-4 font-display text-xl font-bold">Curate your picks</h3><p className="mt-2 text-sm leading-6 text-slate-400">Add tools to your stack and see your thinking take shape in real time.</p></div><div><span className="text-4xl font-display font-bold text-violet">03</span><h3 className="mt-4 font-display text-xl font-bold">Build with confidence</h3><p className="mt-2 text-sm leading-6 text-slate-400">Leave with a clear starting point for your next product or side project.</p></div></div></section>
      <Footer />
      <ToastContainer theme="dark" position="bottom-right" autoClose={2500} toastClassName="!bg-surface !text-white" />
    </div>
  )
}

export default App

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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650)
    return () => window.clearTimeout(timer)
  }, [])

  const visibleTechnologies = technologies

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

  const removeAll = () => {
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div id="top" className="site-shell">
      <Navbar />
      <Hero />
      <main id="explore" className="page-width catalog-section">
        <div className="section-heading"><h2>Explore the <span>Technologies</span></h2><p>Pick one technology per category to build your ideal stack.</p></div>
        <div className="catalog-layout">
          {isLoading ? <LoadingState /> : <div className="technology-grid">{visibleTechnologies.map((technology) => <TechnologyCard key={technology.id} technology={technology} isSelected={stack.some((item) => item.id === technology.id)} onToggle={toggleTechnology} />)}{visibleTechnologies.length === 0 && <div className="no-results">No tools match that search yet.</div>}</div>}
          <StackSidebar stack={stack} onRemove={removeTechnology} onRemoveAll={removeAll} />
        </div>
      </main>
      <Footer />
      <ToastContainer theme="dark" position="bottom-right" autoClose={2500} toastClassName="!bg-surface !text-white" />
    </div>
  )
}

export default App

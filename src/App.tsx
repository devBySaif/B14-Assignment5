import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div id="top" className="min-h-screen bg-ink text-white">
      <Navbar stackCount={0} />
      <Hero />
    </div>
  )
}

export default App

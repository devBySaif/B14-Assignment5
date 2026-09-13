import { ArrowRight } from 'lucide-react'
import bannerStack from '../assets/banner-stack.png'

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="page-width hero-inner">
        <div className="hero-copy"><h1>Build Your Ideal<br /><span>Development Stack</span></h1><p>Explore frontend, backend, database, and tooling options.<br className="desktop-only" /> Compare side by side, and put together the stack that fits your next project.</p><div className="hero-actions"><a href="#explore" className="primary-button">Explore Technologies <ArrowRight size={13} /></a><a href="#how-it-works" className="secondary-button">Learn More</a></div></div>
        <div className="hero-art"><img src={bannerStack} alt="Colorful layered development stack illustration" /></div>
      </div>
    </section>
  )
}

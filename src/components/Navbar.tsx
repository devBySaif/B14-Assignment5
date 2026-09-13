import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoText from '../assets/logo-text.png'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="page-width nav-inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <img src={logoText} alt="Dev Stack" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a className="active" href="#top">Home</a><a href="#explore">Technologies</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>

        <div className="account-actions"><a href="#signin">Sign In</a><a href="#signup" className="signup">Sign Up</a></div>
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="page-width">
            <a href="#top" onClick={closeMenu}>Home</a><a href="#explore" onClick={closeMenu}>Technologies</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  )
}

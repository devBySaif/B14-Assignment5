import logoText from '../assets/logo-text.png'

export function Footer() {
  return (
    <footer id="about" className="site-footer"><div className="page-width footer-grid">
        <div className="footer-brand"><a href="#top"><img src={logoText} alt="Dev Stack" /></a><p>Curated tools, technologies, and resources for developers building modern software.</p><div className="social-links"><a href="#github">GitHub</a><a href="#twitter">Twitter</a><a href="#linkedin">LinkedIn</a></div></div>
        <div className="footer-column"><b>PRODUCT</b><a href="#top">Home</a><a href="#explore">Technologies</a><a href="#projects">Projects</a></div>
        <div className="footer-column"><b>COMPANY</b><a href="#about">About</a><a href="#contact">Contact</a><a href="#careers">Careers</a></div>
        <div className="footer-column"><b>LEGAL</b><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></div>
      </div>
      <div className="page-width footer-bottom"><span>© 2026 DevStack. All rights reserved.</span><span>Privacy &nbsp;&nbsp; Terms</span></div>
    </footer>
  )
}

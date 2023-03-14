import ScrollToLink from "./ScrollToLink.js"

export default function Navbar() {

  return (
    <nav className='navbar-container'>
      <ul className="navbar-list">
        <li><ScrollToLink 
              className='scrollto-link' 
              id='intro-section'>
                Home
            </ScrollToLink></li>
        <li><ScrollToLink
              className='scrollto-link'
              id='about-section'>
                About me
            </ScrollToLink></li>
        <li><ScrollToLink 
              className='scrollto-link'
              id='projects-section'>
                Projects
            </ScrollToLink></li>
        <li><ScrollToLink 
              className='scrollto-link'
              id='skills-section'>
                Skills
              </ScrollToLink></li>
        <li><ScrollToLink 
              className='scrollto-link'
              id='contact-section'>
                Contact Me
            </ScrollToLink></li>
      </ul>

      <ul className="navbar-list" id='right-nav-wrapper'>
        <a href='https://github.com/cporter1' 
          target='_blank' 
          rel="noreferrer" 
          className="github-icon"/>
        <a className="linkedin-icon"
          href='https://linkedin.com/in/colin-porter-44a025174' 
          target='_blank' 
          rel="noreferrer"/>
      </ul>
    </nav>
  )
}
import ScrollToLink from "./ScrollToLink.js"

export default function Navbar() {

    return (
        <nav className='navbar-container'>
            <h1>CAP</h1>
            <ul className="navbar-list">
                <li><ScrollToLink id='intro-section'   >Home      </ScrollToLink></li>
                <li><ScrollToLink id='about-section'   >About Me  </ScrollToLink></li>
                <li><ScrollToLink id='projects-section'>Projects  </ScrollToLink></li>
                <li><ScrollToLink id='skills-section'  >Skills    </ScrollToLink></li>
                <li><ScrollToLink id='contact-section' >Contact Me</ScrollToLink></li>
            </ul>
        </nav>
    )
}
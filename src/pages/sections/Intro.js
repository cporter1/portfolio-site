import ShapesAnimimation from "@/pages/components/ShapesAnimimation"
import ScrollToLink from "@/pages/components/ScrollToLink"

export default function Intro() {
  return (
    <div id='intro-section' className="intro-container" style={{paddingRight: '2vw'}}>
      <ShapesAnimimation/>

      <h1>Welcome, my name is Colin Porter.</h1>
      <h2>
        <i className="intro-description">
          IT Specialist & Software Engineer
        </i>
      </h2>

      <div className="intro-options-wrapper">
        <ScrollToLink id='about-section'   className='scrollto-resume'   >Resume</ScrollToLink>
        <ScrollToLink id='contact-section' className='scrollto-contactme'>Contact me</ScrollToLink>
      </div>
    </div>
  )
}
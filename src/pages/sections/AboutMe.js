const resume = require('@/images/resume.jpeg')

import soccer from '@/images/soccer-ball.svg'
import compass from '@/images/compass.svg'
import computer from '@/images/computer.svg'

import Image from 'next/image'

export default function AboutMe(props) {

  function downloadResume() {

    const element = document.createElement("a");
    element.href = resume.default.src
    element.download = 'cporterresume.jpeg'

    document.body.appendChild(element);

    element.click();
  }

  return (
    <section id='about-section' className="about-container">
      <h2>ABOUT ME</h2>
      <div className="about-grid-wrapper">
        <div className="about-column1-container">
          <div className='paragraph-wrapper'>
            <p id='top'>
              Hello, my name is Colin Porter and I am a full stack software engineer with a focus in frontend.
            </p>
            <p>I have 4+ years of experience building and configuring IOS, Windows, and Linux machines.</p>
            <p>I have a passion for producing dynamic applications that put the user experience at the forefront of development.</p>
            <p>I am currently job hunting, send me a message if you think I&apos;d be a good fit on your company.</p>
            <h3><i>A little bit more...</i></h3>
            <p>I love playing board games with friends, going hiking & backpacking, and everything about soccer!</p>
            <div className='icon-wrapper'>
              <Image className='hobby-icon' src={computer} alt=''/>
              <Image className='hobby-icon' src={compass} alt=''/>
              <Image className='hobby-icon' id='soccer' src={soccer} alt=''/>
            </div>
          </div>
        </div>
        <div className="about-column2-container">
          <div className='resume-wrapper'>
            <Image className='resume' src={resume} alt=''/>
            <div className='download-button-wrapper'>
              <div onClick={downloadResume} className='resume-download-button'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
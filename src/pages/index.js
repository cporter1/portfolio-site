import Head from 'next/head'
import { Inter } from 'next/font/google'
import { createRef, use, useRef } from 'react'

import Intro from '@/Sections/Intro'
import AboutMe from '@/Sections/AboutMe'
import Projects from '../Sections/Projects'
import Skills from '@/Sections/Skills'
import ContactMe from '@/Sections/ContactMe'

import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const refObj = {
    introRef: createRef(),
    aboutRef: createRef(),
    projectRef: createRef(),
    contactRef: createRef(),
    skillsRef: createRef(),
  }

  return (
    <>
      <Head>
        <title>Colin&apos;s Place</title>
        <meta name="description" content="Colin Porter's portfolio-site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main-container'>
        <Navbar refObj={refObj}/>

        <Intro     />
        <AboutMe   />
        <Projects  />
        <Skills    />
        <ContactMe /> 
      </main>
    </>
  )
}

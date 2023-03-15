import Head from 'next/head'
import { Inter } from 'next/font/google'
import { createRef, use, useRef } from 'react'

import Intro from '@/pages/sections/Intro'
import AboutMe from '@/pages/sections/AboutMe'
import Projects from './sections/Projects'
import Skills from '@/pages/sections/Skills'
import ContactMe from '@/pages/sections/ContactMe'

import Navbar from './components/Navbar'


export default function Home() {

  return (
    <>
      <Head>
        <title>Colin&apos;s Place</title>
        <meta name="description" content="Colin Porter's portfolio-site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main-container'>

        <Navbar    />

        <Intro     />
        <AboutMe   />
        <Projects  />
        <Skills    />
        <ContactMe /> 
      </main>
    </>
  )
}

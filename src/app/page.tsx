import React from 'react'
import Hero from './component/hero'
import About from './about/page'
import Contact from './contact/page'
import Skills from './skills/page'
import Project from './project/page'


const Home = () => {
  return (
    <div className='text-3xl text-green-300'>
     
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  )
}

export default Home

"use client";
import Projects from './projects'
import Skills from './skills'
import icon from './Assets/avatar.png'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'

export default function App() {
  const [DarkMode, setDarkMode] = useState(false);
  return (
    <div className="bg-gray-900 text-white">
      <section className='px-10 md:px-20 lg:px-40'>
        <nav className='navbar py-10 flex items-center justify-between'>
          <h1 className='text-xl font-burtons'>developedbyoz</h1>
          <ul className='flex items-center'>
            <li className='cursor-pointer'><BsFillMoonStarsFill onClick={() => setDarkMode(!DarkMode)} /></li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded'><a href="/">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-teal-500 py-2 text-4xl font-medium md:text-5xl lg:text-6xl dark:text-teal-900'>Oussama Ouazize</h2>
          <h3 className='py-2 text-2xl md:text-3xl lg:text-4xl'>Full-Stack Developer</h3>
          <p className='py-5 leading-8 text-gray-500 text-md md:text-xl max-w-xl mx-auto'>Freelancer providing services for programming content needs. Join me down below and let's get cracking!</p>

          <div className='flex cursor-pointer justify-center text-5xl gap-16 py-3 from-slate-50'>
            <a href="https://github.com/oouazize"><AiFillGithub /></a>
            <a href="https://www.instagram.com/0ussama_0z/"><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/in/oussama-ouazize-6839091b8/"><AiFillLinkedin/></a>
          </div>

          <div className='w-80 h-80 mt-20 mx-auto'>
            <div className='absolute bg-gradient-to-t from-slate-50 rounded-full w-80 h-80 mx-auto'></div>
            <img src={icon} alt=""/>
          </div>
        </div>
      </section>
    <Projects />
    <Skills />
    </div>
  )
}

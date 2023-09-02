import React ,{ Suspense, useEffect, useState} from 'react'
import {BrowserRouter} from "react-router-dom"
import Navbar from './components/navbar'
import {Loader} from "@react-three/drei"
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Project from './components/Projects/Project'
import ProjectMobile from './components/Projects/ProjectMobile'
import Technologies from './components/Technologies/Technologies'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
function App() {
  const [isDeskTop,setIsDeskTop] = useState(window.innerWidth > 786)

  useEffect(()=>{
    const handleSize = () =>{
      setIsDeskTop(window.innerWidth > 768)
    }
    window.addEventListener('resize', handleSize)
    return ()=>{
      window.removeEventListener('resize', handleSize)
    }
  })
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Suspense fallback={null}>
          <Hero></Hero>
        </Suspense>
        <Loader></Loader>
        <About></About>
        {isDeskTop ? (
          <Suspense fallback={null} >
          <Project></Project>
          </Suspense>
        ):(
          <ProjectMobile></ProjectMobile>
        )}
        <Technologies></Technologies>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </BrowserRouter>
    </>
  )
}

export default App

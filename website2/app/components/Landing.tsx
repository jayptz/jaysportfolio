'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Globe } from "@/components/magicui/globe";
import HamburgerMenu from './HamburgerMenu'
import SolarSystem from './SolarSystem'
import SocialLinks from './SocialLinks'
import MobileNav from './MobileNav'



export default function Landing() {
  const [pandaGif, setPandaGif] = useState('/panda.gif')
  
  useEffect(() => {
    const gifs = [
      '/panda.gif',
      '/panda2.gif',
      '/panda3.gif',
      '/panda4.gif',
      '/panda5.gif',
    ]
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)]
    setPandaGif(randomGif)
  }, [])


  return (
    <main className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Solar System Background - Always visible */}
      <div className="absolute inset-0 -z-20" style={{ border: '2px solid blue', backgroundColor: 'rgba(0,255,0,0.3)' }}>
        <div style={{ color: 'white', fontSize: '24px', padding: '20px' }}>Solar System Container</div>
        <SolarSystem />
      </div>
      
      <div className="absolute inset-0 flex justify-around opacity-20 -z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-white rounded-lg h-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      <motion.div
        className="w-full h-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
            {/* Welcome text and panda */}
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="mb-4 text-3xl font-bold text-white z-10">
                Jay Patel              
              </h1>
              <motion.img
                src={pandaGif}
                alt="Random Panda"
                className="w-40 h-auto mx-auto drop-shadow-xl"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />
            </div>

            {/* Hamburger Menu - positioned at top right */}
            <HamburgerMenu />

            {/* Social Links - positioned at absolute bottom */}
            <div className="absolute-bottom ">
              <SocialLinks />
            </div>
          </motion.div>
    </main>
  )
}

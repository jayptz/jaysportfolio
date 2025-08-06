'use client'
import { motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import { Globe } from "@/components/magicui/globe";
import PandaDock from './PandaDock'
import SolarSystem from './SolarSystem'
import SocialLinks from './SocialLinks'



export default function Landing() {
  const [introStep, setIntroStep] = useState<'hi' | 'welcome' | 'main'>('hi')
  const [shouldShowIntro, setShouldShowIntro] = useState(true)
  const pandaGif = useMemo(() => {
    const gifs = [
      '/panda.gif',
      '/panda2.gif',
      '/panda3.gif',
      '/panda4.gif',
      '/panda5.gif',
    ]
    const index = Math.floor(Math.random() * gifs.length)
    return gifs[index]
  }, [])
  useEffect(() => {
    // Check if intro has been seen in this session (client-side only)
    const hasSeenIntro = typeof window !== 'undefined' && sessionStorage.getItem('introSeen') === 'true'
    
    if (hasSeenIntro) {
      // Skip intro, go directly to main content
      setShouldShowIntro(false)
      setIntroStep('main')
      return
    }

    // First time visit - mark as seen and run intro sequence
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('introSeen', 'true')
    }
    
    setShouldShowIntro(true)
    const hiTimer = setTimeout(() => setIntroStep('welcome'), 2500) 
    const welcomeTimer = setTimeout(() => setIntroStep('main'), 7500) 

    return () => {
      clearTimeout(hiTimer)
      clearTimeout(welcomeTimer)
    }
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

      <AnimatePresence mode="wait">
        {shouldShowIntro && introStep === 'hi' && (
          <motion.div
            key="hi"
            className="text-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-extrabold text-white">hi there!</h1>
          </motion.div>
        )}

        {shouldShowIntro && introStep === 'welcome' && (
          <motion.div
            key="welcome"
            className="relative text-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            
          >
            <motion.div 
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
              >
            <div className="relative w-[min(80vw,600px)] h-[min(80vh,600px)] flex items-center justify-center">
              <Globe className="!relative !w-full !h-full !max-w-none text-gray-300" />
            </div>
            </motion.div>
            <h2 className="text-3xl font-bold text-white">welcome to Jay&apos;s world</h2>
          </motion.div>

        )}
        

        {introStep === 'main' && (
          
          <motion.div
            key="main"
            className="flex flex-col items-center justify-center w-full relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb- text-3xl font-bold text-white z-10">
              welcome to Jay&apos;s world
            </h1>
            <motion.img
              src={pandaGif}
              alt="Random Panda"
              className="w-40 h-auto mx-auto drop-shadow-xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
          </motion.div>
        )}


      </AnimatePresence>
      
      {introStep === 'main' && (
        <>
          {/* Social Links - Only show after introduction */}
          <SocialLinks />
          <div className="z-10"><PandaDock /></div>
        </>
      )}
    </main>
  )
}

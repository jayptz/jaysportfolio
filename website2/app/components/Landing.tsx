'use client'
import { motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, useMemo } from 'react'
import { Globe } from "@/components/magicui/globe";



export default function Landing() {
  const [introStep, setIntroStep] = useState<'hi' | 'welcome' | 'main'>('hi')
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
    const hiTimer = setTimeout(() => setIntroStep('welcome'), 2500) 
    const welcomeTimer = setTimeout(() => setIntroStep('main'), 7500) 

    return () => {
      clearTimeout(hiTimer)
      clearTimeout(welcomeTimer)
    }
  }, [])


  return (
    <main className="relative min-h-screen bg-green-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex justify-around opacity-20 -z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-green-800 rounded-lg h-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {introStep === 'hi' && (
          <motion.div
            key="hi"
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-extrabold text-green-900">hi there!</h1>
          </motion.div>
        )}

        {introStep === 'welcome' && (
          <motion.div
            key="welcome"
            className="relative text-center"
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
              <Globe className="!relative !w-full !h-full !max-w-none text-green-300" />
            </div>
            </motion.div>
            <h2 className="text-3xl font-bold text-green-800">welcome to Jay’s world</h2>
          </motion.div>

        )}
        

        {introStep === 'main' && (
          
          <motion.div
            key="main"
            className="flex flex-col items-center justify-center w-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb- text-3xl font-bold text-green-900 z-10">
              Welcome to Jay’s World
            </h1>
            <motion.img
              src={pandaGif}
              alt="Random Panda"
              className="w-40 h-auto mx-auto drop-shadow-xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
            <div className=" bottom-0 flex gap-6 z-10 flex-wrap justify-center w-full pb-4">
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'School', href: '#school' },
                { label: 'Contact Me', href: '#contact' },
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-full border border-green-400 bg-green-100 text-green-900 hover:bg-green-200 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>


          
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

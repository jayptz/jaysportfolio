'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const PANDA_GIFS = ['/panda.gif', '/panda2.gif', '/panda3.gif', '/panda4.gif', '/panda5.gif']

function getRandomPanda() {
  return PANDA_GIFS[Math.floor(Math.random() * PANDA_GIFS.length)]
}

export default function Home() {
  const [pandaGif, setPandaGif] = useState(PANDA_GIFS[0])

  useEffect(() => {
    setPandaGif(getRandomPanda())
  }, [])

  const randomizePanda = () => {
    setPandaGif(getRandomPanda())
  }

  return (
    <div className="min-h-screen bg-background text-foreground grid grid-cols-1 md:grid-cols-[1fr_min(100%,72rem)_1fr]">
      {/* Left section - empty */}
      <div className="hidden md:block" />
      {/* Middle section - all content */}
      <main className="min-w-0 w-full justify-self-center px-6 py-16 space-y-24">
        {/* Hello + About me side by side, then Panda */}
        <section id="hello" className="scroll-mt-20 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
            {/* Left: name + tagline + panda */}
            <div className="text-left flex flex-col items-start">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Jay Patel.</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Research • Code • Deploy
              </p>
              <motion.div
                className="mt-8 cursor-pointer select-none"
                onClick={randomizePanda}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                title="Click for a different panda"
              >
                <Image
                  src={pandaGif}
                  alt="Panda"
                  width={160}
                  height={160}
                  className="w-40 h-auto drop-shadow-lg"
                  unoptimized
                />
              </motion.div>
              <p className="mt-2 text-sm text-muted-foreground">Click the panda for another</p>
            </div>
            {/* Right: about me + bio, right-aligned */}
            <div id="about" className="text-right md:min-w-[20rem] md:max-w-xl flex-1">
              <h2 className="text-2xl font-semibold border-b border-lavender/30 pb-2 inline-block"></h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                sde @{' '}
                <a className="text-blue-700 hover:underline" href="https://www.rbc.com/" target="_blank" rel="noopener noreferrer">RBC</a>
                {' '}cs @{' '}
                <a className="text-purple-500 hover:underline" href="https://www.wlu.ca/" target="_blank" rel="noopener noreferrer">Laurier</a>
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                hi, this is a space showcasing my work, currently an engineer based in toronto.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                i love solving problems since birth, whether i get to break things make things or learn things the feeling of me finding a solution is unbeatable.
                obsessed with trying new things and finding solutions to problems.
              </p>
            </div>
          </div>
        </section>


        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold border-b border-lavender/30 pb-2">employment</h2>
          <ul className="mt-4 space-y-4">
            <li className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-medium">Software Developer @ RBC</h3>
              <p className="text-sm text-muted-foreground mt-1">Jan 2026 - Present · Short description of what you did.</p>
            </li>
            <li className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-medium">Software Developer @ ResDex</h3>
              <p className="text-sm text-muted-foreground mt-1">Aug 2024 - Present · Short description of what you did.</p>
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold border-b border-lavender/30 pb-2">clicking buttons does things?</h2>
          <ul className="mt-4 space-y-4">
            <li className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-medium">Project one</h3>
              <p className="text-sm text-muted-foreground mt-1">Brief description of your project.</p>
            </li>
            <li className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-medium">Project two</h3>
              <p className="text-sm text-muted-foreground mt-1">Brief description of your project.</p>
            </li>
          </ul>
        </section>

        {/* Social media */}
        <section id="social" className="scroll-mt-20 pb-16">
          <h2 className="text-2xl font-semibold border-b border-lavender/30 pb-2">more</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/jay-patel-wlu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-lavender underline underline-offset-4 transition-colors">LinkedIn</a>
            <a href="https://github.com/jayptz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-lavender underline underline-offset-4 transition-colors">GitHub</a>
            <a href="https://x.com/jayptz0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-lavender underline underline-offset-4 transition-colors">Twitter / X</a>
            <a href="/photos" className="text-muted-foreground hover:text-lavender underline underline-offset-4 transition-colors">Photos</a>
          </div>
        </section>
      </main>
      {/* Right section - empty */}
      <div className="hidden md:block" />
    </div>
  );
}

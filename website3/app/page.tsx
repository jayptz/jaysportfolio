'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-2xl px-6 py-16 space-y-24">
        {/* Hello + Panda */}
        <section id="hello" className="scroll-mt-20 min-h-[60vh] flex flex-col justify-center items-center text-center">
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
        </section>

        {/* About me */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold border-b border-lavender/30 pb-2">me</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            sde @<Link href="https://www.rbcroyalbank.com/personal.html">RBC</Link> 
            cs @<Link href="https://www.wlu.ca/">Laurier</Link>
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold border-b border-lavender/30 pb-2">employment</h2>
          <ul className="mt-4 space-y-4">
            <li className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-medium">Software Developer / RBC</h3>
              <p className="text-sm text-muted-foreground mt-1">Jan 2026 - Present · Short description of what you did.</p>
            </li>
            <li className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-medium">Software Developer / ResDex</h3>
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
            <a href="#" className="text-muted-foreground hover:text-lavender underline underline-offset-4 transition-colors">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-lavender underline underline-offset-4 transition-colors">GitHub</a>
            <a href="#" className="text-muted-foreground hover:text-lavender underline underline-offset-4 transition-colors">Twitter / X</a>
            <a href="/photos" className="text-muted-foreground hover:text-lavender underline underline-offset-4 transition-colors">Photos</a>
          </div>
        </section>
      </main>
    </div>
  );
}

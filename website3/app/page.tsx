'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const PANDA_GIFS = ['/panda.gif', '/panda2.gif', '/panda3.gif', '/panda4.gif', '/panda5.gif']

const PROJECTS = [
  { id: '1', title: 'GitWrapped', description: 'GitWrapped is a webapp that allows GitUsers to view their stats.', category: 'Full-Stack', githubUrl: 'https://github.com/jayptz/githubrecap', liveUrl: '' },
  { id: '2', title: 'OrbitShare', description: 'OrbitShare is a decentralized file sharing platform built on blockchain technology for secure, peer-to-peer file distribution.', category: 'Full-Stack', githubUrl: 'https://github.com/jayptz/OrbitShare', liveUrl: 'https://orbitshare.vercel.app/' },
  { id: '3', title: 'ResDex', description: 'A comprehensive mentorship and research platform that connects students with opportunities. Built with React, Node.js, and PostgreSQL.', category: 'Research', githubUrl: 'https://github.com/devp19/ResDex', liveUrl: 'https://www.resdex.ca/' },
  { id: '4', title: 'GroundLink', description: 'GroundLink is a real-time dashboard for managing and tracking fieldwork through live maps and mobile task updates.', category: 'Full-Stack', githubUrl: 'https://github.com/jayptz/GroundLink', liveUrl: '' },
  { id: '5', title: 'ScoreWise', description: 'ScoreWise is a real-time NBA stats tracker that delivers personalized fantasy insights by SMS.', category: 'ML', githubUrl: 'https://github.com/jayptz/ScoreWise', liveUrl: '' },
  { id: '6', title: 'G1 App', description: 'A mobile app that helps Ontario drivers study for the G1 test. Features flashcards, randomized quizzes, and a clean user-friendly interface.', category: 'Full-Stack', githubUrl: '', liveUrl: 'https://play.google.com/store/apps/details?id=com.smitpatel.g1app&pli=1' },
  { id: '7', title: 'Near Fantasy', description: 'A blockchain-based fantasy app built on NEAR Protocol. It enables secure, decentralized team management and gameplay.', category: 'Full-Stack', githubUrl: 'https://github.com/jayptz/NEAR-Fantasy', liveUrl: '' },
  { id: '8', title: 'MyBuddy', description: 'MyBuddy is an AI mental health chatbot that uses GPT-4 to simulate supportive, empathetic conversations in a private and friendly interface.', category: 'AI', githubUrl: 'https://github.com/jayptz/MyBuddy', liveUrl: '' },
]

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
            {PROJECTS.map((project) => (
              <li key={project.id} className="p-4 rounded-lg bg-card border border-border">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">{project.category}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">GitHub</a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">Live</a>
                  )}
                </div>
              </li>
            ))}
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

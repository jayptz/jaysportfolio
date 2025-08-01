'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Landing() {
  return (
    <main className="relative min-h-screen bg-green-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background bamboo stalks */}
      <div className="absolute inset-0 flex justify-around opacity-20 -z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-green-800 rounded-lg h-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Animated Panda GIF */}
      <motion.img
        src="/panda.gif" // Make sure this file is in /public
        alt="Cute Animated Panda"
        className="w-40 h-auto mx-auto drop-shadow-xl"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />

      {/* Greeting */}
      <h1 className="mt-6 text-3xl font-bold text-green-900 z-10">
        Welcome to Jay’s World
      </h1>

      {/* Navigation Buttons */}
      <div className="absolute bottom-12 flex gap-6 z-10 flex-wrap justify-center">
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
    </main>
  )
}

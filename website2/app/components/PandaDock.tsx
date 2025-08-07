'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Dock, DockIcon } from '@/components/magicui/dock'
import { motion } from '@/lib/motion'

export default function PandaDock() {
  const pathname = usePathname()
  
  // Only render on the home route
  if (pathname !== '/') {
    return null
  }

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center gap-50 hidden md:flex">
      {/* Projects Block */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-black/20 border border-white/20 rounded-2xl px-8 py-4 backdrop-blur-sm"
      >
        <Link href="/projects" className="text-white text-base font-medium">
          projects
        </Link>
      </motion.div>
      
      {/* Me Block */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-black/20 border border-white/20 rounded-2xl px-8 py-4 backdrop-blur-sm"
      >
        <Link href="/about" className="text-white text-base font-medium">
          me
        </Link>
      </motion.div>
      
      {/* Experience Block */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-black/20 border border-white/20 rounded-2xl px-8 py-4 backdrop-blur-sm"
      >
        <Link href="/experience" className="text-white text-base font-medium">
          experience
        </Link>
      </motion.div>
    </div>
  )
} 
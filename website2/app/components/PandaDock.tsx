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
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center hidden md:flex">
      <Dock className="bg-black/20 border-white/20" iconSize={200} iconMagnification={85}>
        <DockIcon>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/projects" className="text-white text-base font-medium">
              ProJects
            </Link>
          </motion.div>
        </DockIcon>
        
        <DockIcon>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/about" className="text-white text-base font-medium">
              about me
            </Link>
          </motion.div>
        </DockIcon>
        
        <DockIcon>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/school" className="text-white text-base font-medium">
              school
            </Link>
          </motion.div>
        </DockIcon>
      </Dock>
    </div>
  )
} 
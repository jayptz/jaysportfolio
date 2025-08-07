'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Dock, DockIcon } from '@/components/magicui/dock'

export default function PandaDock() {
  const pathname = usePathname()
  
  // Only render on the home route
  if (pathname !== '/') {
    return null
  }

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center">
      <Dock className="bg-black/20 border-white/20" iconSize={200} iconMagnification={85}>
      <DockIcon>
          <Link href="/projects" className="text-white text-base font-medium">
            ProJects
          </Link>
        </DockIcon>
        
        <DockIcon>
          <Link href="/about" className="text-white text-base font-medium">
            about me
          </Link>
        </DockIcon>
        
        <DockIcon>
          <Link href="/school" className="text-white text-base font-medium">
            school
          </Link>
        </DockIcon>
      </Dock>
    </div>
  )
} 
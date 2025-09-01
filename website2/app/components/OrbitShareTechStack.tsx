'use client'
import React from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { 
  SiElectron, 
  SiReact, 
  SiVite, 
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiGithub
} from 'react-icons/si'
import { FaDesktop, FaKeyboard, FaEye } from 'react-icons/fa'
import Image from 'next/image'

interface TechItem {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  category: string
}

const techItems: TechItem[] = [
  // Desktop & Core
  { name: 'Electron', icon: SiElectron, category: 'Desktop & Core' },
  { name: 'Desktop Capturer', icon: FaDesktop, category: 'Desktop & Core' },
  { name: 'Global Hotkeys', icon: FaKeyboard, category: 'Desktop & Core' },
  { name: 'Screen Capture', icon: FaEye, category: 'Desktop & Core' },
  
  // Frontend
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'Vite', icon: SiVite, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  
  // Build & Package
  { name: 'Node.js', icon: SiNodedotjs, category: 'Build & Package' },
  { name: 'Electron Builder', icon: SiElectron, category: 'Build & Package' },
  { name: 'GitHub', icon: SiGithub, category: 'Build & Package' }
]

const techCategories = [
  { name: 'Desktop & Core', color: 'bg-blue-500', radius: 120, duration: 20 },
  { name: 'Frontend', color: 'bg-blue-600', radius: 200, duration: 25 },
  { name: 'Build & Package', color: 'bg-blue-700', radius: 280, duration: 30 }
]

export default function OrbitShareTechStack() {
  const showPanda = true // Always show panda

  const getItemsByCategory = (categoryName: string) => {
    return techItems.filter(item => item.category === categoryName)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Orbiting Circles - Both Mobile and Desktop */}
      <div className="relative">
        {/* Center Panda - Randomly shown */}
        {showPanda && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Image 
              src="/WorkingPanda.gif" 
              alt="Working Panda" 
              width={96}
              height={96}
              className="rounded-full shadow-lg"
            />
          </div>
        )}
        

        {/* Multiple Orbiting Circles */}
        {techCategories.map((category, categoryIndex) => {
          const items = getItemsByCategory(category.name)
          return (
            <div key={category.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <OrbitingCircles
                radius={category.radius}
                duration={category.duration}
                iconSize={32}
                path={false}
                className="text-blue-800"
                reverse={categoryIndex % 2 === 1} // Alternate direction for visual interest
              >
                {items.map((item) => (
                  <div
                    key={`${category.name}-${item.name}`}
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer group relative"
                    title={`${category.name}: ${item.name}`}
                  >
                    <item.icon size={24} />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                      {item.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                ))}
              </OrbitingCircles>
            </div>
          )
        })}
      </div>
    </div>
  )
}

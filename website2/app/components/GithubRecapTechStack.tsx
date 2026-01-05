'use client'
import React from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { 
  SiReact,
  SiTypescript,
  SiExpo,
  SiPrettier,
  SiBabel,
  SiAndroid,
  SiIos
} from 'react-icons/si'
import { FaCode, FaMobile } from 'react-icons/fa'
import Image from 'next/image'

interface TechItem {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  category: string
}

const techItems: TechItem[] = [
  // Mobile Frontend
  { name: 'React Native', icon: SiReact, category: 'Mobile Frontend' },
  { name: 'Expo', icon: SiExpo, category: 'Mobile Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Mobile Frontend' },
  { name: 'React Navigation', icon: FaMobile, category: 'Mobile Frontend' },
  { name: 'Shopify Restyle', icon: FaCode, category: 'Mobile Frontend' },
  
  // UI & Components
  
  { name: 'Pager View', icon: FaCode, category: 'UI & Components' },
  
  // Development Tools
  { name: 'Prettier', icon: SiPrettier, category: 'Development Tools' },
  { name: 'Babel', icon: SiBabel, category: 'Development Tools' },
  { name: 'TypeScript Compiler', icon: SiTypescript, category: 'Development Tools' },
  
  // Build & Deployment
  { name: 'Expo Application Services', icon: SiExpo, category: 'Build & Deployment' },
  { name: 'iOS Build Profiles', icon: SiIos, category: 'Build & Deployment' },
  { name: 'Android Build Profiles', icon: SiAndroid, category: 'Build & Deployment' },
]

const techCategories = [
  { name: 'Mobile Frontend', color: 'bg-blue-500', radius: 120, duration: 20 },
  { name: 'UI & Components', color: 'bg-blue-600', radius: 180, duration: 25 },
  { name: 'Development Tools', color: 'bg-blue-700', radius: 240, duration: 30 },
  { name: 'Build & Deployment', color: 'bg-blue-800', radius: 300, duration: 35 }
]

export default function G1TechStack() {
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
                    <item.icon size={40} />
                    
                    {/* Tooltip - Works on both hover and touch */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 backdrop-blur-sm border border-blue-400/30 rounded-lg text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                      <div className="text-blue-300 font-semibold">{category.name}</div>
                      <div className="text-white">{item.name}</div>
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
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
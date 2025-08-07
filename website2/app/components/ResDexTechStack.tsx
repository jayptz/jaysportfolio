'use client'
import React from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { 
  SiReact, 
  SiNodedotjs, 
  SiSupabase, 
  SiSocketdotio,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiJavascript
} from 'react-icons/si'
import { FaDatabase, FaServer, FaAws } from 'react-icons/fa'
import Image from 'next/image'

interface TechItem {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  category: string
}

const techItems: TechItem[] = [
  // Frontend
  { name: 'React.js', icon: SiReact, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Express.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Socket.io', icon: SiSocketdotio, category: 'Backend' },
  { name: 'JWT Auth', icon: FaServer, category: 'Backend' },
  
  // Database
  { name: 'Supabase', icon: SiSupabase, category: 'Database' },
  { name: 'PostgreSQL', icon: FaDatabase, category: 'Database' },
  
  // Cloud & Deployment
  { name: 'AWS S3', icon: FaAws, category: 'Cloud & Deployment' },
  { name: 'AWS Lambda', icon: FaAws, category: 'Cloud & Deployment' },
  { name: 'Vercel', icon: SiVercel, category: 'Cloud & Deployment' }
]

const techCategories = [
  { name: 'Frontend', color: 'bg-blue-500', radius: 120, duration: 20 },
  { name: 'Backend', color: 'bg-blue-600', radius: 200, duration: 25 },
  { name: 'Database', color: 'bg-blue-700', radius: 280, duration: 30 },
  { name: 'Cloud & Deployment', color: 'bg-blue-800', radius: 360, duration: 35 }
]

export default function ResDexTechStack() {
  const showPanda = true // Always show panda

  const getItemsByCategory = (categoryName: string) => {
    return techItems.filter(item => item.category === categoryName)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Mobile Fallback - Simple Grid Layout */}
      <div className="block md:hidden">
        <div className="space-y-6">
          {techCategories.map((category) => {
            const items = getItemsByCategory(category.name)
            return (
              <div key={category.name} className="bg-black/40 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-2">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className={`${category.color} rounded px-2 py-1 text-center text-white text-xs font-medium flex items-center justify-center gap-1`}
                      title={`${category.name}: ${item.name}`}
                    >
                      <item.icon size={12} />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Desktop - Orbiting Circles */}
      <div className="hidden md:block relative">
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
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer group relative"
                    title={`${category.name}: ${item.name}`}
                  >
                    <item.icon size={40} />
                    
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 backdrop-blur-sm border border-blue-400/30 rounded-lg text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
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
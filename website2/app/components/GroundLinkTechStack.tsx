'use client'
import React, { useState, useEffect } from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { 
  SiReact, 
  SiLeaflet, 
  SiTailwindcss, 
  SiSocketdotio,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiAmazon
} from 'react-icons/si'
import { FaDatabase, FaAws } from 'react-icons/fa'

interface TechItem {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  category: string
}

const techItems: TechItem[] = [
  // Frontend
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'React-Leaflet', icon: SiLeaflet, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'Socket.IO', icon: SiSocketdotio, category: 'Frontend' },
  
  // Backend
  { name: 'FastAPI', icon: SiFastapi, category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Backend' },
  { name: 'PostGIS', icon: FaDatabase, category: 'Backend' },
  { name: 'JWT Auth', icon: SiSocketdotio, category: 'Backend' },
  
  // Infrastructure
  { name: 'Docker', icon: SiDocker, category: 'Infrastructure' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'Infrastructure' },
  { name: 'Terraform', icon: SiTerraform, category: 'Infrastructure' },
  { name: 'GitHub Actions', icon: SiGithubactions, category: 'Infrastructure' },
  { name: 'Jenkins', icon: SiJenkins, category: 'Infrastructure' },
  
  // Cloud
  { name: 'AWS (EKS, RDS, S3, IAM)', icon: FaAws, category: 'Cloud' }
]

const techCategories = [
  { name: 'Frontend', color: 'bg-green-500', radius: 120, duration: 20 },
  { name: 'Backend', color: 'bg-green-600', radius: 200, duration: 25 },
  { name: 'Infrastructure', color: 'bg-green-700', radius: 280, duration: 30 },
  { name: 'Cloud', color: 'bg-green-800', radius: 360, duration: 35 }
]

export default function GroundLinkTechStack() {
  const [showPanda, setShowPanda] = useState(true) // Start visible

  useEffect(() => {
    // Pattern: Show panda every 3 seconds, hide for 2 seconds
    const interval = setInterval(() => {
      setShowPanda(prev => !prev)
    }, 2500) // Toggle every 2.5 seconds

    return () => clearInterval(interval)
  }, [])

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
              <div key={category.name} className="bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
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
            <img 
              src="/WorkingPanda.gif" 
              alt="Working Panda" 
              className="w-24 h-24 rounded-full shadow-lg"
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
                className="text-green-800"
                reverse={categoryIndex % 2 === 1} // Alternate direction for visual interest
              >
                {items.map((item, itemIndex) => (
                  <div
                    key={`${category.name}-${item.name}`}
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer group relative"
                    title={`${category.name}: ${item.name}`}
                  >
                    <item.icon size={40} />
                    
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 backdrop-blur-sm border border-green-400/30 rounded-lg text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                      <div className="text-green-300 font-semibold">{category.name}</div>
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
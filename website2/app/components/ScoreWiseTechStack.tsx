'use client'
import React from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { 
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiOpenai,
  SiTwilio,
  SiPython,
  SiLangchain
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

interface TechItem {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  category: string
  description: string
}

const techItems: TechItem[] = [
  // Frontend
  { 
    name: 'Next.js', 
    icon: SiNextdotjs, 
    category: 'Frontend',
    description: 'React framework for production'
  },
  { 
    name: 'TypeScript', 
    icon: SiTypescript, 
    category: 'Frontend',
    description: 'Type-safe JavaScript'
  },
  { 
    name: 'Tailwind CSS', 
    icon: SiTailwindcss, 
    category: 'Frontend',
    description: 'Utility-first CSS framework'
  },
  
  // Backend & AI
  { 
    name: 'OpenAI Assistants', 
    icon: SiOpenai, 
    category: 'Backend & AI',
    description: 'AI-powered assistants API'
  },
  { 
    name: 'LangChain', 
    icon: SiLangchain, 
    category: 'Backend & AI',
    description: 'LLM application framework'
  },
  { 
    name: 'Twilio', 
    icon: SiTwilio, 
    category: 'Backend & AI',
    description: 'SMS and communication API'
  },
  { 
    name: 'AWS Lambda', 
    icon: FaAws, 
    category: 'Backend & AI',
    description: 'Serverless compute service'
  }
]

const techCategories = [
  { name: 'Frontend', color: 'bg-green-500', radius: 120, duration: 25 },
  { name: 'Backend & AI', color: 'bg-green-600', radius: 200, duration: 30 }
]

export default function ScoreWiseTechStack() {
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
              <div key={category.name} className="bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
                <div className="grid grid-cols-1 gap-3">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className={`${category.color} rounded px-3 py-2 text-center text-white text-sm font-medium flex items-center justify-center gap-2`}
                      title={`${category.name}: ${item.name} - ${item.description}`}
                    >
                      <item.icon size={16} />
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
                iconSize={40}
                path={false}
                className="text-white"
                reverse={categoryIndex % 2 === 1} // Alternate direction for visual interest
              >
                {items.map((item, itemIndex) => (
                  <div
                    key={`${category.name}-${item.name}`}
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer group relative"
                    title={`${category.name}: ${item.name} - ${item.description}`}
                  >
                    <item.icon size={40} />
                    
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 backdrop-blur-sm border border-green-400/30 rounded-lg text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 max-w-xs">
                      <div className="text-green-300 font-semibold">{category.name}</div>
                      <div className="text-white font-bold">{item.name}</div>
                      <div className="text-gray-300 text-xs mt-1">{item.description}</div>
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
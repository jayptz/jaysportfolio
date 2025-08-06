'use client'
import React from 'react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiPython, 
  SiJavascript, 
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiGit
} from 'react-icons/si'

interface TechOrbitProps {
  children?: React.ReactNode
  className?: string
}

const defaultTechIcons = [
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiPython, name: 'Python' },
  { icon: SiJavascript, name: 'Java' },
  { icon: SiCplusplus, name: 'C++' }
]

export default function TechOrbit({ children, className }: TechOrbitProps) {
  return (
    <div className={`relative w-[300px] h-[300px] mx-auto ${className || ''}`}>
      <OrbitingCircles
        radius={120}
        duration={25}
        iconSize={40}
        path={true}
        className="text-green-800"
      >
        {children || defaultTechIcons.map((tech, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white shadow-lg border border-green-300/30 hover:scale-110 transition-transform duration-200"
            title={tech.name}
          >
            <tech.icon size={20} />
          </div>
        ))}
      </OrbitingCircles>
    </div>
  )
} 
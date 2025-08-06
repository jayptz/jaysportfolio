'use client'
import React from 'react'
import TechOrbit from './TechOrbit'
// Example of how to import tech icons from react-icons
// import { SiReact, SiNodedotjs, SiTypescript, SiPython, SiJava, SiCplusplus } from 'react-icons/si'

export default function TechOrbitExample() {
  return (
    <div className="mt-16 z-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Technologies I&apos;ve worked with
      </h2>
      <TechOrbit>
        {/* Example with actual tech icons - uncomment and install react-icons to use */}
        {/* 
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white">
          <SiReact size={24} />
        </div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white">
          <SiNodedotjs size={24} />
        </div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white">
          <SiTypescript size={24} />
        </div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white">
          <SiPython size={24} />
        </div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white">
          <SiJava size={24} />
        </div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white">
          <SiCplusplus size={24} />
        </div>
        */}
        
        {/* Current implementation with text labels */}
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">React</div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">Node</div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">Type</div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">Python</div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">Java</div>
        <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">C++</div>
      </TechOrbit>
      <p className="text-center text-gray-400 mt-4 text-sm">
        Hover over the orbiting technologies to see them in action! 🚀
      </p>
    </div>
  )
} 
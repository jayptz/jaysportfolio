'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ExperienceItem {
  id: string
  title: string
  company: string
  description: string
  dates: string
  icon?: string
}

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Tech Company',
    description: 'Developed full-stack applications using React, Node.js, and TypeScript. Led team of 5 developers on multiple projects.',
    dates: '2023 - Present',
    icon: '/PandaCoding.png'
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Startup Studio',
    description: 'Built responsive web applications and improved user experience. Collaborated with design team on UI/UX improvements.',
    dates: '2022 - 2023',
    icon: '/PandaRelax.png'
  },
  {
    id: '3',
    title: 'Junior Developer',
    company: 'Digital Agency',
    description: 'Created interactive websites and maintained client projects. Learned modern web development practices.',
    dates: '2021 - 2022',
    icon: '/panda.gif'
  },
  {
    id: '4',
    title: 'Web Development Intern',
    company: 'Tech Startup',
    description: 'Assisted in developing web applications and learned industry best practices. Contributed to team projects.',
    dates: '2020 - 2021',
    icon: '/panda2.gif'
  }
]

export default function ExperienceTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const timelineRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute('data-item-id')
            if (itemId) {
              setVisibleItems(prev => new Set([...prev, itemId]))
            }
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const timelineBlocks = timelineRef.current?.querySelectorAll('.cd-timeline__block')
    timelineBlocks?.forEach((block) => {
      observer.observe(block)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={timelineRef}
      className="cd-timeline js-cd-timeline relative max-w-4xl mx-auto px-4 py-8"
    >
      {/* Central Timeline Track */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-400 h-full rounded-full opacity-60 hidden md:block"></div>
      
      <div className="cd-timeline__container relative">
        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            data-item-id={item.id}
            className={`cd-timeline__block relative mb-8 ${
              index % 2 === 0 ? 'left-timeline' : 'right-timeline'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={visibleItems.has(item.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Timeline Marker */}
            <div className="cd-timeline__img absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-black z-10 hidden md:block"></div>
            
            {/* Content Block */}
            <div className={`cd-timeline__content relative ${
              index % 2 === 0 
                ? 'ml-0 mr-auto pr-8 text-right md:w-5/12 w-full text-center md:text-right' 
                : 'ml-auto mr-0 pl-8 text-left md:w-5/12 w-full text-center md:text-left'
            }`}>
              
              {/* Panda Icon */}
              <div className={`flex items-center mb-4 ${
                index % 2 === 0 ? 'justify-end md:justify-end justify-center' : 'justify-start md:justify-start justify-center'
              }`}>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-400">
                  <Image 
                    src={item.icon || '/PandaCoding.png'} 
                    alt="Panda Experience Icon"
                    width={32}
                    height={32}
                    className="object-contain"
                    onError={(e) => {
                      // Fallback to a panda emoji if image fails to load
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <span className="text-2xl hidden">🐼</span>
                </div>
              </div>

              {/* Content */}
              <div className={`bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 shadow-xl ${
                index % 2 === 0 ? 'text-right md:text-right text-center' : 'text-left md:text-left text-center'
              }`}>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <h4 className="text-lg font-semibold text-green-400 mb-3">{item.company}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="cd-date inline-block px-3 py-1 bg-green-400/20 text-green-300 text-sm rounded-full border border-green-400/30">
                  {item.dates}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline End Marker */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-black mt-8 hidden md:block"></div>
    </section>
  )
} 
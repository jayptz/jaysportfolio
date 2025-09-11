import React from 'react'
import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft, Calendar, BookOpen } from 'lucide-react'
import { Metadata } from 'next'
import AnimatedImage from './AnimatedImage'

// Define color variables
const fadedLabel = '#9CA3AF'
const textColor = '#FFFFFF'
const fadedText = '#D1D5DB'

// Icon aliases to match the existing code
const IconCalendar = Calendar
const IconStack2 = BookOpen


export const metadata: Metadata = {
  title: 'School | Jay\'s Education',
  description: 'Jay Patel\'s academic journey at Wilfrid Laurier University, studying Computer Science with a 10.93 GPA.',
  keywords: ['education', 'Computer Science', 'Wilfrid Laurier University', 'academic', 'university'],
}

export default function SchoolPage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Bamboo stalks background */}
      <div className="absolute inset-0 flex justify-around opacity-20 -z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-white rounded-lg h-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            back to home
          </Link>
        </div>

        {/* Project Header */}
                 
          <div className="mb-8 flex justify-center">
            <AnimatedImage 
              src="/WilfridLaurierUniversity.jpg" 
              alt="Wilfrid Laurier University Campus" 
            />
          </div>
        <div className="text-ce.nter mb-12">
          <h1 className="text-5xl font-bold text-purple-700 mb-4">
            Wilfrid Laurier University
          </h1>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto">


          {/* Project Details */}
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4"></h2>
              <p className="text-gray-300 leading-relaxed mb-4">
              I'm a third-year <span className="text-white font-bold">Computer Science</span> student at <span className="text-purple-700 font-semibold">Wilfrid Laurier University</span>, where I’ve built a strong foundation in both practical software development and core computer science theory. My coursework has covered essential areas such as data structures, algorithm analysis, and object-oriented design, giving me the tools to build and scale efficient, maintainable systems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
              Outside of class, I’ve taken initiative to explore areas like AI-powered automation, cloud infrastructure, and human-centered design through hands-on projects, hackathons, and co-op experience. I've developed full-stack web platforms, mobile apps, and real-time analytics tools using Python, JavaScript, C++, and AWS—translating theory into production-level code.              
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
              Heading into my third year, I'm excited to deepen my focus in AI, distributed systems, and quantum computing, with a goal of developing tools that push the boundaries of human-computer interaction and ethical technology design.
              </p>
            </div>
          </div>
          {/* Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-8">
            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-gray-400 text-base lg:text-lg font-semibold mb-4 flex items-center gap-2">
                <IconCalendar className="w-4 h-4 text-white" /> 
                Details
              </h3>
              <ul className="text-gray-300 text-sm lg:text-base space-y-2">
                <li>Honours Bachelors of Science</li>
                <li>10.93 GPA</li>
                <li>Computer Science</li>
                <li>September 2023 – Present</li>
              </ul>
            </div>

            {/* Stack */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-gray-400 text-base lg:text-lg font-semibold mb-4 flex items-center gap-2">
                <IconStack2 className="w-4 h-4 text-white" /> 
                Relevant Courses
              </h3>
              <ul className="text-gray-300 text-sm lg:text-base space-y-2">
                <li>Object-Oriented Programming (CP213) A+</li>
                <li>Data Structures I & II (CP164, CP264) A+</li>
                <li>Algorithm Design and Analysis (CP312) A</li>
                <li>Discrete Structures for Computer Science (CP214) A-</li>
                <li>Intro to Microprocessors (CP216) A</li>
                <li>Digital Electronics (CP104) A+</li>
                <li>Probability & Statistics for Science (ST230) A-</li>
                <li>Software Engineering (CP317) A+</li>
                <li>Artificial Intelligence (CP468) Current </li>
                <li>Machine Learning (CP322) Current </li>
                <li>Databases I (CP363)Current </li>
              </ul>
            </div>
          </div>

         
        </div>
      </div>
    </main>
  )
}

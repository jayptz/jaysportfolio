import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Briefcase, Award, Users, Code, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Jay\'s Professional Journey',
  description: 'Jay Patel\'s professional experience, work history, and career achievements.',
  keywords: ['experience', 'work', 'career', 'professional', 'employment'],
}

export default function ExperiencePage() {
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

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey through various roles and opportunities in the tech world
          </p>
        </div>

        {/* Experience Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Project Leadership */}
            <Link href="/projects/resdex" className="block">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-200 cursor-pointer group relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Full-Stack Developer</h2>
                    <p className="text-blue-400 font-semibold">ResDex Platform</p>
                    <p className="text-gray-400 text-sm">Aug 2024 - Present</p>
                  </div>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Leading the development of ResDex, a comprehensive mentorship and research platform that connects students with opportunities. This full-stack experience involves React, Node.js, and PostgreSQL, and serves as a testament to my ability to build scalable, user-focused applications.
                </p>
                {/* Arrow button - absolutely positioned at bottom-right */}
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 text-white transition-colors duration-200 group-hover:scale-105">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            
            {/* Decorative Line */}
            <div className="flex justify-center">
              <div className="w-0.5 h-16 bg-white rounded-full"></div>
            </div>

            {/* AI Code Reviewer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">AI Code Reviewer</h2>
                  <p className="text-purple-400 font-semibold">Outlier AI</p>
                  <p className="text-gray-400 text-sm">Aug 2024 - Jan 2025</p>
                </div>
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Working on the cutting edge of AI-assisted development, I review and improve code quality while helping shape the future of AI-powered software development. This role allows me to dive deep into various codebases and contribute to the advancement of AI tools in software engineering.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-gray-400 text-base lg:text-lg font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4 text-white" /> 
                  Technical Skills
                </h3>
                <ul className="text-gray-300 text-sm lg:text-base space-y-2">
                  <li>Full-Stack Development (React, Node.js, Python)</li>
                  <li>Mobile Development (React Native)</li>
                  <li>Cloud Infrastructure (AWS)</li>
                  <li>Database Design (PostgreSQL, MongoDB)</li>
                  <li>AI/ML Integration</li>
                  <li>API Development & Integration</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-gray-400 text-base lg:text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4 text-white" /> 
                  Soft Skills
                </h3>
                <ul className="text-gray-300 text-sm lg:text-base space-y-2">
                  <li>Project Leadership & Team Collaboration</li>
                  <li>Problem-Solving & Critical Thinking</li>
                  <li>Time Management & Prioritization</li>
                  <li>Communication & Documentation</li>
                  <li>User-Centered Design</li>
                  <li>Continuous Learning & Adaptation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
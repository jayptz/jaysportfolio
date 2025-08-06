import Link from 'next/link'
import { Github, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import GroundLinkTechStack from '../../components/GroundLinkTechStack'

export const metadata: Metadata = {
  title: 'GroundLink | Jay\'s Projects',
  description: 'GroundLink is a real-time dashboard for managing and tracking fieldwork through live maps and mobile task updates.',
  keywords: ['fieldwork', 'dashboard', 'real-time', 'mobile', 'tracking', 'maps'],
}

export default function GroundLinkPage() {
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
            href="/projects"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            GroundLink
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            GroundLink is a real-time dashboard for managing and tracking fieldwork through live maps and mobile task updates.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/jayptz/GroundLink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-gray-200 transition"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto">
          {/* Project Image/Demo */}
          <div className="mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                G
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                GroundLink is a comprehensive fieldwork management solution designed to streamline operations for teams working in the field. The platform provides real-time tracking, task management, and communication tools to ensure efficient coordination between field workers and management.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The system features live mapping capabilities, mobile task updates, and a centralized dashboard that provides managers with real-time insights into field operations. This enables better resource allocation, improved safety monitoring, and enhanced productivity tracking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time GPS tracking and location monitoring
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Live interactive maps with field worker locations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mobile task assignment and status updates
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time communication and messaging
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Performance analytics and reporting dashboard
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Offline capability for remote areas
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack with Orbiting Circles */}
          <div className="mt-16 mb-32">
            <div className="relative h-[600px] flex items-center justify-center">
              <GroundLinkTechStack />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
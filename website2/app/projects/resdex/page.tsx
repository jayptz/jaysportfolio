import Link from 'next/link'
import Image from 'next/image'
import { Github, ArrowLeft, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import ResDexTechStack from '../../components/ResDexTechStack'

export const metadata: Metadata = {
  title: 'ResDex | Jay\'s Projects',
  description: 'A comprehensive mentorship and research platform that connects students with opportunities.',
  keywords: ['mentorship', 'research', 'platform', 'React', 'Node.js', 'PostgreSQL'],
}

export default function ResDexPage() {
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
            ResDex
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            A comprehensive mentorship and research platform that connects students with opportunities. Built with modern web technologies to facilitate meaningful connections between aspiring researchers and experienced mentors.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/devp19/ResDex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-gray-200 transition"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
            <Link 
              href="https://www.resdex.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              ResDex            
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto">
          {/* Project Image/Demo */}
          <div className="mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-blue-800 to-purple-900 rounded-xl flex items-center justify-center overflow-hidden">
              <Image 
                src="/resdex.jpeg" 
                alt="ResDex Platform Screenshot" 
                width={800}
                height={256}
                className="w-full h-full object-cover rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                ResDex is a comprehensive platform designed to bridge the gap between students and research opportunities. The platform facilitates meaningful connections between aspiring researchers and experienced mentors, while providing tools for project discovery and collaboration.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Built with modern web technologies, ResDex features a sophisticated matching algorithm that pairs students with mentors based on research interests, experience levels, and availability. The platform also includes real-time messaging, progress tracking, and resource sharing capabilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Student-Mentor matching algorithm
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Research project discovery and filtering
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time messaging and collaboration tools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Progress tracking and milestone management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Resource sharing and document management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Analytics dashboard for engagement metrics
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack with Orbiting Circles */}
          <div className="mt-16 mb-32">
            <div className="relative h-[600px] flex items-center justify-center">
              <ResDexTechStack />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
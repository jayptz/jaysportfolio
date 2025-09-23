import Link from 'next/link'
import { Github, ArrowLeft, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import OrbitShareTechStack from '../../components/OrbitShareTechStack'

export const metadata: Metadata = {
  title: 'OrbitShare | Jay\'s Projects',
  description: 'OrbitShare is a tiny desktop tool that makes screen sharing + switching between monitors instant with seamless monitor switching capabilities.',
  keywords: ['desktop tool', 'screen sharing', 'monitor switching', 'electron', 'react', 'typescript', 'desktop app'],
}

export default function OrbitSharePage() {
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
            OrbitShare
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            OrbitShare (aka your OrbitFlow MVP) is a tiny desktop tool that makes screen sharing + switching between monitors instant. Seamless monitor switching with minimal permissions UX.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/jayptz/OrbitShare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-gray-200 transition"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
            <Link 
              href="https://orbitshare.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              OrbitShare            
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto">
          {/* Project Image/Demo */}
          <div className="mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                OribitShare
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                OrbitShare is a desktop tool designed to solve the pain point of switching between monitors during screen sharing. It lives as a menu-bar/tray icon for quick picking, provides global hotkeys to flip between monitors, and shows a preview window of what's being shared.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The tool focuses on seamless monitor switching without the need to stop and re-share, making it perfect for developers, presenters, and anyone who frequently switches between multiple monitors during screen sharing sessions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Menu-bar/tray icon for quick monitor selection
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Global hotkeys for instant monitor switching
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Preview window showing what's being shared
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Seamless switching without stop/re-share
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Minimal permissions UX (especially for macOS)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  List all monitors with thumbnails
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack with Orbiting Circles */}
          <div className="mt-16 mb-32">
            <div className="relative h-[600px] flex items-center justify-center">
              <OrbitShareTechStack />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 

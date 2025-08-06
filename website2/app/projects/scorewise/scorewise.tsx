import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import ScoreWiseTechStack from '../../components/ScoreWiseTechStack'

export const metadata: Metadata = {
  title: 'ScoreWise | Jay\'s Projects',
  description: 'ScoreWise is a real-time NBA stats tracker that delivers personalized fantasy insights by SMS.',
  keywords: ['NBA', 'fantasy sports', 'SMS', 'real-time', 'statistics', 'basketball'],
}

export default function ScoreWisePage() {
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
            ScoreWise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            ScoreWise is a real-time NBA stats tracker that delivers personalized fantasy insights by SMS.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/jayptz/ScoreWise"
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
            <div className="w-full h-64 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                S
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                ScoreWise revolutionizes the fantasy sports experience by delivering real-time NBA statistics and personalized insights directly to users via SMS. The platform combines live data processing with intelligent analytics to provide actionable fantasy sports advice.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The system monitors NBA games in real-time, processes player statistics, and sends personalized recommendations to users based on their fantasy team composition. This enables users to make informed decisions quickly without constantly checking apps or websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time NBA game monitoring and statistics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Personalized fantasy insights via SMS delivery
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Player performance tracking and analysis
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Automated trade and roster recommendations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Customizable alert preferences and timing
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integration with major fantasy sports platforms
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack with Orbiting Circles */}
          <div className="mt-16 mb-32">
            <div className="relative h-[600px] flex items-center justify-center">
              <ScoreWiseTechStack />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import MyBuddyTechStack from '../../components/MyBuddyTechStack'

export const metadata: Metadata = {
  title: 'My Buddy | Jay\'s Projects',
  description: 'GPT integrated personal mental-health assistant',
  keywords: ['AI', 'mental health', 'GPT', 'voice recognition', 'assistant', 'therapy'],
}

export default function MyBuddyPage() {
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
            MyBuddy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            GPT integrated personal mental-health assistant that provides conversational support and guidance.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/jayptz/MyBuddy"
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
            <div className="w-full h-64 bg-gradient-to-br from-blue-800 to-purple-900 rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                🧠
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                MyBuddy is an AI-powered mental health assistant that combines voice recognition technology with GPT-3.5 to provide personalized conversational support. The application offers a safe, judgment-free environment for users to discuss their thoughts and feelings.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The system processes natural speech through Google's Speech-to-Text API, analyzes the content using OpenAI's GPT-3.5, and provides empathetic responses and guidance. This creates a unique therapeutic experience that's accessible anytime, anywhere.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Voice-to-text conversation interface
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI-powered empathetic responses
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time speech processing
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Personalized conversation history
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mental health guidance and support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Secure and private conversations
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack with Orbiting Circles */}
          <div className="mt-16">
            <div className="relative h-96 flex items-center justify-center">
              <MyBuddyTechStack />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
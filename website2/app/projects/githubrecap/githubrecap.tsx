import Link from 'next/link'
import { ArrowLeft, Github } from 'lucide-react'
import { Metadata } from 'next'
import G1TechStack from '../../components/GithubRecapTechStack'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'GithubRecap | Jay\'s Projects',
  description: 'GitHub Wrapped is a fun to use app, which allows ',
  keywords: [],
}

export default function G1AppPage() {
  return (
    <main className="relative min-h-screen bg-black">
      
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
            G1 App
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            A webapp that allows GitHub users to access their stats in a vibrant "Spotify" wrapped way.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/jayptz/githubrecap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition"
            >
              <Github className="w-4 h-4 mr-2" />
              View on Github
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto">
          {/* Project Image/Demo */}
          <div className="mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
              <Image 
                src="/G1.webp" 
                alt="G1 App Screenshot" 
                width={800}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The G1 App is a comprehensive study tool designed specifically for Ontario drivers preparing for their G1 knowledge test. The app provides an intuitive and engaging way to learn the rules of the road through interactive flashcards and randomized quizzes.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Built with a focus on user experience, the app features a clean interface that makes studying efficient and enjoyable. The content is regularly updated to reflect the latest Ontario driving regulations and test requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Interactive flashcards for easy memorization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Randomized quiz questions for comprehensive testing
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Progress tracking and performance analytics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Clean, user-friendly mobile interface
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Offline functionality for studying anywhere
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Regular content updates with latest regulations
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack with Orbiting Circles */}
          <div className="mt-16 mb-32">
            <div className="relative h-[600px] flex items-center justify-center">
              <G1TechStack />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
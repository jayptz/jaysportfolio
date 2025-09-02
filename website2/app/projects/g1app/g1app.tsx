import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import G1TechStack from '../../components/G1TechStack'
import { NumberTicker } from '@/components/magicui/number-ticker'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'G1 App | Jay\'s Projects',
  description: 'A mobile app that helps Ontario drivers study for the G1 test. Features flashcards, randomized quizzes, and a clean user-friendly interface.',
  keywords: ['mobile app', 'G1 test', 'Ontario drivers', 'flashcards', 'quiz', 'education'],
}

export default function G1AppPage() {
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
            G1 App
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            A mobile app that helps Ontario drivers study for the G1 test. Features flashcards, randomized quizzes, and a clean user-friendly interface.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.smitpatel.g1app&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Google Play
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

          {/* Current Downloads Section */}
          <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-2">
                <NumberTicker 
                  value={1000} 
                  className="text-4xl font-bold text-white"
                />
                <span className="text-4xl font-bold text-white">+ downloads</span>
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
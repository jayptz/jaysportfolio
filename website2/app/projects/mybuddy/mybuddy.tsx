import Link from 'next/link'
import { Github, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import MyBuddyTechStack from '../../components/MyBuddyTechStack'

export const metadata: Metadata = {
  title: 'MyBuddy | Jay&apos;s Projects',
  description: 'MyBuddy is an AI mental health chatbot that uses GPT-4 to simulate supportive, empathetic conversations in a private and friendly interface.',
  keywords: ['AI', 'mental health', 'chatbot', 'GPT-4', 'therapy', 'support', 'conversational AI'],
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
            MyBuddy is an AI mental health chatbot that uses GPT-4 to simulate supportive, empathetic conversations in a private and friendly interface.
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
            <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                M
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                MyBuddy represents a compassionate approach to mental health support through AI technology. The chatbot leverages GPT-4&apos;s advanced language capabilities to provide empathetic, supportive conversations in a safe and private environment.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Designed with mental health awareness in mind, MyBuddy offers a judgment-free space for users to express their thoughts and feelings. The AI is trained to respond with empathy and understanding, providing emotional support while maintaining appropriate boundaries and encouraging professional help when needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  GPT-4 powered empathetic conversations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Private and secure chat interface
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mental health-aware responses and guidance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Crisis detection and professional help referrals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  User-friendly and accessible design
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Conversation history and mood tracking
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack with Orbiting Circles */}
          <div className="mt-16 mb-32">
            <div className="relative h-[600px] flex items-center justify-center">
              <MyBuddyTechStack />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
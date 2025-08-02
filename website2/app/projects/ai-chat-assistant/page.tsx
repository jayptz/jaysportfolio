import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Chat Assistant | Jay\'s Projects',
  description: 'An intelligent chatbot powered by machine learning, capable of understanding context and providing helpful responses.',
  keywords: ['AI', 'chatbot', 'machine learning', 'natural language processing', 'conversational AI'],
}

export default function AIChatAssistantPage() {
  return (
    <main className="relative min-h-screen bg-green-50">
      {/* Bamboo stalks background */}
      <div className="absolute inset-0 flex justify-around opacity-20 -z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-green-800 rounded-lg h-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/projects"
            className="inline-flex items-center px-4 py-2 rounded-full border border-green-400 bg-green-100 text-green-900 hover:bg-green-200 transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            AI Chat Assistant
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto mb-6">
            An intelligent chatbot powered by machine learning, capable of understanding context and providing helpful responses.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/example/ai-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 hover:bg-green-200 transition"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
            <Link 
              href="https://ai-chat-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto">
          {/* Project Image/Demo */}
          <div className="mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                A
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">About This Project</h2>
              <p className="text-green-700 leading-relaxed mb-4">
                This AI chat assistant leverages advanced machine learning techniques to provide intelligent, context-aware conversations. The system is designed to understand user intent, maintain conversation context, and deliver helpful, relevant responses.
              </p>
              <p className="text-green-700 leading-relaxed mb-4">
                The chatbot integrates with multiple AI models and APIs to provide comprehensive assistance across various domains. It features natural language processing capabilities that enable fluid, human-like interactions while maintaining accuracy and reliability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">Key Features</h2>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Context-aware conversation management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural language processing and understanding
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multi-domain knowledge and expertise
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time response generation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Conversation history and learning capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integration with external APIs and services
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Python', 'TensorFlow', 'OpenAI API', 'React', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'].map((tech) => (
                <div key={tech} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <span className="text-green-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
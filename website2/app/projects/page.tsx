import Link from 'next/link'
import ProjectBentoGrid from '@/components/ProjectBentoGrid'

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.',
    image: '',
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    slug: 'ecommerce-platform'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '',
    githubUrl: 'https://github.com/example/task-app',
    liveUrl: 'https://task-app-demo.com',
    slug: 'task-management-app'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with interactive maps, 7-day forecasts, and location-based weather alerts.',
    image: '',
    githubUrl: 'https://github.com/example/weather-app',
    liveUrl: 'https://weather-demo.com',
    slug: 'weather-dashboard'
  },
  {
    id: '4',
    title: 'AI Chat Assistant',
    description: 'An intelligent chatbot powered by machine learning, capable of understanding context and providing helpful responses.',
    image: '',
    githubUrl: 'https://github.com/example/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    slug: 'ai-chat-assistant'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.',
    image: '',
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    slug: 'portfolio-website'
  }
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-green-50">
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Explore a collection of my latest work, from web applications to innovative solutions. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        <ProjectBentoGrid projects={projects} />

        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full border border-green-400 bg-green-100 text-green-900 hover:bg-green-200 transition font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
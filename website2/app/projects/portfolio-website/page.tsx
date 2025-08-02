import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Website | Jay\'s Projects',
  description: 'A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.',
  keywords: ['portfolio', 'website', 'responsive design', 'animations', 'interactive', 'creative'],
}

export default function PortfolioWebsitePage() {
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
            Portfolio Website
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto mb-6">
            A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/example/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 hover:bg-green-200 transition"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
            <Link 
              href="https://portfolio-demo.com"
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
            <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                P
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">About This Project</h2>
              <p className="text-green-700 leading-relaxed mb-4">
                This portfolio website represents a modern approach to personal branding and creative presentation. Built with cutting-edge web technologies, it showcases work in an engaging and visually appealing manner while maintaining excellent performance and accessibility.
              </p>
              <p className="text-green-700 leading-relaxed mb-4">
                The website features smooth animations, interactive elements, and a responsive design that adapts beautifully across all devices. It serves as both a showcase for creative work and a demonstration of technical skills in modern web development.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">Key Features</h2>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Responsive design for all devices and screen sizes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Smooth animations and interactive elements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Project showcase with detailed case studies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contact forms and social media integration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  SEO optimization and fast loading times
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Accessibility features and best practices
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'GitHub', 'Figma'].map((tech) => (
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
import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Commerce Platform | Jay\'s Projects',
  description: 'A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.',
  keywords: ['e-commerce', 'next.js', 'full-stack', 'inventory management', 'payment processing'],
}

export default function EcommercePlatformPage() {
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
            E-Commerce Platform
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto mb-6">
            A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/example/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 hover:bg-green-200 transition"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
            <Link 
              href="https://ecommerce-demo.com"
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
            <div className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                E
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">About This Project</h2>
              <p className="text-green-700 leading-relaxed mb-4">
                This e-commerce platform represents a comprehensive solution for online retail, built with modern web technologies and best practices. The application features a robust architecture that handles everything from product catalog management to secure payment processing.
              </p>
              <p className="text-green-700 leading-relaxed mb-4">
                The platform includes advanced features such as real-time inventory tracking, automated order processing, and a sophisticated admin dashboard for store management. Built with scalability in mind, it can handle high traffic loads and complex business requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">Key Features</h2>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time inventory management system
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Secure payment processing with multiple gateways
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Advanced product catalog with search and filtering
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Customer account management and order history
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Admin dashboard with analytics and reporting
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mobile-responsive design for all devices
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe', 'Vercel'].map((tech) => (
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
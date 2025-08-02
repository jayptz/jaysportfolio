import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weather Dashboard | Jay\'s Projects',
  description: 'A beautiful weather dashboard with interactive maps, 7-day forecasts, and location-based weather alerts.',
  keywords: ['weather', 'dashboard', 'interactive maps', 'forecasts', 'location-based', 'weather alerts'],
}

export default function WeatherDashboardPage() {
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
            Weather Dashboard
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto mb-6">
            A beautiful weather dashboard with interactive maps, 7-day forecasts, and location-based weather alerts.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/example/weather-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 hover:bg-green-200 transition"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
            <Link 
              href="https://weather-demo.com"
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
            <div className="w-full h-64 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-20">
                W
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">About This Project</h2>
              <p className="text-green-700 leading-relaxed mb-4">
                This weather dashboard provides users with comprehensive weather information through an intuitive and visually appealing interface. The application combines multiple weather APIs to deliver accurate, real-time weather data with beautiful visualizations.
              </p>
              <p className="text-green-700 leading-relaxed mb-4">
                The dashboard features interactive maps that allow users to explore weather conditions across different locations, detailed 7-day forecasts, and location-based weather alerts to keep users informed about changing conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">Key Features</h2>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Interactive weather maps with real-time data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Detailed 7-day weather forecasts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Location-based weather alerts and notifications
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Current weather conditions with detailed metrics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hourly temperature and precipitation charts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mobile-responsive design for on-the-go access
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'Next.js', 'OpenWeather API', 'Mapbox', 'Chart.js', 'Tailwind CSS', 'TypeScript', 'Vercel'].map((tech) => (
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
import Link from 'next/link'
import ExperienceTimeline from '../components/ExperienceTimeline'
import TechOrbit from '../components/TechOrbit'

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex justify-around opacity-20 -z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-white rounded-lg h-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      <div className="text-center z-10 mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-8">
          Journey so far
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          every stalk has roots. here's a glimpse of my Journey so far. Places i've learned, built, and grown. 🌱🐼
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="w-full z-10">
        <ExperienceTimeline />
      </div>

      {/* Tech Orbit */}
      <div className="mt-16 z-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Technologies I've worked with
        </h2>
        <TechOrbit />
        <p className="text-center text-gray-400 mt-4 text-sm">
          Hover over the orbiting technologies to see them in action! 🚀
        </p>
      </div>
      
      <div className="mt-12 z-10">
        <Link 
          href="/"
          className="px-6 py-3 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
        >
          ← back to panda
        </Link>
      </div>
    </main>
  )
}
import Link from 'next/link'
import { ArrowLeft, Camera } from 'lucide-react'
import { motion } from '@/lib/motion'

export default function PhotosPage() {
  return (
    <motion.main 
      className="relative min-h-screen bg-black overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
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
            href="/about"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            back to about
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-12 text-center">
            photography
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="leading-relaxed">
                I'm working on curating a collection of my photography work. From street photography to nature shots, 
                I love capturing moments that tell stories. This page will showcase my favorite shots and the stories behind them.
              </p>
              <p className="leading-relaxed mt-4">
                Photography has taught me so much about composition, lighting, and the art of seeing the world differently. 
                It's amazing how a single frame can capture an entire moment in time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  )
} 
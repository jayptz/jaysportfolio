import Link from 'next/link'
import { ArrowLeft, Gamepad2, Trophy, Users } from 'lucide-react'
import { motion } from '@/lib/motion'

export default function GamingPage() {
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
            gaming
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Gaming Achievements</h2>
              <p className="leading-relaxed">
                Gaming has been a huge part of my life and has taught me valuable lessons about user experience, 
                problem-solving, and strategic thinking. I love both competitive gaming and game design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">Competitive Gaming</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• League of Legends - Diamond Rank</li>
                  <li>• Valorant - Immortal Rank</li>
                  <li>• CS:GO - Global Elite</li>
                  <li>• Tournament experience in multiple games</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Gamepad2 className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Game Development</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Unity game development experience</li>
                  <li>• Game mechanics design</li>
                  <li>• User experience optimization</li>
                  <li>• Community-driven development</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="leading-relaxed text-center">
                Gaming has influenced my approach to software development in countless ways. 
                The attention to detail, user feedback loops, and iterative design processes 
                I've learned from gaming directly apply to creating better user experiences in my projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  )
} 
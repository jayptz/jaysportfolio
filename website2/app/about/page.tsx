import Link from 'next/link'
import { ArrowLeft, Camera, Gamepad2 } from 'lucide-react'
import { motion } from '@/lib/motion'

export default function AboutPage() {
  return (
    <main 
      className="relative min-h-screen bg-black overflow-hidden"
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
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            back to home
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-12 text-center">
            about the panda
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300">
            {/* Academic Background */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <p className="leading-relaxed">
                Hey there! I&apos;m <span className="text-white font-semibold">Jay Patel</span>, a Computer Science student at 
                <span className="text-purple-700 font-semibold"> Wilfrid Laurier University</span> with a passion for AI, 
                full-stack development, and cloud computing. Currently maintaining a <span className="text-white font-semibold">10.93 GPA</span>, I&apos;m always curious about 
                how technology can solve real-world problems in creative and meaningful ways.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">What I&apos;ve Been Building</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  I&apos;ve been fortunate to work on some pretty exciting projects! I'm currently building <span className="text-white- font-bold">ResDex</span>, 
                  a mentorship and research platform that connects students with opportunities, and created 
                  <span className="text-green-400 font-semibold"> MyBuddy</span>,
                  <span className="text-yellow-400 font-semibold"> 2nd place at SerenityHacks</span>. More recently, I published the 
                  <span className="text-blue-400 font-semibold"> G1 App</span>, a mobile driving test simulator that&apos;s helped over 
                  <span className="text-blue-400 font-semibold"> 500+ users</span> pass their driving tests.
                </p>
                <p className="leading-relaxed">
                  I&apos;m also working as an AI code reviewer at <span className="text-white-400 font-bold"> Outlier AI</span>, 
                  where I get to dive deep into code quality and help shape the future of AI-assisted development.
                </p>
              </div>
            </div>

            {/* Creative Interests */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Beyond the Code</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  When I&apos;m not coding, I&apos;m usually behind a camera! I&apos;m excited to share more of my creative side through my <Link href="/photos" className="text-gray-400 font-semibold hover:text-white transition">
                    Photo Page
                  </Link>, where I showcase my photography work — there&apos;s something magical about capturing moments and stories through a lens.
                </p>
              </div>
            </div>

            {/* Personal Philosophy */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="leading-relaxed text-center">
                I love how I get to blend creative and technical problem-solving every day. Whether I&apos;m debugging code, 
                composing a photo, or strategizing in a game, it all feeds into my goal of building technology that&apos;s both 
                <span className="text-blue-400 font-semibold"> intelligent</span> and 
                <span className="text-pink-400 font-semibold"> human-centered</span>. 
                After all, the best tech doesn&apos;t just work well — it feels right. 🐼✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
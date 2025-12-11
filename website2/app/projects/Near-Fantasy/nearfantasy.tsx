import Link from 'next/link'
import { Github, ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import NearFantasyTechStack from '../../components/NearFantasyTechStack'

export const metadata: Metadata = {
  title: 'Near Fantasy | Jay\'s Projects',
  description: 'A blockchain-based fantasy app built on NEAR Protocol. It enables secure, decentralized team management and gameplay.',
  keywords: ['blockchain', 'NEAR Protocol', 'fantasy sports', 'decentralized', 'Web3', 'smart contracts'],
}

export default function NearFantasyPage() {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-5xl font-bold text-white">
              Near Fantasy
            </h1>
            <div className="flex items-center gap-2 ml-1 mt-4">
              <div className="relative">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-xs text-gray-400">Completed</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            A blockchain-based fantasy app built on NEAR Protocol. It enables secure, decentralized team management and gameplay.
          </p>
          
          {/* Project Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="https://github.com/jayptz/NEAR-Fantasy"
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
                NearFantasy
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Near Fantasy represents a cutting-edge approach to fantasy sports by leveraging blockchain technology on the NEAR Protocol. The platform provides a decentralized, transparent, and secure environment for fantasy sports enthusiasts to manage teams and compete.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Built on Web3 principles, the app eliminates the need for centralized authorities while ensuring fair play through smart contracts. Users maintain full control over their assets and can participate in a truly decentralized fantasy sports ecosystem.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Decentralized team management on blockchain
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Smart contract-based gameplay mechanics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  NEAR Protocol integration for fast transactions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transparent and verifiable game results
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  User-controlled digital assets and rewards
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cross-chain compatibility and interoperability
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack with Orbiting Circles */}
          <div className="mt-16 mb-32">
            <div className="relative h-[600px] flex items-center justify-center">
              <NearFantasyTechStack />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
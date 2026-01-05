import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Briefcase, Building2, Code, Database, Shield, Zap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RBC Experience | Jay\'s Professional Journey',
  description: 'Software Developer experience at RBC - Full-stack development and API-driven features in Advice Centre platforms.',
  keywords: ['RBC', 'software developer', 'full-stack', 'API development', 'banking', 'experience'],
}

export default function RBCPage() {
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
            href="/experience"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Experience
          </Link>
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-5xl font-bold text-white">
              Software Developer
            </h1>
          </div>
          <p className="text-blue-600 font-semibold text-2xl mb-4">RBC</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Company Image/Demo */}
          <div className="mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-xl flex items-center justify-center">
              <Building2 className="w-32 h-32 text-white opacity-30" />
            </div>
          </div>
          <div className="justify-center mt-8 mb-8">
                <p className="text-md text-gray-300  mx-auto ">
                Royal Bank of Canada (RBC) is Canada’s largest bank and the country’s largest company by total assets, with over CAD $2 trillion in assets. It operates across personal and commercial banking, wealth management, insurance, investor services, and capital markets, supported by a diversified global presence. Globally, RBC consistently ranks among the top 15–25 largest banks in the world by assets, placing it alongside the world’s leading financial institutions and underscoring its scale, stability, and international significance.                </p>
            </div>

          {/* Experience Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Role</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a Software Developer at RBC, I worked within the Advice Centre platforms team, contributing to critical systems that serve customers across the bank. This role provided hands-on experience with enterprise-scale applications and best practices in financial technology development.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Collaborating closely with senior engineers, I gained exposure to the complexities of building secure, compliant, and scalable systems in a regulated financial environment. The work emphasized code quality, security best practices, and creating solutions that serve millions of customers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Responsibilities</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Full-stack development for Advice Centre platforms
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Design and implement API-driven features and integrations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborate with senior engineers on architecture decisions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build secure and scalable systems adhering to bank standards
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Write clean, maintainable code with comprehensive testing
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Participate in code reviews and technical discussions
                </li>
              </ul>
            </div>
          </div>

          {/* Technologies & Skills */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Technologies & Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Frontend</h3>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Modern UI frameworks</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Backend</h3>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>API Development</li>
                  <li>RESTful Services</li>
                  <li>Microservices Architecture</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Practices</h3>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>Security Best Practices</li>
                  <li>Code Quality & Testing</li>
                  <li>Agile Development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Key Achievements</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Contributed to critical features used across RBC's Advice Centre platforms, serving millions of customers</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Collaborated with senior engineers to implement secure, scalable API-driven solutions</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Gained valuable experience with enterprise software development practices in the financial industry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

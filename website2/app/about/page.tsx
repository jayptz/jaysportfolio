import Link from 'next/link'
import { ArrowLeft, Camera, Gamepad2, Calendar, BookOpen } from 'lucide-react'
import { motion } from '@/lib/motion'
import { SpinningText } from '@/components/magicui/spinning-text'
import Image from 'next/image'

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
        {/* Navigation Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
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
          meet the Panda
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300">
            {/* Key Achievements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">What I&apos;ve Been Building</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  I&apos;ve been fortunate to work on some pretty exciting projects! I'm currently building <span className="text-white- font-bold">ResDex</span>, 
                  a mentorship and research platform that connects students with opportunities, and created 
                  <span className="text-green-400 font-semibold"> MyBuddy</span>, a mental health AI companion that provides emotional support and guidance that won
                  <span className="text-yellow-400 font-semibold"> 2nd place at SerenityHacks</span>. More recently, I published the 
                  <span className="text-blue-400 font-semibold"> G1 App</span>, a mobile driving testing quiz that&apos;s helped over 
                  <span className="text-blue-400 font-semibold"> 500+ users</span> pass their driving tests.
                </p>
                <p className="leading-relaxed">
                  I&apos;m also working as an AI code reviewer at <span className="text-white-400 font-bold"> Outlier AI</span>, 
                  where I get to dive deep into code quality and help shape the future of AI-assisted development.
                </p>
              </div>
            </div>
            {/* Academic Background */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Academic Journey</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  I&apos;m a third-year <span className="text-white font-bold">Computer Science</span> student at 
                  <span className="text-purple-700 font-semibold"> Wilfrid Laurier University</span>, where I've built a strong foundation in both practical software development and core computer science theory. My coursework has covered essential areas such as data structures, algorithm analysis, and object-oriented design, giving me the tools to build and scale efficient, maintainable systems.
                </p>
                <p className="leading-relaxed">
                  Outside of class, I've taken initiative to explore areas like AI-powered automation, cloud infrastructure, and human-centered design through hands-on projects, hackathons, and co-op experience. I've developed full-stack web platforms, mobile apps, and real-time analytics tools using Python, JavaScript, C++, and AWS—translating theory into production-level code.
                </p>
                <p className="leading-relaxed">
                  Heading into my third year, I'm excited to deepen my focus in AI, distributed systems, and quantum computing, with a goal of developing tools that push the boundaries of human-computer interaction and ethical technology design.
                </p>
              </div>
            </div>

            {/* Academic Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-gray-400 text-base lg:text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white" /> 
                  Details
                </h3>
                <ul className="text-gray-300 text-sm lg:text-base space-y-2 mb-4">
                  <li>Honours Bachelors of Science</li>
                  <li>3.89 GPA</li>
                  <li>Computer Science</li>
                  <li>September 2023 – Present</li>
                </ul>
                <div className="flex justify-start items-center h-24 pl-15 pt-4 relative">
                  <div className="absolute-bottom">
                    <SpinningText 
                      className="text-white text-sm font-bold"
                      duration={15}
                      radius={6}
                    >
                     • Wilfrid • Laurier • University 
                    </SpinningText>
                                         <div className="absolute inset-0 flex items-center justify-center z-10">
                       <Image 
                         src="/WilfridLaurierUniversity.jpg" 
                         alt="Laurier University" 
                         width={32}
                         height={32}
                         className="rounded-full object-cover"
                       />
                     </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-gray-400 text-base lg:text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-white" /> 
                  Relevant Courses
                </h3>
                <ul className="text-gray-300 text-sm lg:text-base space-y-2">
                  <li>Object-Oriented Programming (CP213) A+</li>
                  <li>Data Structures I & II (CP164, CP264) A+</li>
                  <li>Algorithm Design and Analysis (CP312) A</li>
                  <li>Discrete Structures for Computer Science (CP214) A-</li>
                  <li>Intro to Microprocessors (CP216) A</li>
                  <li>Digital Electronics (CP220) A+</li>
                  <li>Probability & Statistics for Science (ST230) A-</li>
                  <li>Software Engineering (CP317) A+</li>
                  <li>Artificial Intelligence (CP468) Current </li>
                  <li>Machine Learning (CP322) Current </li>
                  <li>Databases I (CP363)Current </li>
                </ul>
              </div>
            </div>



            {/* Creative Interests */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Beyond the Code</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  When I&apos;m not coding, I&apos;m usually behind a camera! I love capturing moments and stories through a lens — there&apos;s something magical about seeing the world through a different perspective.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/photos"
                    className="inline-flex items-center px-6 py-3 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    view my photography
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
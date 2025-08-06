import Link from 'next/link'
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

// Define color variables
const fadedLabel = '#9CA3AF'
const textColor = '#FFFFFF'
const fadedText = '#D1D5DB'

// Icon aliases to match the existing code
const IconCalendar = Calendar
const IconStack2 = BookOpen


export const metadata: Metadata = {
  title: 'School | Jay&apos;s Education',
  description: 'My academic journey at Wilfrid Laurier University studying Computer Science.',
  keywords: ['education', 'computer science', 'university', 'academic', 'learning'],
}

export default function SchoolPage() {
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
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            back to home
          </Link>
        </div>

        {/* Project Header */}
                 
          <div className="mb-8">
            <div className="w-full h-full  from-gray-800 to-black rounded-xl overflow-hidden flex justify-center items-center">
              <Image 
                src="/WilfridLaurierUniversity.jpg" 
                alt="Wilfrid Laurier University Campus" 
                width={800}
                height={400}
                className="w-200 h-full object-cover object-center rounded-xl"
              />
            </div>
          </div>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Wilfrid Laurier University
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6 left-aligned">
            education
          </p>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto">


          {/* Project Details */}
          <div className="grid md:grid-cols gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4"></h2>
              <p className="text-gray-300 leading-relaxed mb-4">
              I&apos;m a third-year Computer Science student at Wilfrid Laurier University, where I&apos;ve built a strong foundation in both practical software development and core computer science theory. My coursework has covered essential areas such as data structures, algorithm analysis, and object-oriented design, giving me the tools to build and scale efficient, maintainable systems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
              Outside of class, I&apos;ve taken initiative to explore areas like AI-powered automation, cloud infrastructure, and human-centered design through hands-on projects, hackathons, and co-op experience. I&apos;ve developed full-stack web platforms, mobile apps, and real-time analytics tools using Python, JavaScript, C++, and AWS—translating theory into production-level code.              
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
              Heading into my third year, I&apos;m excited to deepen my focus in AI, distributed systems, and quantum computing, with a goal of developing tools that push the boundaries of human-computer interaction and ethical technology design.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4"></h2>
              <ul className="space-y-2 text-gray-300">
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4"></h2>
              <ul className="space-y-2 text-gray-300">
              </ul>
            </div>
          </div>
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
            {/* Timeline */}
            <div>
              <h3
                style={{
                  color: fadedLabel,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconCalendar size={"0.8rem"} color={textColor} /> Details
              </h3>
              <ul style={{ color: fadedText, fontSize: "1rem" }}>
                <li>Honours Bachelors of Science</li>
                <li>10.93 GPA</li>
                <li></li>
                <li>Computer Science</li>
                <li>September 2023 – Present</li>
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h3
                style={{
                  color: fadedLabel,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconStack2 size={"0.8rem"} color={textColor} /> Relevant Courses
              </h3>
              <ul style={{ color: fadedText, fontSize: "1rem" }}>
                <li>Object-Oriented Programming (CP213) A+</li>
                <li>Data Structures I & II (CP164, CP264) A+</li>
                <li>Algorithm Design and Analysis (CP312) A</li>
                <li>Discrete Structures for Computer Science (CP214) A-</li>
                <li>Intro to Microprocessors (CP216) A</li>
                <li> Digital Electronics (CP104) A+</li>
                <li>Probability & Statistics for Science (ST230) A-</li>
                <li>Software Engineering (CP317) A+</li>
              </ul>
            </div>
          </div>

         
        </div>
      </div>
    </main>
  )
}

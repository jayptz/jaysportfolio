import Link from 'next/link'
import ProjectBentoGrid from '@/components/ProjectBentoGrid'
import image from 'next/image'
const projects = [
  {
    id: '1',
    title: 'GroundLink',
    description: 'GroundLink is a real-time dashboard for managing and tracking fieldwork through live maps and mobile task updates.',
    image: '',
    imagePosition: '',
    githubUrl: 'https://github.com/jayptz/GroundLink',
    liveUrl: '',
    slug: 'groundlink'
  },
  {
    id: '2',
    title: 'ScoreWise',
    description: 'ScoreWise is a real-time NBA stats tracker that delivers personalized fantasy insights by SMS ',
    image: '',
    imagePosition: '',
    githubUrl: 'https://github.com/jayptz/ScoreWise',
    liveUrl: '',
    slug: 'scorewise'
  },
  {
    id: '3',
    title: 'G1 App',
    description: 'A mobile app that helps Ontario drivers study for the G1 test. Features flashcards, randomized quizzes, and a clean user-friendly interface.',
    image: '/G1.webp',
    imagePosition: 'object-center',
    githubUrl: '',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.smitpatel.g1app&pli=1',
    slug: 'g1app'
  },
  {
    id: '4',
    title: 'Near Fantasy',
    description: 'A blockchain-based fantasy app built on NEAR Protocol. It enables secure, decentralized team management and gameplay.',
    image: '',
    imagePosition: '',
    githubUrl: 'https://github.com/jayptz/NEAR-Fantasy',
    liveUrl: '',
    slug: 'near-fantasy'
  },
  {
    id: '5',
    title: 'MyBuddy',
    description: 'MyBuddy is an AI mental health chatbot that uses GPT-4 to simulate supportive, empathetic conversations in a private and friendly interface.',
    image: '/MyBuddyWebsite.png',
    imagePosition: 'object-center',
    githubUrl: 'https://github.com/jayptz/MyBuddy',
    liveUrl: '',
    slug: 'mybuddy'
  }
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-black">
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            panda builds
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            projects grown from scratch, debugged with tears. each project represents a challenge and learning opportunity.
            from curious experiements to polished products. 🛠️🐼
          </p>
        </div>

        <ProjectBentoGrid projects={projects} />

        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 
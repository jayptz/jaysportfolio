import Link from 'next/link'

export default function ContactPage() {
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

      <div className="text-center z-10">
        <h1 className="text-5xl font-extrabold text-white mb-8">
          reach the grove
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          want to chat? whether it's collaboration, questions, or Just a hello, i'd love to hear from you.
          heres where to find me. 🐾📨
        </p>
        
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
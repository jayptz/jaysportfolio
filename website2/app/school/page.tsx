import Link from 'next/link'

export default function SchoolPage() {
  return (
    <main className="relative min-h-screen bg-green-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex justify-around opacity-20 -z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-green-800 rounded-lg h-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        <h1 className="text-5xl font-extrabold text-green-900 mb-8">
          School Page
        </h1>
        <p className="text-xl text-green-700 mb-8 max-w-2xl">
          Learn about my educational background and academic achievements.
        </p>
        
        <Link 
          href="/"
          className="px-6 py-3 rounded-full border border-green-400 bg-green-100 text-green-900 hover:bg-green-200 transition font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
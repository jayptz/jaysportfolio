import Link from 'next/link'

export default function AboutPage() {
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

      <div className="text-center z-10 max-w-4xl px-6">
        <h1 className="text-5xl font-extrabold text-white mb-8">
          about the panda
        </h1>
        
        <div className="space-y-6 text-lg text-gray-300 mb-8">
          <p>
            Hey there! I'm Jay, a passionate developer who loves creating digital experiences that make people smile. 
            When I'm not coding, you'll find me exploring new technologies, building projects, or just vibing with some good music.
          </p>
          
          <p>
            I believe in clean code, user-centered design, and the power of technology to solve real-world problems. 
            Every project I work on is an opportunity to learn something new and push the boundaries of what's possible.
          </p>
          
          <p>
            My journey in tech started with curiosity and has evolved into a passion for creating meaningful digital solutions. 
            Whether it's web development, mobile apps, or exploring emerging technologies, I'm always excited to dive into new challenges.
          </p>
          
          <p>
            When I'm not behind a screen, you might catch me enjoying nature, reading a good book, or experimenting with new recipes. 
            Life's all about balance, right? 🐼✨
          </p>
        </div>
        
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
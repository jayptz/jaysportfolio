export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Nav */}
      <nav className="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/80">
        <div className="mx-auto max-w-2xl px-6 py-4 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium">
          <a href="#hello" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Hello</a>
          <a href="#about" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">About me</a>
          <a href="#projects" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Experience</a>
          <a href="#social" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Social media</a>
        </div>
      </nav>

      <main className="mx-auto max-w-2xl px-6 py-16 space-y-24">
        {/* Hello */}
        <section id="hello" className="scroll-mt-20 min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Hello.</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Welcome to my portfolio.
          </p>
        </section>

        {/* About me */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-2">About me</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Add a short bio here. Share your background, interests, and what you do.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-2">Projects</h2>
          <ul className="mt-4 space-y-4">
            <li className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-medium">Project one</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Brief description of your project.</p>
            </li>
            <li className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-medium">Project two</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Brief description of your project.</p>
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-2">Experience</h2>
          <ul className="mt-4 space-y-4">
            <li className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-medium">Role / Company</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Dates · Short description of what you did.</p>
            </li>
            <li className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-medium">Role / Company</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Dates · Short description of what you did.</p>
            </li>
          </ul>
        </section>

        {/* Social media */}
        <section id="social" className="scroll-mt-20 pb-16">
          <h2 className="text-2xl font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-2">Social media</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors">LinkedIn</a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors">GitHub</a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors">Twitter / X</a>
          </div>
        </section>
      </main>
    </div>
  );
}

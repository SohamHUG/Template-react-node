import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiVite, SiRedux, SiTailwindcss, SiThreedotjs, SiReactrouter, SiGreensock, SiTypescript, SiExpress, SiPostgresql, SiDrizzle, SiJsonwebtokens, SiZod } from "react-icons/si"
import { MdSwipe, MdCookie } from "react-icons/md"

function App() {
  const frontendDeps = [
    { name: "React", icon: <FaReact className="text-sky-400" />, link: "https://react.dev" },
    { name: "Vite", icon: <SiVite className="text-purple-500" />, link: "https://vite.dev" },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-700" />, link: "https://redux-toolkit.js.org" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" />, link: "https://tailwindcss.com" },
    { name: "Three.js", icon: <SiThreedotjs className="text-gray-700" />, link: "https://threejs.org" },
    { name: "React Three Fiber + Drei", icon: <SiThreedotjs className="text-indigo-500" />, link: "https://docs.pmnd.rs/react-three-fiber" },
    { name: "React Router", icon: <SiReactrouter className="text-red-500" />, link: "https://reactrouter.com" },
    { name: "GSAP", icon: <SiGreensock className="text-green-500" />, link: "https://gsap.com" },
    { name: "Lenis", icon: <MdSwipe className="text-pink-500" />, link: "https://lenis.studiofreight.com" },
  ]

  const backendDeps = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, link: "https://nodejs.org" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, link: "https://www.typescriptlang.org" },
    { name: "Express", icon: <SiExpress className="text-gray-700" />, link: "https://expressjs.com" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, link: "https://www.postgresql.org" },
    { name: "Drizzle ORM", icon: <SiDrizzle className="text-indigo-500" />, link: "https://orm.drizzle.team" },
    { name: "JWT", icon: <SiJsonwebtokens className="text-purple-500" />, link: "https://jwt.io" },
    { name: "Cookie Parser", icon: <MdCookie className="text-yellow-400" />, link: "https://www.npmjs.com/package/cookie-parser" },
    { name: "Zod", icon: <SiZod className="text-pink-500" />, link: "https://zod.dev" },
    { name: "Dotenv", icon: <SiTypescript className="text-gray-400" />, link: "https://www.npmjs.com/package/dotenv" },
  ]

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-start bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center flex items-center gap-3">
        <span><img src="/vite.svg" alt="vite logo" className="w-10" /></span> <span>React + Vite + Node Template</span>
      </h1>
      <p className="text-lg text-slate-300 mb-12 text-center max-w-2xl">
        This monorepo template combines a modern frontend and a scalable backend, pre-configured with popular libraries to accelerate your development workflow.
      </p>

      {/* Frontend Dependencies */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-bold mb-6">Frontend Dependencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {frontendDeps.map((dep) => (
            <a
              key={dep.name}
              href={dep.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-700 transition shadow-md"
            >
              <span className="text-2xl">{dep.icon}</span>
              <span className="font-semibold">{dep.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Backend Dependencies */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Backend Dependencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {backendDeps.map((dep) => (
            <a
              key={dep.name}
              href={dep.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-2xl hover:bg-gray-700 transition shadow-md"
            >
              <span className="text-2xl">{dep.icon}</span>
              <span className="font-semibold">{dep.name}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-sm text-slate-500 text-center">
        🚀 Built with <span className="text-sky-400">React</span>, <span className="text-purple-500">Vite</span> & <span className="text-green-500">Node.js</span>
      </footer>
    </div>
  )
}

export default App

import { FaReact } from "react-icons/fa"
import { SiVite, SiRedux, SiTailwindcss, SiThreedotjs, SiReactrouter, SiGreensock } from "react-icons/si"
import { MdSwipe } from "react-icons/md"

function App() {
  const dependencies = [
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

  return (
    <div className="min-h-screen w-screen mx-auto flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center flex items-center gap-3">
        <span><img src="/vite.svg" alt="vite logo" className="w-10" /></span> <span>React + Vite Template</span>
      </h1>
      <p className="text-lg text-slate-300 mb-10 text-center max-w-2xl">
        This starter template is pre-configured with modern libraries and tools to help you build performant, interactive, and scalable web applications faster.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {dependencies.map((dep) => (
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

      <footer className="mt-12 text-sm text-slate-500">
        🚀 Built with <span className="text-sky-400">React</span> & <span className="text-purple-500">Vite</span>
      </footer>
    </div>
  )
}

export default App

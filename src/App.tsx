import GridBackground from './components/layout/GridBackground'
import Navbar         from './components/layout/Navbar'
import Footer         from './components/layout/Footer'
import ScanLine        from './components/ui/ScanLine'
import CustomCursor    from './components/ui/CustomCursor'
import Hero            from './components/sections/Hero'
import About           from './components/sections/About'
import Experience      from './components/sections/Experience'
import Projects        from './components/sections/Projects'
import Skills          from './components/sections/Skills'
import Contact         from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-grid-bg text-grid-white font-body">
      <CustomCursor />
      <ScanLine />
      <GridBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

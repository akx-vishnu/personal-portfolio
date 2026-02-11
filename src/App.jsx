import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Placeholder components imports (will be replaced as I build them)
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-primary text-gray-300">
      <Navbar />

      <main>
        {/* Sections will go here */}
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>

        {/* Placeholders for other sections to allow scrolling testing */}
        {/* <section id="about" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">About Section</h2>
        </section>
        <section id="skills" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">Skills Section</h2>
        </section>
        <section id="projects" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">Projects Section</h2>
        </section>
        <section id="services" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">Services Section</h2>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">Contact Section</h2>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}

export default App

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import CodeWorks from "./components/CodeWorks"
import Contact from "./components/Contact"
import DesignWorks from "./components/DesignWorks"
import Technologies from "./components/Technologies"

function App() {

  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <CodeWorks />
      <DesignWorks />
      <Contact />
    </div>
    </>
  )
}

export default App

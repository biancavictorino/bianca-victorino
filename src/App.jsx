import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import CodeWorks from "./components/CodeWorks"
import Contact from "./components/Contact"
import DesignWorks from "./components/DesignWorks"
import { useEffect, useState } from "react"

function App() {

  const [openNavbar, setOpenNavbar] = useState(true)
  let lastScrollY = window.scrollY;
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setOpenNavbar(false);
    }
    else {
      setOpenNavbar(true);
    }
    lastScrollY = currentScrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <About />
      <CodeWorks />
      <DesignWorks />
      <Contact />
    </div>
    </>
  )
}

export default App

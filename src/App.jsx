import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
   <div className='overflow-x-hidden relative'>
    <Navbar/>
    
    {/* Main content container with consistent max-width */}
    <div className='max-w-7xl mx-auto px-6'>
      <HeroSection/>
      <About/>
      <Contact/>
    </div>
    
    {/* Projects section with its own background */}
    <Projects/>
    
    {/* Footer spans full width */}
    <Footer/>
   </div>
  )
}

export default App

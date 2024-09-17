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
    <HeroSection/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
   </div>
  )
}

export default App

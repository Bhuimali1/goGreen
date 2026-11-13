import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import ScrollEffects from './components/ScrollEffects'


function App() {
  return (
    <main className="min-h-screen bg-[#f5f8f2]">
      <ScrollEffects/>
      <Navbar />
      <Hero />
      <Features/>
      <About/>
      <Services/>
      <Footer/>
    </main>
  )
}

export default App
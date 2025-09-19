
import './App.css'
import Footer from './components/elements/Footer'
import Hero from './components/Hero'
import Navbar from './components/navbar'
import Section_1 from './components/Section_1'
import Section_2 from './components/Section_2'
import Section_3 from './components/Section_3'
import Section_4 from './components/Section_4'
import Slider from './components/Slider'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Slider/>
      <Section_1/>
      <Slider/>
      <Section_2/>
      <Slider/>
      <Section_3/>
      <Slider/>
      <Section_4/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App

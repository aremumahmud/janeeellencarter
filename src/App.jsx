
// import './App.css'

import AboutSection from "./components/aboutsection"
import Education from "./components/education"
import Header from "./components/header"
import Hero from "./components/hero"
import MyClientSays from "./components/myClients"
import ProfessionalBackground from "./components/profesional"
import Services from "./components/services"

function App() {

  return (
    <>
      <Header />
      <br />
      <Hero />
      <br />
      <br />
      <br />
      <ProfessionalBackground />
      <AboutSection />
      <br />
      <br />
      <Services />
      <Education />
      <MyClientSays />
    </>
  )
}

export default App


// import './App.css'

import AboutSection from "./components/aboutsection"
import Education from "./components/education"
import Header from "./components/header"
import Hero from "./components/hero"
import MyClientSays from "./components/myClients"
import ProfessionalBackground from "./components/profesional"
import Services from "./components/services"
import Stats from "./components/stats"

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
      <br />
      <Stats />
    </>
  )
}

export default App

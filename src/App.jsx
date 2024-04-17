
import './App.css'

import AboutSection from "./components/aboutsection"
import Contact from "./components/contact"
import CopyWright from "./components/copywright"
import Education from "./components/education"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import MyClientSays from "./components/myClients"
import ProfessionalBackground from "./components/profesional"
import Services from "./components/services"
import Stats from "./components/stats"
import { ReactNotifications } from 'react-notifications-component'
import './css/notification_theme.css'

import { Store } from 'react-notifications-component';
import { useEffect } from 'react'
// import { useEffect } from 'react'

function successMessage(){
  Store.addNotification({
    title: "",
    message: "Message sent Successfully to Jane Ellen Carter.",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
}

function errorMessage(){
  Store.addNotification({
    title: "",
    message: "Message to Jane Ellen Carter failed.",
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    isMobile: true,
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
}


function App() {

  useEffect(()=>{
    if(window.location.hash === '#success_message'){
      successMessage()
    }else if(window.location.hash === '#error_message'){
      errorMessage()
    }
  },[])

  return (
    <>
    <ReactNotifications />
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
      <Stats />
      <Contact />
      <br /><br />
      <Footer />
      <CopyWright />{/* */}
    </>
  )
}

export default App

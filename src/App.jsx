
import './App.css'

import { ReactNotifications } from 'react-notifications-component'
import './css/notification_theme.css'

import { Store } from 'react-notifications-component';
import { useEffect } from 'react'
import Home from './src2/components/Home'
// import { useEffect } from 'react'
import './src2/css/responsive.css'
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
     
     <Home />
      
    </>
  )
}

export default App

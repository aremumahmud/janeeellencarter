import "../css/contact.css";
import jane from '../assets/contact.jpg'

import {FaMessage} from 'react-icons/fa6'

import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Contact() {

  
  useEffect(() => {
    // Configure the scroll reveal animation
    ScrollReveal().reveal('.up', {
      delay: 200,
      origin: 'bottom',
      duration: 800,
      scale: 1,
    });
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="profession client stat">
        <p className="client_title contact_title up">Contact Me.</p>
        <p className="up">Feel free to send a message through the contact box. I will send a reply within 24 hours</p>
      </div>
      <br />
      <div className="form">
        <form action="">
          <input className="up" type="text" placeholder="Full Name"/>
          <input className="up" type="email" placeholder="Email address"/>
          <input className="up" type="tel" placeholder="Phone number"/>
          <input className="up" type="text" placeholder="Home address / Location" />
          <textarea className="up"  name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button className="up"  type="submit">Send me a message <FaMessage /></button>
        </form>
        <div className="image1">
        <div className="image up">
          <img src={jane} alt="" />
          <div className="ball"></div>
          <div className="ball1"></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

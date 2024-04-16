import "../css/footer.css";
import logo from "../assets/logo.png";
import { FaAddressCard, FaEnvelope, FaPhone, FaCircleInfo, FaGear, FaHouse, FaStar } from "react-icons/fa6";


import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Footer() {

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
    <div className="footer">
      <div className="footer_summary">
        <div className="logo">
          <img className="up" src={logo} alt="" />
        </div>
        <div className="text up">
          Let&apos;s navigate the complexities of wealth together, crafting a
          personalized roadmap for your goals. From investments to retirement
          planning, I&apos;m here to secure your prosperity. Let&apos;s start
          building your brighter tomorrow today.
        </div>
      </div>
      <div className="strand ">
        <p className="title up">Company</p>
        <ul className="up">
          <li><FaHouse /> Home</li>
          <li><FaCircleInfo /> About</li>
          <li><FaGear /> Services</li>
          <li><FaStar /> Reviews</li>
        </ul>
      </div>
      <div className="strand">
        <p className="title up">Contacts</p>
        <ul className="up">
          <li><FaEnvelope /> hello@janeellencarter.com</li>
          <li><FaPhone /> +1 281-823-9633</li>
          <li><FaAddressCard /> ONE BRYANT PARK NEW YORK, NY 10036</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

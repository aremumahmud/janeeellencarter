import "../css/contact.css";
import jane from '../assets/contact.jpg'


function Contact() {
  return (
    <div className="contact">
      <div className="profession client stat">
        <p className="client_title contact_title">Contact Me.</p>
        <p>Feel free to send a message through the contact box. I will send a reply within 24 hours</p>
      </div>
      <br />
      <div className="form">
        <form action="">
          <input type="text" placeholder="Full Name"/>
          <input type="email" placeholder="Email address"/>
          <input type="tel" placeholder="Phone number"/>
          <input type="text" placeholder="Home address / Location" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button type="submit">Send me a message</button>
        </form>
        <div className="image1">
        <div className="image">
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

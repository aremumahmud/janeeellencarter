import "../css/hero2.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
// import Header from "./Header";
import Button from "./button";

function Hero() {
  useEffect(() => {
    // Configure the scroll reveal animation
    ScrollReveal().reveal(".up", {
      delay: 200,
      origin: "bottom",
      duration: 800,
      scale: 1,
    });
  });
  return (
    <>
      {" "}
      <div className="hero">
        <div className="section1">
          <p className="main up">
    
Leave Your Wealth Management To The Professionals{" "}
          </p>
          <p className="write_up up">
            <div className="line"></div>
            <span>  {
                            `Let's navigate the complexities of wealth together, crafting a personalized roadmap for your goals. 
                            From investments to retirement planning, I'm here to secure your prosperity. 
                            Let's start building your brighter tomorrow today.`
                        }</span>
         
          </p>
          <Button />
          <br />
        </div>
        {/* <br /> */}
      </div>
    </>
  );
}

export default Hero;

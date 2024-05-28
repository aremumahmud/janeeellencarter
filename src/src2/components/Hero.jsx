import "../css/hero.css";

import { useEffect, useState } from "react";

import Button from "./button";

function Hero() {
  // useEffect(() => {
  //   // Configure the scroll reveal animation
  //   ScrollReveal().reveal(".up", {
  //     delay: 200,
  //     origin: "bottom",
  //     duration: 800,
  //     scale: 1,
  //   });
  // });

  let [hero , setHero] = useState(0)
  
let tests = ["Leave Your Wealth Management To The Professionals"," Invest Confidently: Absolute Returns with Robust Risk Management",'Unlock Market Insights: Stay Ahead with Gullbridge’s Expert Strategies']
let animations = [
  "animate__animated animate__fadeInLeft",
  "animate__animated animate__fadeInDown",
  "animate__animated animate__fadeInLeft"
]
//   useEffect(()=>{
     
//     let interval = setInterval(()=>{
      
//       setHero(onting => onting >= 2 ? 0: (onting + 1))
//     } , 5000)

//     return ()=>clearInterval(interval)
// }, [])

  return (
    <>
      {" "}
      <div className="hero">
        <div className="section1">

          <p className={"main up "+ animations[hero]}>
            {console.log(hero)}
           {tests[hero]}
          </p>
          <p className="write_up up">
            <div className="line"></div>
            <span> Let's navigate the complexities of wealth together, crafting a personalized roadmap for your goals. 
                            From investments to retirement planning, I'm here to secure your prosperity. 
                            Let's start building your brighter tomorrow today.</span>
         
          </p>
          <a href="https://forms.gle/5WFuiwxC4BC7jTbs5"><Button /></a>
          <br />
        </div>
        {/* <br /> */}
      </div>
    </>
  );
}

export default Hero;

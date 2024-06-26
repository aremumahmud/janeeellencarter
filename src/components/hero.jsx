import '../css/hero.css'
import jane from '../assets/jane.jpg'
import jane1 from "../imgs/about.jpeg";
import 'animate.css'

// import right from '../assets/right1.jpg'
import {FaMessage} from 'react-icons/fa6'
import { useEffect, useState } from 'react';


function Hero(){

   
    let [on , setOn] = useState(false)

    useEffect(()=>{
     
        let interval = setInterval(()=>{
            setOn(onting => !onting)
        } , 3000)

        return ()=>clearInterval(interval)
    }, [])
    return(
        <div className="hero">
            <div className="hero_left">
                <div className="intro_wrapper">
                {/* <div className="jane_logo">
                     <img src={jane} />
                </div> */}
                <div className="text">
                    <div className="name animate__animated animate__fadeInLeft">
                        <p>Wealth Management With</p>
                        <p></p>
                        <p>JANE ELLEN CARTER</p>
                    </div>
                    
                    <p className='animate__animated animate__fadeIn' style={{lineHeight:"1.5rem"}}> 
                        {
                            `Let's navigate the complexities of wealth together, crafting a personalized roadmap for your goals. 
                            From investments to retirement planning, I'm here to secure your prosperity. 
                            Let's start building your brighter tomorrow today.`
                        }
                    </p>
                    <div className="cta"><a href="#contact">Contact me <FaMessage /></a></div>
                </div>
                
                </div>
                
                
            </div>
            <div className="hero_right">
                
             <div className="image">
                {
                    on? <img className='animate__animated animate__fadeIn' src={jane} alt="" />: <img   src={jane1} alt="" />
                }
               
                <div className="ball"></div>
                <div className="ball1"></div>
             </div>
            </div>
        </div>
    )
}


export default Hero
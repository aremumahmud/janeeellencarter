import '../css/header.css'
import logo from '../assets/logo.png'
import {FaBars, FaCircleInfo, FaGear, FaHouse, FaMessage, FaStar} from 'react-icons/fa6'
import { useState } from 'react'

function Header (){

        const [on , setOn] = useState(false)
        return (
        <div className="header_wrapper">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="hamburger" onClick={()=>{setOn(prev => !prev)}}>
                    <FaBars  />
                </div>
                <div className="menus">
                <ul className='ul'>
                    <a href="/"><li><FaHouse /> Home</li></a>
                    <a href="#about"><li><FaCircleInfo /> About</li></a>
                    <a href="#services"><li><FaGear /> Services</li></a>
                    <a href="#reviews"><li><FaStar /> Reviews</li></a>
                </ul>
            </div>
            <div className="menus1" style={{display: on?'block':"none"}}>
                <ul className='ul1'>
                    <a href="/"><li><FaHouse /> Home</li></a>
                    <a href="#about"><li><FaCircleInfo /> About</li></a>
                    <a href="#services"><li><FaGear /> Services</li></a>
                    <a href="#reviews"><li><FaStar /> Reviews</li></a>
                </ul>
            </div>
            <a href="#contact"> <div className="cta">
               

                     Contact me
                <FaMessage />
               
               
            </div> </a>
            </div>

            
        </div>
    )
}


export default Header
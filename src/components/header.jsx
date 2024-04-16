import '../css/header.css'
import logo from '../assets/logo.png'
import {FaCircleInfo, FaGear, FaHouse, FaMessage, FaStar} from 'react-icons/fa6'

function Header (){
    return (
        <div className="header_wrapper">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menus">
                <ul>
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
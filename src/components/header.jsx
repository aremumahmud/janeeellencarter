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
                    <li><FaHouse /> Home</li>
                    <li><FaCircleInfo /> About</li>
                    <li><FaGear /> Services</li>
                    <li><FaStar /> Reviews</li>
                </ul>
            </div>
            <div className="cta">
                Contact me
                <FaMessage />
            </div>
            </div>

            
        </div>
    )
}


export default Header
import '../css/header.css'
import logo from '../assets/logo1.jpg'
import {FaBars, FaDollarSign, FaGears, FaHandshake, FaHouse, FaNewspaper, FaPhone, FaStar, FaX} from 'react-icons/fa6'
import { useEffect, useState } from 'react'

function Header(){

    let [on , setOn] = useState(false)

    useEffect(()=>{
        window.onresize = ()=>{
            setOn(false)
        }
    } , [])

    return (
       <div className="ming">
         <div className="header_wrap">
<div className="left_menu">
    <ul>
        <li><FaHouse /><a href="/">Home</a></li>
        <li><FaGears /><a href="#services">Services</a></li>
     
    </ul>
</div>
<div className="logo">  <a href="/">LOGO</a></div>
<div className="right_menu">
<ul>
        <li><FaHandshake /> <a href="#about">What we do</a></li>
        <li><FaStar />Reviews</li>
     <li><FaPhone />  <a href="#contact">Contacts</a> </li>
    </ul>
</div>
<div className="hidden_menu" onClick={()=>setOn(on_=>!on_)}>
    {
        on ?<FaX />:<FaBars />
    }
    
</div>
        </div>
        <div className="menu" style={on?{display:'block'}:{display:'none'}}>
            <ul>
            <a href="/"><li><FaHouse />Home</li></a>
            <li><FaGears />Services</li>
            <li><FaNewspaper />News & Insights</li>
            <li><FaHandshake />What we do</li>
            <li><FaDollarSign />Funding</li>
            <li><FaPhone />Contacts</li>
            </ul>
        </div>
       </div>
       
    )
}


export default Header
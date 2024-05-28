import '../css/header2.css'
import logo from '../assets/logo.png'
import {FaDollarSign, FaGears, FaHandshake, FaHouse, FaNewspaper, FaPhone} from 'react-icons/fa6'

function Header(){
    return (
        <div className="header_wrap">
<div className="left_menu">
    <ul>
        <li><FaHouse />Home</li>
        <li><FaGears />Services</li>
        {/* <li><FaNewspaper />News & Insights</li> */}
    </ul>
</div>
<div className="logo"><img src={logo} alt="" /></div>
<div className="right_menu">
<ul>
        <li><FaHandshake />What we do</li>
        <li><FaDollarSign />Rewiews</li>
        <li><FaPhone />Contacts</li>
    </ul>
</div>
        </div>
    )
}


export default Header
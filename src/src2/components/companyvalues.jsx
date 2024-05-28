import '../css/companyvalues.css'
import svg1 from '../assets/gea.png'
import svg2 from '../assets/grow-removebg-preview.png'
import svg4 from '../assets/bussiness.png'
import svg3 from '../assets/message-removebg-preview.png'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function CompanyValues(){
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal(".up", {
          delay: 200,
          origin: "bottom",
          duration: 800,
          scale: 1,
        });
    })
    return (
<div className="values_wrap">
{/* <p className="title_v up">Our Company Values</p> */}
<div className="values">
<div className="value">
    <div className="img up">
             <img src={svg3} alt="" />
            </div>
            <div className="content up">
        <p>
        Client-Centric Solutions </p>
        <p>Create enduring bonds with your clients by providing individualized financial solutions that are catered to their specific requirements and objectives.
</p>
        </div>
    </div>
    <div className="value">
        <div className="img up">
 <img src={svg1} alt="" />
        </div>
       <div className="content up">
<p>
Diversified Investment Approach </p>
<p>Spreading your investments throughout a number of asset classes and industries will help you maximize profits while lowering risk.
</p>
       </div>
    </div>
    <div className="value">
    <div className="img up">
              <img src={svg2} alt="" />
            </div>
       <div className="content up">
        <p>
        Advanced Risk Management</p>
        <p>By recognizing, evaluating, and reducing investment risks, you can safeguard client funds.</p>
       </div>
    </div>
   
    <div className="value">
    <div className="img up">
             <img src={svg4} alt="" />
            </div>
            <div className="content up">
        <p>ESG and Sustainable Investing</p>
        <p> In order to encourage sustainable growth and ethical investing, incorporate environmental, social, and governance (ESG) factors into investment procedures.</p>
        </div>
    </div>
</div>
</div>
    )
}

export default CompanyValues
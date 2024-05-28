import '../css/companyvalues.css'
import '../css/team.css'
import svg1 from '../assets/team-img-02.jpg'
import svg2 from '../assets/team-img-03.jpg'
import svg4 from '../assets/team-img-04.jpg'
import svg3 from '../assets/IMG-20240525-WA0060.jpg'
import svg5 from '../assets/team-img-01.jpg'
import svg6 from '../assets/profile-pic 18.png'

function OurTeam(){
 
    return (
<div className="values_wrap team">
<p className="title_v up">Our Team of Experts</p>
<div className="values">
<div className="value">
        <div className="img up">
 <img src={svg5} alt="" />
        </div>
        <br />
        <div className="content_">
            <p>Joseph Mozube </p><p>Chief Executing Officer</p>
        </div>
     
    </div>
    
    <div className="value">
        <div className="img up">
 <img src={svg1} alt="" />
        </div>
        <br />
        <div className="content_">
            <p>Tillman Allen </p><p>Chief Operating Officer</p>
        </div>
     
    </div>
    <div className="value">
    <div className="img up">
              <img src={svg2} alt="" />
            </div>
            <br />
            <div className="content_">
            <p>Muhammad J.A </p><p>Managing Partner, U.A.E</p>
           
        </div>
    </div>
    <div className="value">
    <div className="img up">
             <img src={svg4} alt="" />
            </div>
            <br />
            <div className="content_">
            <p>Chris Rutledge </p><p>Managing Partner</p>
        </div>
            
    </div>
    
    
</div>
<br /><br /><br />
</div>
    )
}

export default OurTeam
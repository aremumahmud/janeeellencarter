
import { useState } from 'react';
import aboutImg from '../assets/hero1.jpg'
import "../css/aboutus.css";
import Button from './button';



function AboutUs() {

  let [less , setLess] = useState(0)

  return (
    <section  style={{paddingLeft:'4.5rem'}} className="about-section" id="about">
     <br />
      <div className="container">
        <div className="row clearfix" style={{ display: "flex", alignItems:'center' }}>
          <div
            className="content-column col-md-6 col-sm-12 col-xs-12 up"
            style={{ width: "50%" }}>
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Us</div>
                <h2 className='titi'>
                If your goal is to become
financially secure make money
to spend money.

                </h2>
              </div>
              <div className="text">
              <p className="up">
          XYZ Financial is a premier financial consulting and stock brokerage firm with over 18 years of experience, having worked with five prestigious investment firms across the United States. Our team has passed seven qualification exams and collectively holds 52 state licenses. We proudly partner with MERRILL LYNCH, PIERCE, FENNER & SMITH INCORPORATED (CRD#: 7691), managing portfolios for both individuals and companies.
          </p>
          
          <p  className="up">
          We have conducted extensive research on finance markets, developing numerous profit accumulation strategies that have achieved a 99% success rate when implemented in our clients' portfolios. For over two decades, XYZ Financial has specialized in investment management and wealth advice, helping clients achieve their financial goals. {!less &&<><br /><span onClick={()=>setLess(true)}  className="read_more">read more ...</span></>}
          </p>
          {
            less&&<p className="up">
           Our services cater to high-net-worth individuals, families, and retirees, covering investment management, financial planning, and retirement strategies. Clients rely on us for strength and peace of mind through quality financial advice. Our commitment revolves around achievement, building relationships, and upholding integrity. <br /> <span onClick={()=>setLess(false)}  className="read_more">less ...</span>
          </p>
       }
            </div>
              {/* <div className="email">
                Request Quote:{" "}
                <span className="theme_color">freequote@gmail.com</span>
              </div> */}
             <a className='bout' style={{marginLeft:'0'}} href="https://forms.gle/5WFuiwxC4BC7jTbs5"><Button /></a>
            </div>
          </div>

          <div className="image-column col-md-6 col-sm-12 col-xs-12 up">
            <div
              className="inner-column "
              data-wow-delay="0ms"
              data-wow-duration="1500ms">
              <div className="image">
                <img src={aboutImg }alt="" />
                <div className="overlay-box">
                  <div className="year-box">
                    <span className="number">6</span>
                    <div style={{color:'rgb(251 251 251)'}}>
                     Tested <br />&{" "}
                    <br />Trusted
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

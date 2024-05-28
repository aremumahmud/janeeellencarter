import jane from "../assets/hh.jpg";
import "../css/about.css";
import { FaCalculator, FaChartBar, FaCoins, FaHouseLock } from "react-icons/fa6";

import ScrollReveal from 'scrollreveal';
import { useEffect, useState } from 'react';

function AboutSection() {


   let [less , setLess] =  useState (false)


    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.up', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
  return (
    <div className="about_section" id="about">
       
      <div className="about_left">
        <div className="image up">
          <img src={jane} alt="" />
          <div className="ball"></div>
          <div className="ball1"></div>
        </div>
      </div>
      <div className="about_right">
      <div className="icon client_image up mobile" >
              {/* <FaWandMagicSparkles /> */}
              <img src={jane} alt="" />
            </div>
        <p className="about_head up">About XYZ Financial</p>

        <div className="content">
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
        <br />
        {/* <div className="skills">
          <p className="skill_header">My Skills</p>

          <div className="skillsetscard">
            <div className="card_wrap up">
              {" "}
              <div className="card">
                <div className="icon">
                  <FaChartBar color="#3A3238" />
                  Financial Consulting
                </div>
                <div className="skill_level">Skill level: 99%</div>
              </div>
            </div>
            <div className="card_wrap up">
              <div className="card">
                <div className="icon">
                  <FaCoins color="#6E4555" />
                  Digital Assets Trading
                </div>
                <div className="skill_level">Skill level: 99%</div>
              </div>
            </div>
            <div className="card_wrap up">
              <div className="card">
                <div className="icon">
                  <FaCalculator color="#E8B4BC"/>
                  Tax Planning
                </div>
                <div className="skill_level">Skill level: 99%</div>
              </div>
            </div>

            <div className="card_wrap up">
              {" "}
              <div className="card">
                <div className="icon">
                  <FaHouseLock color="#D282A6" />
                  Real Estate Planning
                </div>
                <div className="skill_level">Skill level: 97%</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutSection;

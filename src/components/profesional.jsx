import "../css/proffesion.css";
import {
  FaArrowUpRightFromSquare,
  FaCalendar,
  FaCertificate,
} from "react-icons/fa6";

import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function ProfessionalBackground() {
  useEffect(() => {
    // Configure the scroll reveal animation
    ScrollReveal().reveal(".up", {
      delay: 200,
      origin: "bottom",
      duration: 800,
      scale: 1,
    });
  }, []);
  return (
    <div className="profession">
      <div className="summary up">
        <p>Professional Background</p>
        <p className="summary_content">
          {" "}
          With over 18 years in the finance industry, XYZ Financial excels in wealth management. Partnering with professionals licensed in 36 states, the firm offers extensive expertise. For more details, Contact Us.
        </p>

        <a href="https://brokercheck.finra.org/individual/summary/1241156">
          <div className="btn">
            Visit Broker Check <FaArrowUpRightFromSquare />
          </div>
        </a>
      </div>

      <div className="some_summary">
        <div className="some_wrapper up">
          <div className="some">
            <div className="icon color-d28">
              <FaCalendar />
            </div>
            <div className="content">
              <p className="content_title">Years of Exp.</p>
              <p className="content_content">
                {" "}
             
With over 18 years in the finance industry, XYZ Financial has developed a reputation for excellence in wealth management. Our seasoned professionals bring extensive expertise, ensuring top-tier service and solid financial strategies for our clients.
              </p>
            </div>
          </div>
        </div>
        <div className="some_wrapper up">
          <div className="some">
            <div className="icon">
              <FaCertificate />
            </div>
            <div className="content">
              <p className="content_title">State licences</p>
              <p className="content_content">
                {" "}
            
XYZ Financial partners with professionals licensed in 36 states, providing a broad and compliant range of financial services. This extensive network ensures that our clients receive expert guidance and support across a wide geographical area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalBackground;

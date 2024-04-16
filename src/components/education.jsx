import { FaChartPie, FaGraduationCap } from "react-icons/fa6";
import "../css/services.css";
import "../css/education.css";

function Education() {
  return (
    <div className="services">
      <div className="skills">
        <p className="skill_header">My Work Experience / Examinations .</p>

        <div className="education">
          <div className="card_wrap">
            
            {" "}
            <div className="card">
              <div className="icon exams_dates">
                <div className="sp1">
                  <FaChartPie color="#BA5A31" />
                  Stock Broker | Investment Adviser
                </div>

                <span style={{ float: "right" }}>
                  2005 - Present (17 Years)
                </span>
              </div>
              <div className="skill_level l15 op8">
                NORTHWESTERN MUTUAL INVESTMENT SERVICES, LLC (CRD#:2881) 113
                HOWARD STREET, PETOSKEY, MI 49770 Registered with this firm
                since 6/21/2005 .
              </div>
            </div>
            <div className="card">
              <div className="icon exams_dates">
                <div className="sp1">
                  <FaGraduationCap color="#1E2D24" />
                  General Industry/Products Exam
                </div>

                <span>Oct 21, 2018</span>
              </div>
              <div className="skill_level l15">
                SIE – Securities Industry Essentials Examination.
              </div>
            </div>
            <div className="card">
              <div className="icon exams_dates">
                <div className="sp1">
                <FaGraduationCap color="#1E2D24" />
                  General Industry/Products Exam
                </div>

                <span>June 20, 2005</span>
              </div>
              <div className="skill_level l15">
                Series 7 - General Securities Representative Examination.
              </div>
            </div>
            <div className="card">
              <div className="icon exams_dates">
                <div className="sp1">
                <FaGraduationCap color="##1E2D24" />
                  State Securities Law Exam
                </div>

                <span>April 27, 2004</span>
              </div>
              <div className="skill_level l15">
                Series 63 - Uniform Securities Agent State Law Examination.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

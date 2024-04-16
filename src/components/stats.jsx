import "../css/proffesion.css";
import "../css/client.css";
import "../css/stats.css";
import { FaBriefcase, FaCoins, FaHandsClapping, FaTrophy } from "react-icons/fa6";
// import { FaWandMagicSparkles } from "react-icons/fa6";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Stats() {
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
    <div className="profession client stat">
      <p className="client_title up">My Professional Stats.</p>
      <div className="some_summary">
        <div className="some_wrapper stats up">
          <div className="some">
            <div className="stt">
              <div className="count">0</div>
              <div>
                <FaHandsClapping color="brown" /> Happy Client
              </div>
            </div>
            <div className="stt">
              <div className="count">0</div>
              <div>
                <FaTrophy color="gold"/> Awards
              </div>
            </div>
            <div className="stt">
              <div className="count">0</div>
              <div>
                <FaBriefcase color="green" /> Portfolio handled
              </div>
            </div>
            <div className="stt">
              <div className="count">0</div>
              <div>
                <FaCoins  color="grey" /> Profit Generated{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

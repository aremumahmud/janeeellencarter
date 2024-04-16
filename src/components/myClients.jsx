import "../css/proffesion.css";
import "../css/client.css";
import client2 from '../assets/client3.jpeg'
import client1 from '../assets/client1.jpeg'
import client3 from '../assets/client2.jpeg'
// import { FaWandMagicSparkles } from "react-icons/fa6";

function MyClientSays() {
  return (
    <div className="profession client">
      <p className="client_title">What My Clients Say.</p>
      <div className="some_summary">
        <div className="some_wrapper">
          <div className="some">
          <div className="icon client_image" >
              {/* <FaWandMagicSparkles /> */}
              <img src={client1} alt="" />
            </div>
            <div className="content">
              <p className="content_title">Elizabeth Versfeld</p>
              <p className="content_content">
                {" "}
                Jane ellen carter gave me the best independent advice on my
                investment strategy. I am able to monitor the performance,
                switch funds and add to the investment with little or no hassle.
                Even as a sophisticated investor, I believe it&apos;s important to
                have an advisor like Jane ellen carter to assist with your
                portfolio which mirrors your risk profile and investment
                timeline and requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="some_wrapper"  style={{display:"none"}}>
          <div className="some">
          <div className="icon client_image" >
              {/* <FaWandMagicSparkles /> */}
              <img src={client2} alt="" />
            </div>
            <div className="content">
              <p className="content_title">Duncan Anderson</p>
              <p className="content_content">
                I started investing in unit trusts seven years ago via Jane
                ellen carter. Straight away I was impressed with the
                transparency and the honesty that I felt when dealing with her
                team. My queries and questions are always promptly replied to,
                and the advice from her has paid dividends. It&apos;s good to
                feel that your advisers have your interests at heart and that
                you are not treated as a client number. Thank you Jane ellen
                carter for a job well done and putting your Clients first.
              </p>
            </div>
          </div>
        </div>
        <div className="some_wrapper" style={{display:"none"}}>
          <div className="some">
            <div className="icon client_image" >
              {/* <FaWandMagicSparkles /> */}
              <img src={client3} alt="" />
            </div>
            <div className="content">
              <p className="content_title">Sunu Varughese</p>
              <p className="content_content">
                {" "}

                
I am a regular trader who recently looked to optimise my leverage and
lower brokerage fees by trading more often. I wanted to quit my full-time job to pursue trading full time but wasn&apos;t making enough from it at first. I tried multiple brokerage companies to get tips and information, but none were helping me. Until I discovered Patricia Ann Gammon, which offered some of the best expert trading strategies out there. She gave me plenty of advice and information to help me improve the success of my investments. I have since quit my day job and trade full-
time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyClientSays;

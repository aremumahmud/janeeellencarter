import '../css/proffesion.css'
import '../css/client.css'
import { FaWandMagicSparkles } from 'react-icons/fa6'

function MyClientSays(){
    return (
        <div className="profession client">
           <p className="client_title">What My Clients Say</p>
            <div className="some_summary">
            
                <div className="some_wrapper">
                                    <div className="some">
                    <div className="icon color-d28"><FaWandMagicSparkles /></div>
                    <div className="content">
                        <p className="content_title">Years of Exp.</p>
                        <p className="content_content"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Inventore animi veritatis, sunt voluptatem magni unde corporis.</p>
                    </div>
                </div>
                </div>
                <div className="some_wrapper">
                                    <div className="some">
                    <div className="icon color-d28"><FaWandMagicSparkles /></div>
                    <div className="content">
                        <p className="content_title">Years of Exp.</p>
                        <p className="content_content"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Inventore animi veritatis, sunt voluptatem magni unde corporis.</p>
                    </div>
                </div>
                </div>
                <div className="some_wrapper">
                    <div className="some">
                                    <div className="icon"><FaWandMagicSparkles /></div>
                                    <div className="content">
                                        <p className="content_title">State licences</p>
                                        <p className="content_content"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Inventore animi veritatis, sunt voluptatem magni unde corporis.</p>
                                    </div>
                                </div>
                </div>
              
            </div>
        </div>
    )
}

export default MyClientSays
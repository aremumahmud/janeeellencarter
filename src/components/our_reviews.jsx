import '../css/companyvalues.css'
import '../css/review.css'
import svg1 from '../assets/testimonial-01-150x150.jpg'
import svg2 from '../assets/testimonial-02-150x150.jpg'
import svg3 from '../assets/testimonial-03-150x150.jpg'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { FaStar } from 'react-icons/fa6'

function Review(){
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
<p className="title_v up">Our Customer Reviews</p>
<div className="values">
    <div className="value up">
     <div className="user">
       <div className="userImg">
        <img src={svg1} alt="" />
       </div>
       <div className="info">
        <p>Revia Connors</p>
        <p>SATISFIED CLIENT</p>
       </div>
     </div>
     <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
     </div>
     <div className="text_">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis eum, nostrum ratione rem quo enim ullam, iste, neque veniam adipisci nesciunt! Odit, unde nam eum itaque debitis distinctio delectus.
     </div>
    </div>
    <div className="value up">
    <div className="user">
       <div className="userImg">
       <img src={svg2} alt="" />
       </div>
       <div className="info">
        <p>Ben Whitefield</p>
        <p>CHIEF FINANCE</p>
       </div>
     </div>
     <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
     </div>
     <div className="text_">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nostrum, repellat deserunt similique aspernatur iusto eum ipsa laborum, amet nesciunt quia? Culpa a commodi, dignissimos possimus fuga quaerat doloribus? Nesciunt!
     </div>
    </div>
    <div className="value up">
    <div className="user">
       <div className="userImg"> <img src={svg3} alt="" /></div>
       <div className="info">
        <p>Emma Greed</p>
        <p>LEGAL ADVISOR</p>
       </div>
     </div>
     <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
     </div>
     <div className="text_">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum neque voluptatum deleniti, quod obcaecati quibusdam quisquam et sint tempore. Cumque, at? Blanditiis vitae totam cumque cum atque quia sequi ea.
     </div>
    </div>
   
</div>
</div>
    )
}

export default Review
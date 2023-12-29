import React from 'react'
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <>
      <section className='testimonial_section'>
        <div className='parent_testimonial'>
          <div className='testimonial_img'>
            <img src="/images/Testimonial_image/Mask group.png" alt="" />
          </div>
          <div className='testimonial_text'>
            <pre>Testimonial</pre>
            <h2>What Our Customer Say About Us</h2>
            <p style={{ lineHeight: "1.5" }}>"I had the pleasure of dining at foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
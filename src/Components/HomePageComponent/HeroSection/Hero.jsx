import React from 'react'
import { Link } from 'react-router-dom';
import "./Hero.css";
const Hero = () => {
    return (
        <>
            <section className='hero_section'>
                <div className='hero_text'>
                    <h2>Dive into Delights<br /> of Delectable <span>Food</span></h2>
                    <p>Where Each Plate Weaves a Story of Culinary Mastery and passinate Craftsmanship</p>
                    <div className='buttons'>
                        <Link to='/menu'><button className='btn order_btn'>Order Now</button></Link>
                        <button className='btn reserve_btn'>Reserve a Table</button>
                    </div>
                </div>
                <div className='hero_img'>
                    <img src="/Images/Intersect.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero
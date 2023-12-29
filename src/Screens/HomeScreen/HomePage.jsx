import React from "react";
import "./HomePage.css"
import Navbar from "../../Components/HomePageComponent/Navbar/Navbar";
import Hero from "../../Components/HomePageComponent/HeroSection/Hero";
import Products from "../../Components/HomePageComponent/Products_gallery/Products";
import Dishes from "../../Components/HomePageComponent/Special_Dishes/Dishes";
import Testimonial from "../../Components/HomePageComponent/Testimonial/Testimonial";
import Services from "../../Components/HomePageComponent/Services/Services";
import Footer from "../../Components/HomePageComponent/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <section className="container">
        <div className="navbar_container">
          <Navbar />
        </div>
        <div className="hero_section_container">
          <Hero />
        </div>
        <div className="catagories_container">
          <Products />
        </div>
        <div className="dishes_container">
          <Dishes />
        </div>
        <div className="testimonial_container">
          <Testimonial />
        </div>
        <div className="services_container">
          <Services />
        </div>
        <div className="footer_container">
          <Footer/>
        </div>
      </section>
    </>
  );
};

export default HomePage;

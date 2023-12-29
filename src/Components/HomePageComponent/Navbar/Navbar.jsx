import React from "react";
import "./Navbar.css";
import KnifeAndFork from "../../../Icons/navbar_icons/KnifeAndFork";
import SearchIcon from "../../../Icons/navbar_icons/SearchIcon";
import CartIcon from "../../../Icons/navbar_icons/CartIcon";
const Navbar = () => {
  return (
    <>
      <section className="navbar_section">
        <nav className="nav">
          <div className="left_side">
            <div className="logo">
              <KnifeAndFork />
              <p>Delights</p>
            </div>
            <div className='nav_list'>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Offers</a></li>
              </ul>
            </div>
          </div>
          <div className="right_side">
              <SearchIcon/>
              <CartIcon/>
              <button className="contact_button">Contact</button>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;

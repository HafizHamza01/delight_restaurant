import React from 'react'
import "./Footer.css"
import Twitter_icon from '../../../Icons/footer_icons/Twitter_icon';
import Instagram_icon from '../../../Icons/footer_icons/Instagram_icon';
import Youtube_icon from '../../../Icons/footer_icons/Youtube_icon';
const Footer = () => {
  return (
    <section className='footer_section'>
        <div className='parent_footer_data_container'>
            <div className='line_height'>
                <h4>Delights</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci.</p>
            </div>
            <div className='line_height'>
                <h4>Useful links</h4>
                <ul>
                    <li>About us</li>
                    <li>Events</li>
                    <li>Blogs</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='line_height'>
                <h4>Main Menu</h4>
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Menus</li>
                    <li>Reservation</li>
                </ul>
            </div>
            <div className='line_height'>
                <h4>Contact Us</h4>
                <ul>
                    <li>example@gmail.com</li>
                    <li>+54 123-456-789</li>
                    <li>Social media</li>
                </ul>
            </div>
        </div>
        <div className='footer'>
            <div className='icons'>
                <div className='instagram_icon'><Instagram_icon/></div>
                <div className='twitter_icon'><Twitter_icon/></div>
                <div className='youtube_icon'><Youtube_icon/></div>
            </div>
            <div className='footer_text'>
                <p>Copyright @ 2023 Dscode | All rights reserved</p>
            </div>
        </div>
    </section>
  )
}

export default Footer
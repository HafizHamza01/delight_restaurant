import React from 'react'
import "./Services.css"
const Services = () => {
    return (
        <>
            <section className='services_section'>
                <div className='services_box'>
                    <div className='services_text'>
                        <pre>Our Story & Services</pre>
                        <h2>Our Culinary Journey And Services</h2>
                        <p>Rooted in passion , we currate unforgettable dining experiences and offer exceptional services,blending culinary artistry with warm and hospitality</p>
                        <button>Explore</button>
                    </div>
                    <div className='services_cards'>
                        <div className='single_service_card'>
                            <div className='single_service_card_icon'>
                                <img src="/Images/Services_icon/fi-rr-salad.png" alt="" />
                            </div>
                            <div className='single_service_card_text'>
                                <div className='services_title'>
                                    <p>CATEING</p>
                                </div>
                                <div className='services_discription'>
                                    <p style={{ lineHeight: "1.3" }}>Delight your guests with our flavors and presentation</p>
                                </div>
                            </div>
                        </div>
                        <div className='single_service_card'>
                            <div className='single_service_card_icon'>
                                <img src="/Images/Services_icon/fi-rr-salad.png" alt="" />
                            </div>
                            <div className='single_service_card_text'>
                                <div className='services_title'>
                                    <p>CATEING</p>
                                </div>
                                <div className='services_discription'>
                                    <p style={{ lineHeight: "1.3" }}>Delight your guests with our flavors and presentation</p>
                                </div>
                            </div>
                        </div>
                        <div className='single_service_card'>
                            <div className='single_service_card_icon'>
                                <img src="/Images/Services_icon/fi-rr-salad.png" alt="" />
                            </div>
                            <div className='single_service_card_text'>
                                <div className='services_title'>
                                    <p>CATEING</p>
                                </div>
                                <div className='services_discription'>
                                    <p style={{ lineHeight: "1.3" }}>Delight your guests with our flavors and presentation</p>
                                </div>
                            </div>
                        </div>
                        <div className='single_service_card'>
                            <div className='single_service_card_icon'>
                                <img src="/Images/Services_icon/fi-rr-salad.png" alt="" />
                            </div>
                            <div className='single_service_card_text'>
                                <div className='services_title'>
                                    <p>CATEING</p>
                                </div>
                                <div className='services_discription'>
                                    <p style={{ lineHeight: "1.3" }}>Delight your guests with our flavors and presentation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
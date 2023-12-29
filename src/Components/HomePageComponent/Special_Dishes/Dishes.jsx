import React from "react";
import "./Dishes.css";
import { dishes_list } from "./Dishes_list";
const Dishes = () => {
    return (
        <>
            <section className="dishes_section">
                <div className="section_title">
                    <p>Special Dishes</p>
                    <h2>Standout Dishes From Our Menu</h2>
                </div>
                <div className="dishes_cards">
                    {dishes_list.map((item) => (
                        <div className="single_card">
                            <div className="single_card_img">
                                <img src={item.Image} alt="" />
                            </div>
                            <div className="single_card_text">
                                <p>{item.name}</p>
                                <p>{item.discription}</p>
                                <div className="rate">
                                    <p><span>s</span>{item.cost}</p>
                                    <p>{item.rate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Dishes;

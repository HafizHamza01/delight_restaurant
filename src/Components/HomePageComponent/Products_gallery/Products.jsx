import React from 'react'
import "./Products.css"
import { product_list } from './Product_list'
const Products = () => {
    return (
        <>
            <div className='horizontal_line'></div>
            <section className='product_section'>
                <div className='thumbnail_text'>
                    <p>CUSTOMER FAVORITES</p>
                    <h3>Popular Catagories</h3>
                </div>
                <div className='product_cards'>
                    {product_list.map((item) => (
                        <div className='card'>
                            <div className='card_img'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='card_text'>
                                <p>{item.name}</p>
                                <p>{item.n_dishes}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Products;
import React from 'react'
import { Manu_list } from './MenuList';
import SingleMenuCard from './SingleMenuCard';
import "./MenuCards.css";
const MenuCards = () => {
  return (
    <>
      <div className='container card-container d-flex'>
        <div className='row'>
          {
            Manu_list.map((item) => (
              <SingleMenuCard item={item} />
            ))}
        </div>
      </div>
    </>
  )
}

export default MenuCards;
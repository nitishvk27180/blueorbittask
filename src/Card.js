import React from 'react';
import './cards.css'

const Cards = ({item}) => {
    const {img} = item;
  return (


    <div className="cards">

        <div className="image_box">
            <img src={img} alt="Image_" />
        </div>
    </div>
  )
}

export default Cards;

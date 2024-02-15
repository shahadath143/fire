/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_icon.png'


const Breadcrum = (props) => {
    // eslint-disable-next-line react/prop-types
    const {product}= props;
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className='breadcrum'>
   // eslint-disable-next-line react/prop-types
   HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.category} <img src= {arrow_icon}alt="" />{product.name}
      
    </div>
  )
}

export default Breadcrum

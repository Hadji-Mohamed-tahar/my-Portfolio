import "./PricingCard.css"
import React from 'react'
import { Link } from "react-router-dom";

const PricingCard = (props) => {
  return (
    <div className='card'>
    <h3>{props.title}</h3>
    <span className='bar'></span>
    <p className="btc">{props.price}</p>
    <p>{props.days}</p>
    <p>{props.pages}</p>
    <p>{props.text}</p>
    <p>{props.responsive}</p>
    <Link to="/contact" className='btn'>{props.Purchase}</Link>
  </div>
  )
}

export default PricingCard
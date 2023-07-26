import React from 'react'


const Right = () => {
  return (
    <div className='right_buy'>
      <img src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop.CB443006202_png'/>
    <div className="cost_right">
      <p>Your order is eligible for FREE Delivery.</p>
      <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
      <h3>Subtotal (1 items):<strong style={{fontWeight:700, color:'#111'}}>₹10049.00</strong> </h3>
      <button className="rightbuy_btn" >Proceed to Buy</button> 
    </div>
    </div>
  )
}

export default Right
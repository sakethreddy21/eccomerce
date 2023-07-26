import React from 'react'
import './buynow.css'
import Right from './Right'
import Option from './Option'
import Subtotal from './Subtotal'
import { Divider } from '@mui/material'
const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className='leftbuyprice'>Price</span>
          <Divider/>
          <div className="item_containert">
            <img style={{width:'200px', height:"30vh"}} src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/y/r/z/-original-imagphkzsajh8rjf.jpeg?q=70" alt=''/>
          <div className="item_details">
            <h3>FOSSIL </h3>
            <h3>RHETT Analog Watch - For Men BQ1009</h3>
            <h3 className="diffrentprice">₹10049.00</h3>
            <p className="unusuall">Usually dispatched in 8 days</p>
            <p>Eligible for FREE shipping</p>
            <img src ='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png'/>
          <Option/>
          </div>
            <h3 className='item_price'>₹10049.00</h3>
          </div>
          <Divider/>
          <Subtotal />
        </div>
        <div className="right_buy">
          <Right/>
        </div>

      </div>
    </div>
  )
}

export default Buynow
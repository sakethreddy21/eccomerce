import React from 'react'
import './cart.css'
import img1  from './amulbutter.jpg'
import { Divider } from '@mui/material'
const Cart = () => {
  return (
    <div className='cart_section'>
        <div className="cart_container">
          <div className="left_cart">
            <img src={img1} alt=''/>
            <div className="cart_btn">
              <button className='cart_btn1'>Add To Cart</button>
              <button className='cart_btn2'>Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>Amul Butter</h3>
            <h4>Asli butter</h4>
            <Divider/>
            <p className="mrp">M.R.P. :₹1195</p>
            <p>Deal of the Day : <span style ={{color:"#B12704"}}>₹625.00</span></p>
            <p>You save : : <span style={{color:"#B12704"}}>₹570 (47%)</span></p>

            <div className="discount_box">
              <h5> Discount : <span style ={{color:"#111"}}>Extra 10% Off</span></h5>
              <h4>Free Delivery <span style={{color:"#111", fontWeight:600}}>Oct 8 - 21</span> Details</h4>
              <p>Fastest Delivery: <span style={{color:"#111", fontWeight:600}}>Tomorrow 11AM</span></p>
              </div>
              <p className="description">About the Item: <span style={{color:"#565959", fontSize:14, fontWeight:500, letterSpacing:"0.4px"}}>Amul butter is an important source of sodium and protein. Younger children can consume Amul butter as it is a source of helpful fat and protein. Butter is one ingredient that is absolutely mandatory in every kitchen. This cooking essential is a favourite among chefs for its smooth rich taste.</span></p>
          </div>
        </div>
      </div>
  )
}

export default Cart
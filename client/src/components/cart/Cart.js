import React, {useEffect, useState} from 'react'
import './cart.css'
import { useParams } from 'react-router-dom'
import img1  from './amulbutter.jpg'
import { Divider } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
const Cart = () => {

  const [inndata, setIndata]= useState([])
  console.log(inndata);
  const {id} = useParams("")
  //console.log(id)
  const getindata= async()=>{
    const res= await fetch(`/getproductsone/${id}`,{
    method:'GET',
    headers:{
      "Content-Type":"application/json"
    }
  });
  const data = await res.json();
  //console.log(data)
  if (res.status !== 201){
    console.log("no data available");
  }else{
    console.log("gotdata");
    setIndata(data)
  }
}
useEffect(()=>{
  setTimeout(getindata, 1000);
},[id])

 
  return (
    <div className='cart_section'>
      {inndata && Object.keys(inndata).length &&
        <div className="cart_container">
          <div className="left_cart">
            <img src={inndata.url} alt='cart_img'/>
            <div className="cart_btn">
              <button className='cart_btn1'>Add To Cart</button>
              <button className='cart_btn2'>Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{inndata.title.shortTitle}</h3>
            <h4>{inndata.title.longTitle}</h4>
            <Divider/>
            <p className="mrp">M.R.P. :<del>₹{inndata.price.mrp}</del></p>
            <p>Deal of the Day : <span style ={{color:"#B12704"}}>₹{inndata.price.cost}.00</span></p>
            <p>You save : : <span style={{color:"#B12704"}}>₹{inndata.price.mrp-inndata.price.cost} ({inndata.price.discount})</span></p>

            <div className="discount_box">
              <h5> Discount : <span style ={{color:"#111"}}>{inndata.discount}</span></h5>
              <h4>Free Delivery <span style={{color:"#111", fontWeight:600}}>Oct 8 - 21</span> Details</h4>
              <p>Fastest Delivery: <span style={{color:"#111", fontWeight:600}}>Tomorrow 11AM</span></p>
              </div>
              <p className="description">About the Item: <span style={{color:"#565959", fontSize:14, fontWeight:500, letterSpacing:"0.4px"}}>{inndata.description}</span></p>
          </div>
        </div>
        }        
      </div>
  )
}
 


export default Cart
import React, { useEffect,useContext, useState } from 'react'
import './cart.css'
import { useParams,useNavigate} from 'react-router-dom'
import { Divider } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Logincontext } from "../context/Contextprovider";
const Cart = () => {



  const [inndata, setIndata] = useState("")
  //console.log(inndata);
  const {account, setAccount}= useContext(Logincontext)
  const history = useNavigate();
  const { id } = useParams("")
  //console.log(id)
  const getindata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    const data = await res.json();
    //console.log(data)
    if (res.status !== 201) {
      console.log("no data available");
    } else {
      //console.log("gotdata");
      setIndata(data)
    }
  }
  useEffect(() => {
    setTimeout(getindata, 1000);
  }, [id])

  //add cart function
  const addtocart = async (id) => {
    console.log(id);
    const check = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inndata
      }),
      credentials: "include"
    });
    // console.log(check);
    const data1 = await check.json();
    // console.log(data1 +  'ok');

    if (check.status === 401 || !data1) {
      console.log("user invalid");
      alert("user not available")
    } else {
      console.log("data added in u r cart")
      ///alert("data added successfully")
      history("/buynow")
      setAccount(data1)

    }
  }

  return (
    <div className='cart_section'>
      {inndata && Object.keys(inndata).length &&
        <div className="cart_container">
          <div className="left_cart">
            <img src={inndata.url} alt='cart_img' />
            <div className="cart_btn">
              <button className="cart_btn1" onClick={() => addtocart(inndata.id)}>Add to Cart</button>
              <button className='cart_btn2'>Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{inndata.title.shortTitle}</h3>
            <h4>{inndata.title.longTitle}</h4>
            <Divider />
            <p className="mrp">M.R.P. :<del>₹{inndata.price.mrp}</del></p>
            <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{inndata.price.cost}.00</span></p>
            <p>You save : : <span style={{ color: "#B12704" }}>₹{inndata.price.mrp - inndata.price.cost} ({inndata.price.discount})</span></p>

            <div className="discount_box">
              <h5> Discount : <span style={{ color: "#111" }}>{inndata.discount}</span></h5>
              <h4>Free Delivery <span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 21</span> Details</h4>
              <p>Fastest Delivery: <span style={{ color: "#111", fontWeight: 600 }}>Tomorrow 11AM</span></p>
            </div>
            <p className="description">About the Item: <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}>{inndata.description}</span></p>
          </div>
        </div>
      }
       {!inndata ? <div className="circle">
                <CircularProgress />
                <h2> Loading....</h2>
            </div> : ""}

    </div>
  )
}



export default Cart
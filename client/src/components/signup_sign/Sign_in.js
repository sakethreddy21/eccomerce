import React, {useState} from 'react'
import './signup.css'
import img from './blacklogoamazon.png'
import { ToastContainer, toast} from 'react-toastify';
import { NavLink } from 'react-router-dom'
const Sign_in = () => {



  const [logdata, setData] = useState({
      email: "",
      password: ""
  });

   console.log(logdata);

  const adddata = (e) => {
      const { name, value } = e.target;
      // console.log(name, value);

      setData(() => {
          return {
              ...logdata,
              [name]: value
          }
      })
  };

  const senddata=async(e)=>{
    e.preventDefault()
    const {email, password}= logdata;
    const res= await fetch("login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
           email, password 
        })
    })
    const data =await res.json();
    console.log(data)
    if(res.status===400 || !data){
        console.log("invlaid details");
        toast.warn("inavlid details", {
            position:"top-center"
        })
    }else{
        console.log("data valid")
        toast.success("user valid", {
            position:"top-center"
        })
        setData({...logdata,email:"", password:""});
    }
  }

  

  return (
      <section>
          <div className="sign_container">
              <div className="sign_header">
                  <img src={img} alt="signupimg" />
              </div>
              <div className="sign_form">
                  <form method="POST">
                      <h1>Sign-In</h1>

                      <div className="form_data">
                          <label htmlFor="email">Email</label>
                          <input type="email" name="email"
                              onChange={adddata}
                              value={logdata.email}
                              id="email" />
                      </div>
                      <div className="form_data">
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password"
                              onChange={adddata}
                              value={logdata.password}
                              id="password" placeholder="At least 6 characters" />
                      </div>
                      <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
                  </form>
                 
              </div>
              <div className="create_accountinfo">
                  <p>New to Amazon?</p>
                  <button>  <NavLink to="/register">Create your Amazon Account</NavLink></button>
              </div>
          </div>
<ToastContainer/>
      </section>
  )
}

export default Sign_in
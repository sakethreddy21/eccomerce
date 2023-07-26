import React, {useState} from 'react'
import { Divider } from '@mui/material';
import img from './blacklogoamazon.png'
import { NavLink } from 'react-router-dom';
const Signup = () => {

  const [udata, setUdata] = useState({
      fname: "",
      email: "",
      mobile: "",
      password: "",
      cpassword: ""
  });

   console.log(udata);

  const adddata = (e) => {
      const { name, value } = e.target;
     

      setUdata(() => {
          return {
              ...udata,
              [name]: value
          }
      })
  };

 

  return (
      <section>
          <div className="sign_container">
              <div className="sign_header">
                  <img src={img} alt="signupimg" />
              </div>
              <div className="sign_form">
                  <form method="POST">
                      <h1>Create account</h1>
                      <div className="form_data">
                          <label htmlFor="name">Your name</label>
                          <input type="text" name="fname"
                              onChange={adddata}
                              value={udata.fname}
                              id="name" />
                      </div>
                      <div className="form_data">
                          <label htmlFor="email">email</label>
                          <input type="email" name="email"
                              onChange={adddata}
                              value={udata.email}
                              id="email" />
                      </div>
                      <div className="form_data">
                          <label htmlFor="mobile">Mobile number</label>
                          <input type="number" name="mobile"
                              onChange={adddata}
                              value={udata.mobile}
                              id="mobile" />
                      </div>
                      <div className="form_data">
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password"
                              onChange={adddata}
                              value={udata.password}
                              id="password" placeholder="At least 6 characters" />
                      </div>
                      <div className="form_data">
                          <label htmlFor="passwordg">Password again</label>
                          <input type="password" name="cpassword"
                              onChange={adddata}
                              value={udata.cpassword}
                              id="passwordg" />
                      </div>
                      <button type="submit" className="signin_btn" >Continue</button>

                      <Divider />

                      <div className="signin_info">
                          <p>Already have an account?</p>
                          <NavLink to="/login">Sign in</NavLink>
                      </div>
                  </form>
              </div>
              
          </div>
      </section>
  )
}

export default Signup;
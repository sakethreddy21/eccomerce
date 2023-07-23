import React from 'react'
import './signup.css'
import img from './blacklogoamazon.png'
import { NavLink } from 'react-router-dom'
const  Sign_in = () => {
  return (
    <section>
     <div className="sign_container">
      <div className="sign_header">
        <img src={img} alt='amazonlogo'/>   
      </div>
      <div className="sign_form">
        <form>
          <h1>Sign_In</h1>
          <div className="form_data">
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email'/>
          </div>
          <div className="form_data">
          <label htmlFor='passowrd'>Password</label>
            <input type='password' name='password' placeholder='At least 6 char' id='password'/>

          </div>
          <button className="signin_btn">Continue</button>
        </form>

      </div>
      <div className="create_accountinfo">
        <p>New To Amazon</p>
        <button >Create Your Account</button>
      </div>
     </div>
    </section>
  )
}

export default  Sign_in
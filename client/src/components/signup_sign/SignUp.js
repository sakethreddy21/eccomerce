import React from 'react'
import img from './blacklogoamazon.png'
const SignUp = () => {
  return (
    
       <section>
     <div className="sign_container">
      <div className="sign_header">
        <img src={img} alt='amazonlogo'/>   
      </div>
      <div className="sign_form">
        <form>
          <h1>Create account</h1>
          <div className="form_data">
            <label htmlFor='fname'>Your name</label>
            <input type='text' name='fname' id='fname'/>
          </div>
          <div className="form_data">
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email'/>
          </div>
          <div className="form_data">
            <label htmlFor='number'>Mobile number</label>
            <input type='number' name='number' id='number'/>
          </div>
          <div className="form_data">
          <label htmlFor='passowrd'>Password</label>
            <input type='password' name='password' placeholder='At least 6 char' id='password'/>
          </div>
          <div className="form_data">
            <label htmlFor='password'>Password again</label>
            <input type='password' name='password' id='password'/>
          </div>
          <button className="signin_btn">Continue</button>
        </form>

      </div>
      
     </div>
    </section>
  
  )
}

export default SignUp

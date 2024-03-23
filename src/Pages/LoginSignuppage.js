import React from 'react'
import './Css/LoginSignup.css'

export const LoginSignuppage = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type='pasword' placeholder='Password'></input>


        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account <span>Login here</span></p>
        <div className='loginsignup-agree'>
          
        </div>
      </div>
    </div>
  )
}

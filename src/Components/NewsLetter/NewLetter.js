import React from 'react'
import './NewLetter.css'

export const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to your newsletter and stay update</p>
        <div>
            <input type='email' placeholder='Your Email id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

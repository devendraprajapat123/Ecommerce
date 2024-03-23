import React from 'react'
import './Hero.css'
import hand_icon from '../Assest/hand_icon.png'
import arrow_icon from '../Assest/arrow.png'
import hero_imag from '../Assest/hero_image.png'


export const Hero = () => {
  return (
    

   
    
    <div className='hero'>
        <div className='hero-left'>
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <img src={hand_icon} alt=''></img>
            </div>
            <p>Collection</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-button'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=''></img>
        </div>
        </div>
        <div className='hero-rigth'>
            <img src={hero_imag} alt=''></img>
        </div>

    </div>
   
  )
}

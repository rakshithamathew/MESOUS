/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import how from "../assets/how we help.png"
import frame from "../assets/Frame 60.png"
import '../styles/HomeSix.css'

function HomeSix() {
  return (
    <div>
        <div className='btn1'>
        <button className='button1'>File Your Claim Now</button>
        </div>
        <div className='btn2'>
        <button className='button2'>Connect With Us</button>
        </div>
        <div className='btn3'>
        <button className='button3'>Download E-Book Now</button>
        </div>
      <div className='firstCard'>
        <img src={how} className='firstImg'  />
      </div>
      <div>
      <img src={frame} className='secondImg'  />
      </div>

    </div>
  )
}

export default HomeSix

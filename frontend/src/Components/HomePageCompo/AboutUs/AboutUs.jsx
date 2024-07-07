import React from 'react'
import WhyUs from './WhyUs/WhyUs'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div id='aboutId' className='aboutUs-container'>
      <h1>About Us</h1>
      <hr className='hrtag'/>
      <WhyUs/>
    </div>
  )
}

export default AboutUs

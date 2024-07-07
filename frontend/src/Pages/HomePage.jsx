import React from 'react'
import Hero from '../Components/HomePageCompo/Hero/Hero'
import AboutUs from '../Components/HomePageCompo/AboutUs/AboutUs'

const HomePage = () => {
  return (
    <div>
      <section id="heroId">
        <Hero/>
      </section>
      <section id="aboutId">
        <AboutUs/>
      </section>
      <section id="contactId">
      </section>
    </div>
    
  )
}

export default HomePage

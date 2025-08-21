import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      {/* Hero Section (Smooth classic) */}
      <div data-aos="fade-down" data-aos-duration="1200">
        <Hero />
      </div>

      {/* Latest Collection (Smooth classic) */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <LatestCollection />
      </div>

      {/* Best Seller (Different & dynamic) */}
      <div data-aos="flip-left" data-aos-duration="1000">
        <BestSeller />
      </div>

      {/* Our Policy (Different diagonal entry) */}
      <div data-aos="fade-up-right" data-aos-duration="1000">
        <OurPolicy />
      </div>

      {/* Newsletter (Different stylish exit) */}
      <div data-aos="zoom-out-up" data-aos-duration="1000">
        <NewsletterBox />
      </div>
    </div>
  )
}

export default Home

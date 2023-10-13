import React from 'react'

import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Who from '../components/home/Whoarewe'
import Why from '../components/home/WhySection'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Who />
        <Why />
        <Footer />
    </>
  )
}

export default Home
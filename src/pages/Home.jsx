import React from 'react'

import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Who from '../components/home/Whoarewe'
import Why from '../components/home/WhySection'
import WhyOrg from '../components/home/WhyOrganization'
import Faq from '../components/home/Faq'
import Benefit from '../components/home/Benefits'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Who />
        <Why />
        <WhyOrg />
        <Benefit />
        <Faq />
        <Footer />
    </>
  )
}

export default Home
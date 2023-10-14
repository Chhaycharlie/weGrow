import React from 'react'

import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Who from '../components/home/Whoarewe'
import Why from '../components/home/WhySection'
import WhyOrg from '../components/home/WhyOrganization'
import Faq from '../components/home/Faq'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Who />
        <Why />
        <WhyOrg />
        <Faq />
        <Footer />
    </>
  )
}

export default Home
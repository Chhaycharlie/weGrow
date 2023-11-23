import React from "react";

import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import Post from '../components/Form/Post';
import Hero from '../components/Home/Hero';
import { Modal } from "../components/Modal";
import Benefit from '../components/home/Benefits';
import Faq from '../components/home/Faq';
import Quote from '../components/home/Quote';
import Who from '../components/home/Whoarewe';
import WhyOrg from '../components/home/WhyOrganization';
import Why from '../components/home/WhySection';


const Home = () => {
  return (
    <>
        {/* <Header /> */}
        <Hero />
        <Who />
        <Why />
        <WhyOrg />
        <Benefit />
        <Quote/>
        <Faq />
        <Footer />
        <Post/>
        <Footer2/>
        <Modal/>
    </>
  );
};

export default Home;

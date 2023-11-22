import React from "react";

import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Benefit from "../components/home/Benefits";
import Faq from "../components/home/Faq";
import Who from "../components/home/Whoarewe";
import WhyOrg from "../components/home/WhyOrganization";
import Why from "../components/home/WhySection";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Who />
      <Why />
      <WhyOrg />
      <Benefit />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;

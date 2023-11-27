import React from "react";
import Footer from "../components/shared/Footer";
import { Header } from "../components/shared/Header";
import Hero from "../components/home/Hero";
import Benefit from "../components/home/Benefits";
import Faq from "../components/home/Faq";
import Who from "../components/home/Whoarewe";
import WhyOrg from "../components/home/WhyOrganization";
import Why from "../components/home/WhySection";

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
  );
};

export default Home;

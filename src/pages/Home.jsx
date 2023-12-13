import React from "react";
import { useSelector } from "react-redux";
import Benefit from "../components/home/Benefits";
import Faq from "../components/home/Faq";
import Hero from "../components/home/Hero";
import Quote from "../components/home/Quote";
import Who from "../components/home/Whoarewe";
import WhyOrg from "../components/home/WhyOrganization";
import Why from "../components/home/WhySection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <>
      <Header />
      <Hero />
      <Who />
      <Why />
      <WhyOrg />
      <Benefit />
      <Quote />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;

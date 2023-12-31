import React from "react";
import Benefit from "../components/home/Benefits";
import Faq from "../components/home/Faq";
import Hero from "../components/home/Hero";
import Quote from "../components/home/Quote";
import Who from "../components/home/Whoarewe";
import WhyOrg from "../components/home/WhyOrganization";
import Why from "../components/home/WhySection";
import AppLayout from "../components/Layout/AppLayout";
import { useSelector } from "react-redux";

const Home = () => {
  // const userInfo = useSelector((state) => state.user);

  // console.log(`home: ${userInfo}`);
  return (
    <AppLayout>
      <Hero />
      <Who />
      <Why />
      <WhyOrg />
      <Benefit />
      <Quote />
      <Faq />
    </AppLayout>
  );
};

export default Home;

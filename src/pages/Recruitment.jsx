import React from "react";
import Opportunity from "../components/post-recruitment/Opportunity";
import PostRecruitment from "../components/post-recruitment/PostRecruitment";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Recruitment = () => {
  return (
    <>
      <Header />
      <PostRecruitment />
      <Opportunity />
      <Footer />
    </>
  );
};

export default Recruitment;

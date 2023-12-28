import React from "react";
import Opportunity from "../components/post-recruitment/Opportunity";
import PostRecruitment from "../components/post-recruitment/PostRecruitment";
import AppLayout from "../components/Layout/AppLayout";

const Recruitment = () => {
  return (
    <AppLayout>
      <PostRecruitment />
      <Opportunity />
    </AppLayout>
  );
};

export default Recruitment;

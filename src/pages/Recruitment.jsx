import React, { useEffect, useState } from "react";
import Opportunity from "../components/post-recruitment/Opportunity";
import PostRecruitment from "../components/post-recruitment/PostRecruitment";
import AppLayout from "../components/Layout/AppLayout";
import { getPostsWithUserInfo } from "../api/post.api";

const Recruitment = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPostsWithUserInfo();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <AppLayout>
      <PostRecruitment />
      <Opportunity posts={posts} />
    </AppLayout>
  );
};

export default Recruitment;

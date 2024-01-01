import React, { useEffect, useState } from "react";
import Opportunity from "../components/post-recruitment/Opportunity";
import PostRecruitment from "../components/post-recruitment/PostRecruitment";
import AppLayout from "../components/Layout/AppLayout";
import { getPostsWithUserInfo } from "../api/post.api";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Recruitment = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       setLoading(true); // Set loading to true before making the API call
  //       const data = await getPostsWithUserInfo();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     } finally {
  //       setLoading(false); // Set loading back to false after the data is fetched (or if there's an error)
  //     }
  //   };

  //   fetchPosts();
  // }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Subscribe to real-time updates
        const unsubscribe = onSnapshot(
          collection(db, "volunteer-recruits"),
          async () => {
            const data = await getPostsWithUserInfo();
            setPosts(data);
          }
        );

        // Set loading back to false when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <AppLayout>
      <PostRecruitment />
      <Opportunity posts={posts} loading={loading} />
    </AppLayout>
  );
};

export default Recruitment;

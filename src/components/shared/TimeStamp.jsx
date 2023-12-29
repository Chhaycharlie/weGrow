import { useEffect, useState } from "react";

const TimeStamp = ({ post }) => {
  const [timeText, setTimeText] = useState("");

  useEffect(() => {
    const calculateTimeDifference = () => {
      if (post?.timestamp) {
        const timestampDate = new Date(
          post.timestamp.seconds * 1000 + post.timestamp.nanoseconds / 1e6
        ); // Convert seconds to milliseconds
        const now = new Date();
        const diffInSeconds = Math.floor((now - timestampDate) / 1000);

        let timeText = "";

        if (diffInSeconds <= 0) {
          timeText = "Now";
        } else if (diffInSeconds < 60) {
          timeText = `${diffInSeconds} second${
            diffInSeconds === 1 ? "" : "s"
          } ago`;
        } else if (diffInSeconds < 3600) {
          const diffInMinutes = Math.floor(diffInSeconds / 60);
          timeText = `${diffInMinutes} minute${
            diffInMinutes === 1 ? "" : "s"
          } ago`;
        } else if (diffInSeconds < 86400) {
          const diffInHours = Math.floor(diffInSeconds / 3600);
          timeText = `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
        } else if (diffInSeconds < 604800) {
          const diffInDays = Math.floor(diffInSeconds / 86400);
          timeText = `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
        } else {
          const diffInWeeks = Math.floor(diffInSeconds / 604800);
          timeText = `${diffInWeeks} week${diffInWeeks === 1 ? "" : "s"} ago`;
        }

        setTimeText(timeText);
      }
    };

    calculateTimeDifference();
  }, [post]);

  return <>{timeText}</>;
};

export default TimeStamp;

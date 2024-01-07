import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllInspirationByInfo } from "../../api/post.api";
import { auth } from "../../firebase";
import AppLayout from "../Layout/AppLayout";
import ModalPost from "../course/ModalPost";
import TimeStamp from "../shared/TimeStamp";

const Inspiration = () => {
  const [posts, setPosts] = useState(null);
  const [active, setActive] = useState(1);
  const recordsPerPage = 9;
  const [filter, setFilter] = useState("all"); // "all" or "myPost"

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getAllInspirationByInfo();
      setPosts(postData);
    };
    fetchData();
  }, []);

  const filteredPosts = posts?.filter((post) => {
    if (filter === "my_post") {
      return post?.user?.userId === auth.currentUser.uid;
    }
    return true;
  });

  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const npage = Math.ceil((filteredPosts?.length || 0) / recordsPerPage);
  const displayPosts = filteredPosts?.slice(firstIndex, lastIndex);

  const next = () => {
    if (active === npage) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "blue",
    onClick: () => setActive(index),
  });

  return (
    <>
      {/* <Header /> */}
      <AppLayout>
        <h1 className="pt-10 font-bold text-4xl text-center">
          Post Inspiration to All Volunteer
        </h1>
        <img
          src="https://hspinc.org/wp-content/uploads/2018/06/AdobeStock_83134431-1-1024x263.jpeg"
          alt="image 3"
          className="h-full w-full object-cover px-2 mb-20"
        />

        {/* posting side  */}
        <div className="flex justify-start flex-wrap bg-gray-100">
          <div className="md:w-1/5 w-full border-r border-gray-300">
            <div className="flex justify-center space-x-6 md:space-x-0 md:flex-col items-center mt-4 font-medium text-sm">
              <label
                htmlFor="post"
                className="md:text-xl pb-6 md:pb-2 font-openSans text-center pt-2 text-black"
              >
                Filter by Post
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-3 mb-4 border md:mb-0 md:w-2/3 md:pr-5 md:py-3 hover:text-gray-600 rounded-lg border-gray-300 outline-none"
              >
                <option value="all">All</option>
                <option value="my_post">My Post</option>
              </select>
            </div>
          </div>
          <div className="md:w-4/5 w-full h-auto">
            {/* btn add */}
            <div className="w-full h-14 flex items-center justify-center md:justify-end pr-10 mt-2 pb-2 border-b border-gray-400">
              <ModalPost />
            </div>

            {/* card  */}
            <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 p-2 md:m-4 text-white">
              {displayPosts?.length > 0 ? (
                displayPosts?.map((post) => (
                  <Link key={post?.id} to={`/inspirations/${post?.id}`}>
                    <div class="block max-w-[19rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <div class="relative h-[250px] overflow-hidden bg-contain bg-no-repeat">
                        <img
                          className="rounded-t-lg h-full w-[520px] bg-center"
                          src={post?.inspirationUrl}
                          alt=""
                        />
                      </div>
                      <div class="px-2 py-4 flex flex-col space-x-2">
                        <div className="flex items-center space-x-3">
                          <Avatar
                            sx={{ width: 35, height: 35 }}
                            src={post?.user?.photoUrl}
                          >
                            {post?.user?.displayName[0]}
                          </Avatar>
                          <div className="text-black line-clamp-2">
                            <h1 className="truncate">{post?.title}</h1>
                            <p className="text-sm text-gray-600">
                              <TimeStamp timestamp={post?.timestamp} />
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col truncate items-start font-md line-clamp-2 text-sm leading-7 text-black">
                          <p className="pl-2 pt-2">{post?.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <>
                  <div class="max-w-[19rem]  min-h-[50vh] flex justify-center items-center text-black rounded-lg "></div>
                  <div class="max-w-[19rem]  min-h-[50vh] flex justify-center items-center text-black rounded-lg ">
                    <h1>No Your Post</h1>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-24 py-10">
              <Button
                variant="text"
                className="md:flex items-center gap-2 hidden text-[12px]"
                color="blue"
                onClick={prev}
                disabled={active === 1}
              >
                <ArrowLeftIcon
                  strokeWidth={2}
                  className="h-4 w-4 rounded-full"
                />{" "}
                Previous
              </Button>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                {Array.from({ length: npage }).map((_, index) => (
                  <IconButton
                    key={index + 1}
                    size="sm"
                    {...getItemProps(index + 1)}
                  >
                    {index + 1}
                  </IconButton>
                ))}
              </div>
              <Button
                variant="text"
                className="md:flex items-center gap-2 hidden text-[12px]"
                color="blue"
                onClick={next}
                disabled={active === npage}
              >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Inspiration;

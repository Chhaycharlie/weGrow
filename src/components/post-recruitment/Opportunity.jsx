import { useState } from "react";
import { ModalDetail } from "./ModalDetail";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import TimeStamp from "../shared/TimeStamp";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import { Avatar } from "@mui/material";
import { ConfirmModal } from "../Form/ConfirmModal";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import Loading from "../../pages/Loading";

function Opportunity({ posts, loading }) {
  const user = auth.currentUser;
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  //pagination
  const [active, setActive] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const [filter, setFilter] = useState("all");

  const filteredPosts = posts.filter((post) => {
    const titleMatchesSearch = post?.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isMyPost = post?.userId === user?.uid;

    // Combine search and filter conditions
    return (
      titleMatchesSearch &&
      (filter === "all" || (filter === "myPosts" && isMyPost))
    );
  });

  //number of page
  const npage = Math.ceil(filteredPosts?.length / recordsPerPage);
  //array of pageIndex
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "blue",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  //handle delete post
  const handleDelete = (postId) => {
    // Add your delete logic here
    try {
      setDeleteLoading(true);
      const postRef = doc(db, "volunteer-recruits", postId);
      deleteDoc(postRef).then(() => {
        setDeleteLoading(false);
        toast.success("post deleted !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    } catch (error) {
      setDeleteLoading(false);
      toast.error(error);
    }
  };

  const handleFilter = (type) => {
    setFilter(type);
    setActive(1); // Reset page to 1 when changing filters
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setActive(1); // Reset page to 1 when changing search query
  };

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const aTitleMatchesSearch = a.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const bTitleMatchesSearch = b.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (aTitleMatchesSearch && !bTitleMatchesSearch) {
      return -1;
    } else if (!aTitleMatchesSearch && bTitleMatchesSearch) {
      return 1;
    }

    return 0;
  });

  //records that show in page
  const records = sortedPosts.slice(firstIndex, lastIndex);

  return (
    <>
      <section>
        <div className="pt-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-4">
            <div className="flex justify-between flex-wrap">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-2xl text-center md:text-left font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Opportunity
                </h2>
                <p className="mt-3 text-md text-center md:text-left leading-8 text-gray-600">
                  Find opportunity to grow your experience and potential here.
                </p>
              </div>
              <form className="flex items-center my-10 mx-auto md:mx-0 md:my-0">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    onChange={handleSearch}
                    value={searchQuery}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search By Title"
                  />
                </div>
              </form>
            </div>
            <div className=" border-t border-gray-400 sm:mt-10 sm:pb-6 mx-4">
              {/* Filter buttons */}
              <div className="flex gap-4 mt-4">
                <Button
                  variant="outlined"
                  color="blue"
                  onClick={() => handleFilter("all")}
                  className={`
                      ${filter === "all" ? "bg-blue-500 text-white" : ""}
                      h-10
                  `}
                >
                  All
                </Button>
                <Button
                  variant="outlined"
                  color="blue"
                  onClick={() => handleFilter("myPosts")}
                  className={`
                      ${filter === "myPosts" ? "bg-blue-500 text-white" : ""}
                      h-10
                  `}
                >
                  My Posts
                </Button>
              </div>
            </div>
            <div
              className={`mx-auto grid max-w-2xl shadow-sm min-h-[250px] ${
                loading ? "h-[150px] " : ""
              } grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3`}
            >
              {!loading ? (
                records.length > 0 ? (
                  records.map((post) => (
                    <div
                      key={post.id}
                      className="flex max-w-xl mt-4 sm:mt-0 flex-col items-start mx-4 justify-evenly border rounded-md"
                    >
                      <div className="w-[100%]">
                        <div className="relative flex flex-row-reverse justify-between items-center m-4 cursor-pointer">
                          {post.userId === user.uid ? (
                            <div className="mb-4">
                              <ConfirmModal
                                onDelete={() => handleDelete(post.id)}
                                loading={deleteLoading}
                              />
                            </div>
                          ) : (
                            <div className="mb-4 opacity-0">a</div>
                          )}
                          <div className="relative flex items-center gap-x-4 cursor-pointer">
                            <Avatar
                              sx={{ width: 40, height: 40 }}
                              src={post.user?.photoUrl}
                            >
                              {post.user.displayName[0]}
                            </Avatar>
                            <div className="text-sm leading-6">
                              <p className="font-semibold text-gray-900">
                                <span className="absolute inset-0" />
                                {post.user.organizationName}
                              </p>
                              <p className="text-gray-600 ">
                                {post.user.displayName}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs ml-[70px] mt-[-20px]">
                          <time
                            dateTime={post.timestamp}
                            className="text-gray-500"
                          >
                            <TimeStamp timestamp={post?.timestamp} />
                          </time>
                          <a
                            href={`https://${post.url}`}
                            target="blank"
                            className="relative z-10 rounded-full px-3 py-1.5 mt-1 font-medium bg-gray-300 text-grey-100 hover:bg-blue-500 hover:text-white"
                          >
                            {post.url}
                          </a>
                        </div>
                      </div>
                      <div className="group relative h-36">
                        <h3 className="px-1 mt-3 text-lg font-semibold leading-6 text-gray-900">
                          {post.title}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 pl-1">
                          <span className="pl-5" />
                          {post.description}
                        </p>
                      </div>
                      <div className="flex space-x-2 mt-3 pb-4 p-1">
                        {post.userId === user.uid ? (
                          <>
                            <Link
                              to={`/recruitmentForm/${post.id}`}
                              className="text-white bg-blue-600 hover:bg-blue-400 rounded-lg border border-gray-200 text-sm font-medium px-4 py-2 hover:text-gray-900 focus:z-10 "
                            >
                              {" "}
                              Edit Post
                            </Link>
                            <ModalDetail post={post} />
                            <Link
                              to={`/recruitment/${post.id}/application`}
                              className="text-white bg-blue-600 hover:bg-blue-400 rounded-lg border border-gray-200 text-sm font-medium px-3 py-2 hover:text-gray-900 focus:z-10 "
                            >
                              {" "}
                              View Applications
                            </Link>
                          </>
                        ) : (
                          <>
                            {post?.isSubmitted ? (
                              <Link
                                to={`/apply-form/${post.id}`}
                                className="text-white bg-blue-600 hover:bg-blue-400  font-medium rounded-lg text-sm px-4 py-2 text-center"
                              >
                                Edit Form
                              </Link>
                            ) : (
                              <Link
                                to={`/apply-forms/${post.id}`}
                                className="text-white bg-blue-600 hover:bg-blue-400  font-medium rounded-lg text-sm px-4 py-2 text-center"
                              >
                                Apply Now
                              </Link>
                            )}
                            <ModalDetail post={post} />
                          </>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 flex items-center justify-center">
                    <p className="text-center text-gray-600 pb-16">
                      No matching posts found.
                    </p>
                  </div>
                )
              ) : (
                <div className="sm:w-screen sm:h-[40vh] flex justify-center items-center">
                  <Loading
                    className={"mr-10 lg:mr-0 lg:ml-[-200px] lg:mt-[-70px]"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* pagination */}
        <div
          id="opportunity"
          className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-24 py-10 "
        >
          <Button
            variant="text"
            className="md:flex items-center gap-2 hidden text-[12px]"
            color="blue"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 rounded-full" />{" "}
            Previous
          </Button>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            {Array.from({ length: npage }, (_, index) => (
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
      </section>
    </>
  );
}

export default Opportunity;

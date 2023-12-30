import React, { useState } from "react";
import { ModalDetail } from "./ModalDetail";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import TimeStamp from "../shared/TimeStamp";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import { Avatar } from "@mui/material";
import Loading from "../../pages/loading";

function Opportunity({ posts, loading }) {
  const user = auth.currentUser;
  //pagination
  const [active, setActive] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = posts.slice(firstIndex, lastIndex);
  //number of page
  const npage = Math.ceil(posts.length / recordsPerPage);
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

  //search data
  const filterData = () => {
    if (!searchTerm) {
      return posts.slice(firstIndex, lastIndex);
    }
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <>
      <section>
        <div className="pt-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-4">
            <div className="flex justify-between flex-wrap">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl text-center md:text-left font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Opportunity
                </h2>
                <p className="mt-3 text-lg text-center md:text-left leading-8 text-gray-600">
                  Find opportunity to grow your experience and potential here.
                </p>
              </div>
              <form class="flex items-center my-10 mx-auto md:mx-0 md:my-0">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative w-full">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search branch name..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>
            </div>
            <div className=" border-t border-gray-400  pt-10 sm:mt-10 sm:pt-10"></div>
            <div
              className={`mx-auto grid max-w-2xl shadow-sm ${
                loading ? "h-[150px]" : ""
              } grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3`}
            >
              {!loading ? (
                records.map((post) => (
                  <div
                    key={post.id}
                    className="flex max-w-xl flex-col items-start justify-evenly border rounded-md"
                  >
                    <div>
                      <div className="relative flex items-center gap-x-4 m-4 cursor-pointer">
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
                      <div className="flex items-center gap-x-4 text-xs ml-[70px] mt-[-20px]">
                        <time
                          dateTime={post.timestamp}
                          className="text-gray-500"
                        >
                          <TimeStamp post={post} />
                        </time>
                        <a
                          href={`https://${post.url}`}
                          target="blank"
                          className="relative z-10 rounded-full px-3 py-1.5 font-medium bg-gray-300 text-grey-100 hover:bg-blue-500 hover:text-white"
                        >
                          {post.url}
                        </a>
                      </div>
                    </div>
                    <div className="group relative h-36">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        <span className="pl-2" />
                        {post.title}
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 pl-1">
                        <span className="pl-5" />
                        {post.description}
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-3 pb-4 pl-2">
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
                            to={`#`}
                            className="text-white bg-blue-600 hover:bg-blue-400 rounded-lg border border-gray-200 text-sm font-medium px-4 py-2 hover:text-gray-900 focus:z-10 "
                          >
                            {" "}
                            View Applications
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            to={`/apply-form/${post.id}`}
                            class="text-white bg-blue-600 hover:bg-blue-400  font-medium rounded-lg text-sm px-4 py-2 text-center"
                          >
                            Apply Now
                          </Link>
                          <ModalDetail post={post} />
                        </>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <Loading className={"absolute left-[45%] mt-10"} />
              )}
            </div>
          </div>
        </div>

        {/* pagination */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-24 py-10 ">
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
            {numbers.map((index) => (
              <IconButton key={index} size="sm" {...getItemProps(index)}>
                {index}
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

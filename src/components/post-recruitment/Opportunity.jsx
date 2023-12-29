import React from "react";
import Pagination from "../shared/Pagination";
import { ModalDetail } from "./ModalDetail";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import TimeStamp from "../shared/TimeStamp";
// const posts = [
//   {
//     id: "ajkshdkjahsdkj",
//     title: "Title of Recruiment",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     date: "Posted date",
//     datetime: "2023-06-14",
//     category: { title: "Website", href: "#" },
//     author: {
//       name: "Organization Name",
//       role: "Name of User",
//       imageUrl: "src/assets/icons/people.png",
//     },
//   },
//   {
//     id: "akdjkashjkdhajkdhak",
//     title: "Title of Recruiment",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     date: "Posted date",
//     datetime: "2023-06-14",
//     category: { title: "Website", href: "#" },
//     author: {
//       name: "Organization Name",
//       role: "Name of User",
//       imageUrl: "src/assets/icons/people.png",
//     },
//   },
//   {
//     id: "kandsjkandjkak",
//     title: "Title of Recruiment",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     date: "Posted date",
//     datetime: "2023-06-14",
//     category: { title: "Website", href: "#" },
//     author: {
//       name: "Organization Name",
//       role: "Name of User",
//       imageUrl: "src/assets/icons/people.png",
//     },
//   },
//   {
//     id: "adkjnakjsndkandsjna",
//     title: "Title of Recruiment",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     date: "Posted date",
//     datetime: "2023-06-14",
//     category: { title: "Website", href: "#" },
//     author: {
//       name: "Organization Name",
//       role: "Name of User",
//       imageUrl: "src/assets/icons/people.png",
//     },
//   },
//   {
//     id: "adsknajkdnjkac",
//     title: "Title of Recruiment",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     date: "Posted date",
//     datetime: "2023-06-14",
//     category: { title: "Website", href: "#" },
//     author: {
//       name: "Organization Name",
//       role: "Name of User",
//       imageUrl: "src/assets/icons/people.png",
//     },
//   },
//   {
//     id: "aksjndjkansdkjnajkx",
//     title: "Title of Recruiment",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     date: "Posted date",
//     datetime: "2023-06-14",
//     category: { title: "Website", href: "#" },
//     author: {
//       name: "Organization Name",
//       role: "Name of User",
//       imageUrl: "src/assets/icons/people.png",
//     },
//   },
// ];
function Opportunity({ posts }) {
  console.log(posts);
  const user = auth.currentUser;

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
            <div className=" border-t border-gray-400  pt-10 sm:mt-16 sm:pt-16"></div>
            <div className="mx-auto grid max-w-2xl shadow-sm grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-evenly border rounded-md"
                >
                  <div>
                    <div className="relative flex items-center gap-x-4 m-4 cursor-pointer">
                      <img
                        src={user.photoURL}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <span className="absolute inset-0" />
                          {/* {post.author.name} */}
                          {user.displayName}
                        </p>
                        <p className="text-gray-600 ">
                          {/* {post.author.role} */}
                          {user.displayName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4 text-xs ml-[70px] mt-[-20px]">
                      <time
                        dateTime={post.data.timestamp}
                        className="text-gray-500"
                      >
                        {/* {post.data.startDate} */}
                        <TimeStamp post={post.data} />
                      </time>
                      <a
                        href={`https://${post.data.url}`}
                        target="blank"
                        className="relative z-10 rounded-full px-3 py-1.5 font-medium bg-gray-300 text-grey-100 hover:bg-blue-500 hover:text-white"
                      >
                        {post.data.url}
                      </a>
                    </div>
                  </div>
                  <div className="group relative h-36">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      <span className="pl-2" />
                      {post.data.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 pl-1">
                      <span className="pl-5" />
                      {post.data.description}
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3 pb-4 pl-2">
                    {post.data.userId === user.uid ? (
                      <>
                        <Link
                          to={`/recruitmentForm/${post.id}`}
                          className="text-white bg-blue-600 hover:bg-blue-400 rounded-lg border border-gray-200 text-sm font-medium px-4 py-2 hover:text-gray-900 focus:z-10 "
                        >
                          {" "}
                          Edit Post
                        </Link>
                        <ModalDetail post={post.data} />
                      </>
                    ) : (
                      <>
                        <Link
                          to={`/apply-form/${post.id}`}
                          class="text-white bg-blue-600 hover:bg-blue-400  font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                          Apply Now
                        </Link>
                        <ModalDetail post={post.data} />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination />
      </section>
    </>
  );
}

export default Opportunity;

import { Link } from "react-router-dom";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useEffect, useState } from "react";
import TimeStamp from "../../components/shared/TimeStamp";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { getFeedBack } from "../../api/user.api";

const Contact = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        // Subscribe to real-time updates
        const unsubscribe = onSnapshot(
          collection(db, "contactus"),
          async () => {
            const fetchData = await getFeedBack();
            setFeeds(fetchData);
            setLoading(false);
          }
        );
        // Set loading back to false when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        setLoading(false);
        console.error("Error fetching posts:", error);
      }
    };

    fetchFeed();
  }, []);

  // Pagination logic
  const indexOfLastFeed = currentPage * itemsPerPage;
  const indexOfFirstFeed = indexOfLastFeed - itemsPerPage;
  const currentFeeds = feeds.slice(indexOfFirstFeed, indexOfLastFeed);
  const totalPages = Math.ceil(feeds.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <DashboardLayout>
      {/* head of page  */}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 ">
        {/* all user , text search btn and setting icon */}
        <div className="w-full mb-1">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
              FeedBack
            </h1>
          </div>
          <div className="sm:flex">
            <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 ">
              <form className="lg:pr-3" action="#" method="GET">
                <label htmlFor="users-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                  <input
                    type="text"
                    name="search"
                    // value={searchInput}
                    // onChange={handleSearch}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    placeholder="Search for users"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
              <button
                // onClick={exportToExcel}
                className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 sm:w-auto "
              >
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    filerule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end head  */}

      {/* table  */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th scope="col" className="pl-4 pr-2 py-4"></th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase truncate"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase truncate"
                    >
                      feedback
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      name
                    </th>

                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      Sent
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y py-10 divide-gray-200 ">
                  {currentFeeds.map((feed, index) => (
                    <tr key={feed.id} className="hover:bg-gray-100 ">
                      {/* index  */}
                      <td className="w-4 p-4">{index + 1}</td>

                      {/* email  */}
                      <td className="max-w-[200px] p-4 overflow-hidden text-sm font-normal text-gray-900 truncate">
                        {feed?.data?.email}
                      </td>

                      {/* message  */}
                      <td className="max-w-[250px] p-4 overflow-hidden text-sm font-normal text-gray-900 truncate">
                        {feed?.data?.message} hello
                      </td>
                      {/* position  */}
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap ">
                        {feed?.data?.name}
                      </td>

                      {/* deadline */}
                      <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap ">
                        <TimeStamp post={feed?.data} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* end table  */}

      {/* pagination */}
      <div className="items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`inline-flex justify-center p-1  rounded  ${
              currentPage === 1
                ? "text-gray-300"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`inline-flex justify-center p-1 mr-2  rounded ${
              currentPage === totalPages
                ? "text-gray-300"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                filerule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <span className="text-sm font-normal text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {indexOfFirstFeed + 1}-{Math.min(indexOfLastFeed, feeds.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">{feeds.length}</span>
          </span>
        </div>
        <div className="flex items-center mx-6 space-x-3">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "bg-gray-400"
                : "bg-gray-600 hover:bg-gray-800"
            } inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg`}
          >
            <svg
              className="w-5 h-5 mr-1 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "bg-gray-400"
                : "bg-gray-600 hover:bg-gray-800"
            } inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg`}
          >
            Next
            <svg
              className="w-5 h-5 ml-1 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                filerule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useEffect, useState } from "react";
import { getAllInspirationByInfo } from "../../api/post.api";

const Inspiration = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const InspiData = await getAllInspirationByInfo();
        setData(InspiData);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <DashboardLayout>
      {/* head of page  */}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 ">
        {/* all user , text search btn and setting icon */}
        <div className="w-full mb-1">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
              All Inspiration Post
            </h1>
          </div>
          <div className="sm:flex">
            <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 ">
              <form className="lg:pr-3">
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
                    <th scope="col" className="pl-4 pr-2 py-4">
                      <div className="flex items-center"></div>
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase truncate"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase truncate"
                    >
                      title
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      description
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      post by
                    </th>

                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      post date
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y py-10 divide-gray-200  ">
                  <tr className="hover:bg-gray-100 ">
                    {/* all check box  */}
                    <td className="w-4 p-4">1</td>

                    <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap ">
                      <img
                        src={data[0].inspirationUrl}
                        className="w-15 h-10"
                        alt=""
                      />
                    </td>

                    {/* title  */}
                    <td className="max-w-[200px] p-4 overflow-hidden text-sm font-normal text-gray-900 truncate">
                      Recruit Songsa tuk der lg chlong chnam nat knea nham ey
                    </td>

                    {/* description  */}
                    <td className="max-w-[250px] p-4 overflow-hidden text-sm font-normal text-gray-900 truncate">
                      The objectives of the RUPP Engineering Day are to promote
                      engineering students creativity and innovation through
                      research and development project competition, to
                      acknowledge outstanding students of the year, and to
                      recognize students involving in social activities. Dynamic
                      Scientific is very honor to be part of it and wish all the
                      best in advance to all the students participating in the
                      RUPP Engineering Day.
                    </td>
                    {/* position  */}
                    <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap ">
                      
                    </td>

                    {/* deadline */}
                    <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap ">
                      2023-12-18
                    </td>

                    {/* btn edit delete ... */}
                    <td className="p-4 space-x-2 whitespace-nowrap">
                      <Link to={`/dashboard/users/view-details`}>
                        <button
                          type="button"
                          data-modal-target="edit-user-modal"
                          data-modal-toggle="edit-user-modal"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg bg-gray-500 hover:bg-gray-800 "
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                            <path
                              filerule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          data-modal-target="delete-user-modal"
                          data-modal-toggle="delete-user-modal"
                          className="inline-flex ml-2 justify-center items-center p-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-900 "
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* end table  */}
    </DashboardLayout>
  );
};

export default Inspiration;

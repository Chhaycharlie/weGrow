import DashboardLayout from "../../components/Layout/DashboardLayout";
import * as XLSX from "xlsx";
import { useState, useEffect } from "react";
import { getAllUser } from "../../api/user.api";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllUser();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  //export excel
  const exportToExcel = () => {
    const dataToExport = users.map((user) => ({
      Username: user.data.displayName,
      Email: user.data.email,
      Role: user.data.role,
      Location: user.data.location,
      Phone: user.data.phoneNumber,
    }));

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
  };

  // Filter users based on the search input for username or email
  const filteredUsers = users.filter(
    (user) =>
      user.data.displayName.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.data.email.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.data.role.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <DashboardLayout>
      {/* head of page  */}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 ">
        {/* all user , text search btn and setting icon */}
        <div className="w-full mb-1">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
              All users
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
                    value={searchInput}
                    onChange={handleSearch}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    placeholder="Search for users"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
              <button
                onClick={exportToExcel}
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
                    <th scope="col" className="p-4"></th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      Phone
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
                  {users
                    ? filteredUsers.map((user, index) => (
                        <tr key={user.id} className="hover:bg-gray-100 ">
                          <td className="w-4 p-4">{index + 1}</td>
                          <td className="flex items-center p-4 pl-2 whitespace-nowrap">
                            <Avatar
                              sx={{ width: 30, height: 30 }}
                              src={user?.data?.photoUrl ?? ""}
                            >
                              {user?.data?.displayName[0]}
                            </Avatar>
                            <div className="text-base font-normal pl-2 text-gray-900 ">
                              <h1>{user?.data?.displayName}</h1>
                            </div>
                          </td>
                          <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-900 truncate xl:max-w-xs ">
                            {user?.data?.email}
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                            {user?.data?.role}
                          </td>

                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                            {user?.data?.location}
                          </td>

                          {/* status  */}
                          <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap ">
                            <div className="flex items-center">
                              {user?.data?.phoneNumber}
                            </div>
                          </td>

                          {/* btn edit and delete  */}
                          <td className="p-4 space-x-2 whitespace-nowrap">
                            <Link
                              to={`/dashboard/users/view-details/${user.id}`}
                            >
                              <button
                                type="button"
                                data-modal-target="edit-user-modal"
                                data-modal-toggle="edit-user-modal"
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-800 "
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
                            </Link>
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* end table  */}

      {/* pagination */}
      <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between">
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
              {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, users.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">{users.length}</span>
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

export default User;

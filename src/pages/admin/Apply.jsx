import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useEffect, useState } from "react";
import { getSubmitInfo } from "../../api/post.api";
import TimeStamp from "../../components/shared/TimeStamp";
import { Avatar } from "@mui/material";
import Doc from "../../components/shared/SVG/Doc";
import Pdf from "../../components/shared/SVG/Pdf";
import File from "../../components/shared/SVG/File";
import Modal from "../../components/shared/Modal";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import { deleteDoc, doc, collection, onSnapshot } from "firebase/firestore";
import * as XLSX from "xlsx";

const Apply = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const type_of_file = {
    "image/svg+xml": <Doc />,
    "application/pdf": <Pdf />,
    "application/msword": <Doc />,
    file: <File />,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const unsubscribe = onSnapshot(
          collection(db, "user-submit-form"),
          async () => {
            const list = await getSubmitInfo();
            setData(list);
            setLoading(false);
          }
        );
        // Set loading back to false when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  // Filter items based on the search query
  const filteredItems = currentItems.filter(
    (item) =>
      item.form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.user.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.application.fileName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const handleDelete = (submitId) => {
    try {
      setDeleteLoading(true);
      const applyRef = doc(db, "apply-volunteers", submitId);
      const userSubmitRef = doc(db, "user-submit-form", submitId);
      deleteDoc(applyRef).then(() => {
        deleteDoc(userSubmitRef)
          .then(() => {
            setDeleteLoading(false);
            toast.success("Form deleted!", {
              position: toast.POSITION.TOP_CENTER,
            });
          })
          .catch((error) => {
            setDeleteLoading(false);
            toast.error(error);
          });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const exportToExcel = () => {
    const dataToExport = data?.map((post) => ({
      applyer: post?.user?.displayName,
      title_post: post?.form?.title,
      gender: post?.application?.gender,
      dob: post?.application?.dob,
      phone: post?.application?.phone,
      address: post?.application?.address,
      email: post?.application?.email,
      position: post?.application?.position,
      expectation: post?.application?.expectation,
    }));

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Apply");
    XLSX.writeFile(wb, "Apply_Recruitments.xlsx");
  };

  return (
    <DashboardLayout>
      {/* head of page  */}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 ">
        {/* all user , text search btn and setting icon */}
        <div className="w-full mb-1">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
              All Applies Volunteer
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
                    value={searchQuery}
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
                    <th scope="col" className="pl-4 pr-2 py-4"></th>
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
                      candicates
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase truncate"
                    >
                      Application
                    </th>

                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      phone
                    </th>

                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                    >
                      submit at
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
                  {data
                    ? filteredItems.map((submit, index) => (
                        <tr
                          key={submit?.submitId}
                          className="hover:bg-gray-100 "
                        >
                          {/* all check box  */}
                          <td className="w-4 p-4">
                            {indexOfFirstItem + index + 1}
                          </td>

                          {/* title  */}
                          <td className="max-w-[220px] p-4 overflow-hidden text-sm font-normal text-gray-900 truncate">
                            {submit?.form?.title}
                          </td>

                          {/* position  */}
                          <td className="flex items-center p-4 text-sm font-normal text-gray-900 whitespace-nowrap ">
                            <Avatar
                              sx={{ width: 30, height: 30 }}
                              src={submit?.user?.photoUrl ?? ""}
                            >
                              {submit?.user?.displayName[0]}
                            </Avatar>
                            <div className="text-sm font-normal pl-2 text-gray-900 ">
                              <h1>{submit?.user?.displayName}</h1>
                            </div>
                          </td>

                          {/* application  */}
                          <td className="max-w-[180px] p-4 overflow-hidden text-sm font-normal text-gray-900 truncate">
                            <span className="flex justify-start gap-2 text-sm font-medium text-gray-900 dark:text-white ">
                              {/* svg here */}
                              {type_of_file[submit?.application?.fileType]}
                              <a
                                className="hover:underline"
                                href={submit?.application?.cvUrl}
                                target="blank"
                              >
                                {submit?.application?.fileName}
                              </a>
                            </span>
                          </td>

                          {/* phone  */}
                          <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap ">
                            {submit?.user?.phoneNumber}
                          </td>
                          {/* submit at */}
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                            <TimeStamp timestamp={submit?.submittedAt} />
                          </td>

                          {/* btn edit delete ... */}
                          <td className="p-4 space-x-2 whitespace-nowrap">
                            <Modal
                              onDelete={() => handleDelete(submit.submitId)}
                            />
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
              {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">{data.length}</span>
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

export default Apply;

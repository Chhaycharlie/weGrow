import Doc from "../shared/SVG/Doc";
import Pdf from "../shared/SVG/Pdf";
import File from "../shared/SVG/File";
import AppLayout from "../Layout/AppLayout";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApplicationSubmission } from "../../api/post.api";
import TimeStamp from "../shared/TimeStamp";
import { Avatar } from "@mui/material";
import Loading from "../../pages/Loading";

const ViewApplication = () => {
  const [data, setData] = useState([]);
  const { formId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchApplication = await getApplicationSubmission(formId);
      setData(fetchApplication);
      setLoading(false);
    };

    fetchData();
  }, []);

  const type_of_file = {
    "image/svg+xml": <Doc />,
    "application/pdf": <Pdf />,
    "application/msword": <Doc />,
    file: <File />,
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <AppLayout>
      {loading ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div class="antialiased font-sans bg-gray-100 min-h-[90vh]">
          <div class="container mx-auto px-4 sm:px-8">
            <div class="pt-3">
              <button
                type="button"
                onClick={handleBack}
                className="w-36 h-10 flex items-center justify-center pr-2 m-2 sm:mb-1 py-2 text-sm text-black transition-colors duration-200 bg-white border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-200 dark:text-gray-200 dark:border-gray-700"
              >
                <svg
                  className="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Application Submission
                </h2>
              </div>
              <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                  <div class="relative">
                    <select class=" h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>5</option>
                      <option>10</option>
                      <option>20</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div class="relative">
                    <select class=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                      <option>All</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="block relative">
                  <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      viewBox="0 0 24 24"
                      class="h-4 w-4 fill-current text-gray-500"
                    >
                      <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                    </svg>
                  </span>
                  <input
                    placeholder="Search"
                    class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden h-full">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Username
                        </th>
                        <th class="hidden lg:block px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Email
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Application
                        </th>
                        <th class="hidden sm:block px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Submitted At
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0 ? (
                        data.map((application) => (
                          <tr key={application.id}>
                            <td class="px-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                  <Avatar
                                    sx={{ width: 40, height: 40 }}
                                    src={application?.user?.photoUrl}
                                    className="cursor-pointer hover:shadow-none"
                                  >
                                    {application?.user?.displayName[0]}
                                  </Avatar>
                                </div>
                                <div class="flex-shrink-0 ml-3">
                                  <p class="text-gray-900">
                                    {application?.user?.displayName}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="hidden lg:block px-5 py-6 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {application?.user?.email}
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {/* file */}
                              <div className="flex-1">
                                <div>
                                  <span className="flex justify-start gap-2 text-sm font-medium text-gray-900 dark:text-white ">
                                    {/* svg here */}
                                    {type_of_file[application?.fileType]}
                                    <a
                                      className="hover:underline"
                                      href={application?.cvUrl}
                                      target="blank"
                                    >
                                      {application?.fileName}
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td class="hidden sm:block px-5 py-6 border-b border-gray-200 bg-white text-sm">
                              <span class="relative inline-block px-3 font-semibold text-green-900 leading-tight">
                                <span class="relative">
                                  <TimeStamp post={application} />
                                </span>
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="h-[40vh]">
                          <td className="text-start invisible">1</td>
                          <td className="text-end sm:invisible hidden sm:block">
                            10000000000000
                          </td>
                          <td className="text-start text-xl">
                            no record on this application
                          </td>
                          <td className="text-start invisible">1</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                    <span class="text-xs xs:text-sm text-gray-900">
                      Showing 1 to 4 of 50 Entries
                    </span>
                    <div class="inline-flex mt-2 xs:mt-0">
                      <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default ViewApplication;

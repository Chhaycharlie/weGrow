import Doc from "../shared/SVG/Doc";
import Pdf from "../shared/SVG/Pdf";
import File from "../shared/SVG/File";
import AppLayout from "../Layout/AppLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewApplication = () => {
  const [data, setData] = useState([]);

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
      {/* title */}
      <section className="flex flex-col antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        {/* go back button */}
        <button
          type="button"
          onClick={handleBack}
          class="w-36 h-10 flex items-center justify-center pr-2 m-2 sm:mt-4 sm:mb-1 py-2 text-sm text-black transition-colors duration-200 bg-gray-200 border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        >
          <svg
            class="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Go back</span>
        </button>
        <div className="h-full">
          <h1 className="text-3xl pt-2 pb-4 px-[3%] sm:px-[4%] lg:px-[12%] sm:py-5 xl:px-[20%]">
            Application Submission
          </h1>
          <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Title</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                {/* table header */}
                <div className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 flex">
                  <div className="p-2 whitespace-nowrap flex-1">
                    <div className="font-semibold text-left">Name</div>
                  </div>

                  <div className="p-2 whitespace-nowrap flex-1 lg:block hidden">
                    <div className="font-semibold text-left">Email</div>
                  </div>

                  <div className="p-2 whitespace-nowrap flex-1">
                    <div className="font-semibold">Application</div>
                  </div>

                  <div className="p-2 whitespace-nowrap flex-1">
                    <div className="font-semibold">Submitted At</div>
                  </div>
                </div>

                {/* table body */}
                {data ? (
                  <div className="w-full h-[500px] flex justify-center items-center">
                    {/* avatar & username */}
                    <h1 className="text-xl pb-10">no record data</h1>
                  </div>
                ) : (
                  <div>
                    {/* avatar & username */}
                    <div className="flex pt-2 pl-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                            width="40"
                            height="40"
                            alt="Mirko Fisuk"
                          />
                        </div>
                        <div className="font-medium text-gray-800 hidden md:block">
                          Mirko Fisuk
                        </div>
                      </div>

                      {/* email */}
                      <div className="p-2 whitespace-nowrap flex-1 lg:block hidden">
                        <div className="text-center pt-2 pl-10">
                          mirkofisuk@gmail.com
                        </div>
                      </div>

                      {/* file */}
                      <div className="p-2 whitespace-nowrap flex-1">
                        <div className="mt-3 pl-6 sm:pl-10">
                          <span className="flex justify-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                            {/* svg here */}
                            <Pdf />
                            <a
                              className="hover:underline"
                              href={`https://firebasestorage.googleapis.com/v0/b/wegrow-9c696.appspot.com/o/cv%2FS5aPr7n4L8YDM56iHcnCLsYGjkv1%2Bajkshdkjahsdkj?alt=media&token=41f6339c-4fd0-4c6e-9c03-413396fd53d5`}
                              target="blank"
                            >
                              Application_Name
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="p-2 whitespace-nowrap flex-1 md:pr-14">
                        <div className="text-center pt-2">1 day ago</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default ViewApplication;

import Doc from "../shared/SVG/Doc";
import Pdf from "../shared/SVG/Pdf";
import File from "../shared/SVG/File";
import AppLayout from "../Layout/AppLayout";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApplicationSubmission } from "../../api/post.api";
import TimeStamp from "../shared/TimeStamp";
import { Avatar } from "@mui/material";

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

  console.log(data);

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
          className="w-36 h-10 flex items-center justify-center pr-2 m-2 sm:mt-4 sm:mb-1 py-2 text-sm text-black transition-colors duration-200 bg-gray-200 border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
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
        <div className="h-full">
          <h1 className="text-3xl pt-2 pb-4 px-[3%] sm:px-[4%] lg:px-[12%] sm:py-5 xl:px-[20%]">
            Application Submission
          </h1>
          <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">{data[0]?.title}</h2>
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
                {!data ? (
                  <div className="w-full h-[500px] flex justify-center items-center">
                    {/* avatar & username */}
                    <h1 className="text-xl pb-10">no record data</h1>
                  </div>
                ) : (
                  data.map((application) => (
                    <div key={application.id}>
                      {/* avatar & username */}
                      <div className="flex pt-2 pl-2">
                        <div className="flex items-center space-x-2">
                          <Avatar
                            sx={{ width: 30, height: 30 }}
                            src={application?.user?.photoUrl}
                            className="cursor-pointer hover:shadow-none"
                          >
                            {application?.user?.displayName[0]}
                          </Avatar>
                          <div className="font-medium text-gray-800 hidden md:block">
                            {application?.user?.displayName}
                          </div>
                        </div>

                        {/* email */}
                        <div className="p-2 whitespace-nowrap flex-1 lg:block hidden">
                          <div className="text-center pt-2 pl-10">
                            {application?.user?.email}
                          </div>
                        </div>

                        {/* file */}
                        <div className="p-2 whitespace-nowrap flex-1">
                          <div className="mt-3 pl-6 sm:pl-10">
                            <span className="flex justify-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
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

                        <div className="p-2 whitespace-nowrap flex-1 md:pr-14">
                          <div className="text-center pt-2">
                            <TimeStamp post={application} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
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

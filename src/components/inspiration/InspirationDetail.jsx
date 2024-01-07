import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import { useEffect, useState } from "react";
import { getInspirationById } from "../../api/post.api";
import TimeStamp from "../shared/TimeStamp";
import { Avatar } from "@mui/material";
import Loading from "../../pages/Loading";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import SmallSpinner from "../shared/SmallSpinner";
import { doc, deleteDoc } from "firebase/firestore";

const InspirationDetail = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const formData = await getInspirationById(formId);
        setData(formData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [formId]);

  console.log(data);

  const handleBack = () => {
    navigate(-1);
  };

  //handle delete post
  const handleDelete = () => {
    try {
      setDeleteLoading(true);
      const postRef = doc(db, "inspirations", formId);
      deleteDoc(postRef).then(() => {
        toast.success("post deleted !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
      setDeleteLoading(false);
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.error("Invalid Delete This Post Right Now");
    }
  };

  return (
    <AppLayout>
      {loading ? (
        <div className="h-[80vh] w-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          {/* go back button */}
          <button
            type="button"
            onClick={handleBack}
            className=" flex items-center justify-center m-10 px-5 py-2 text-sm text-black transition-colors duration-200 bg-gray-200 border rounded-lg gap-x-2 w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
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
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span>Go back</span>
          </button>

          {/* <!-- Container for demo purpose --> */}
          <div className="container mt-10 mb-4 mx-auto md:px-6 min-h-[80vh] h-auto">
            {/* <!-- Section: Design Block --> */}
            <section className="mb-32 mx-6">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                  <div className="flex lg:py-12 w-[100%] relative">
                    <img
                      src={data?.inspirationUrl}
                      className="md:absolute border border-gray-300 z-[20] h-[400px] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 min-h-[500px] overflow-auto">
                  <div className="flex h-full items-center rounded-lg bg-blue-400 p-6 text-center text-white lg:pl-12 lg:text-left">
                    <div className="lg:pl-12">
                      <h2 className="mb-8 text-3xl font-bold">{data?.title}</h2>
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                          <Avatar
                            sx={{ width: 35, height: 35 }}
                            src={data?.user?.photoUrl}
                          >
                            {data?.user?.displayName[0]}
                          </Avatar>
                          <h1 className="mt-[-18px]">
                            {data?.user?.displayName}
                          </h1>
                        </div>
                        <p className="mb-8 mr-52 md:mr-0 md:ml-10 mt-[-15px]">
                          <TimeStamp timestamp={data?.timestamp} />
                        </p>
                      </div>

                      <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                        <p className="mx-auto mb-4 md:flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20 hidden ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="mr-2 h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Best team
                        </p>

                        <p className="mx-auto mb-2 md:flex items-center md:mx-0 lg:mb-0 hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="mr-2 h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Best experience
                        </p>
                      </div>

                      <p className="text-start">{data?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {data?.user?.userId === auth.currentUser.uid ? (
              <div className="w-full flex justify-center">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 mb-10 w-32 h-10 text-white rounded-lg hover:"
                >
                  {deleteLoading ? (
                    <SmallSpinner className={"mt-2"} />
                  ) : (
                    "Delete Post"
                  )}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </AppLayout>
  );
};

export default InspirationDetail;

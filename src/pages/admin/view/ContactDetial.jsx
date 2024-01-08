import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import { FeedBackDetial } from "../../../api/post.api";
import { useParams } from "react-router-dom";

const ContactDetial = () => {
  const { feedbackId } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [inputData, setInputData] = useState({
    email: "",
    name: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const feed = await FeedBackDetial(feedbackId);
        setData(feed);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setInputData({
      email: data?.email ?? "",
      name: data?.name ?? "",
      message: data?.message ?? "",
    });
  }, [data]);

  return (
    <DashboardLayout>
      <div className="items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 sm:h-full">
        <div className="relative w-full min-h-full md:h-auto">
          <div className="relative bg-white shadow">
            <div className="flex items-start justify-between p-5">
              <h3 className="text-xl font-semibold ">FeedBack / view detail</h3>
            </div>

            <div className="p-6 space-y-6">
              <form>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={inputData.email}
                      className="shadow-sm bg-white border border-gray-500 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5   "
                      placeholder="email"
                      disabled
                      readOnly
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3"></div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={inputData.name}
                      className="shadow-sm border border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="example@company.com"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="col-span-4">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      description
                    </label>
                    <textarea
                      name="description"
                      rows="10"
                      value={inputData.message}
                      className="shadow-sm border border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="write detail about your recruiting"
                      disabled
                      readOnly
                    ></textarea>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="created"
                      className="block text-sm font-medium text-gray-900 "
                    >
                      Created At
                    </label>
                    <input
                      type="text"
                      name="createdAt"
                      value={data?.timestamp?.toDate() || ""}
                      className="shadow-sm  mb-10 mt-2  border border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5   "
                      placeholder=""
                      disabled
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContactDetial;

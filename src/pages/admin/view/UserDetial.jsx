import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "../../../api/user.api";
import { Avatar } from "@mui/material";
import { db } from "../../../firebase";
import { updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const EditUsers = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    location: "",
    organizationName: "",
    organizationEmail: "",
    phoneNumber: "",
    role: "",
    url: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCurrentUser(userId);
        setUser(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    setInputData({
      username: user?.displayName ?? "",
      email: user?.email ?? "",
      location: user?.location ?? "",
      organizationName: user?.organizationName ?? "",
      organizationEmail: user?.organizationEmail ?? "",
      phoneNumber: user?.phoneNumber ?? "",
      role: user?.role ?? "",
      url: user?.photoUrl ?? "",
    });
  }, [user]);

  const onChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => setIsEdit(true);
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //handle update logic
      const formData = {
        location: inputData.location,
        organizationEmail: inputData.organizationEmail,
        organizationName: inputData.organizationName,
        role: inputData.role,
      };

      //update firebase data
      const profileRef = doc(db, "users", userId);
      await updateDoc(profileRef, {
        ...formData,
        updatedTimeStamp: serverTimestamp(),
      });
      setLoading(false);
      setIsEdit(false);
      toast.success("Updated");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="py-1 items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-modal sm:h-full">
        <div className="relative w-full h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
              <h3 className="text-xl font-semibold ">
                {inputData.username} / edit profile
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={user?.displayName}
                      onChange={onChange}
                      className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   "
                      placeholder="Username"
                      disabled
                    />
                  </div>
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
                      onChange={onChange}
                      value={inputData.email}
                      className={`shadow-sm bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg ${
                        isEdit ? "" : "bg-gray-200"
                      } block w-full p-2.5   `}
                      placeholder="Email"
                      disabled
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      onChange={onChange}
                      value={inputData.location}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg ${
                        isEdit ? "" : "bg-gray-200"
                      } block w-full p-2.5   `}
                      placeholder="example@company.com"
                      required
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Role
                    </label>

                    <select
                      name="role"
                      onChange={onChange}
                      value={inputData.role}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                        isEdit ? "" : "bg-gray-200 "
                      }  `}
                      required
                      disabled={!isEdit}
                    >
                      <option disabled={true} value="">
                        please select role
                      </option>
                      <option value="organization">organization</option>
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="current-password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={inputData.phoneNumber}
                      className="shadow-sm border bg-gray-200 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                      placeholder=""
                      disabled
                      readOnly
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="organizationName"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={inputData.organizationName}
                      className={`${
                        isEdit ? "" : "bg-gray-200"
                      } shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   `}
                      placeholder=""
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="organizationEmail"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Organization Email
                    </label>
                    <input
                      type="text"
                      name="organizationEmail"
                      onChange={onChange}
                      value={inputData.organizationEmail}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lgblock w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      placeholder=""
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastlogin"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Last Login At
                    </label>
                    <input
                      type="text"
                      name="lastlogin"
                      value={user?.lastLogin?.toDate() || ""}
                      className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   "
                      placeholder=""
                      disabled
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="new-password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Created At
                    </label>
                    <input
                      type="text"
                      name="createdAt"
                      value={user?.createdTimeStamp?.toDate() || ""}
                      className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   "
                      placeholder=""
                      disabled
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="updatedAt"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Updated At
                    </label>
                    <input
                      type="text"
                      name="updatedAt"
                      value={user?.updatedTimeStamp?.toDate() || ""}
                      className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   "
                      placeholder=""
                      disabled
                    />
                  </div>
                </div>
              </form>

              <div className="items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-700">
                {isEdit ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="text-white bg-[#66CCFF] hover:bg-blue-400 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEdit(false)}
                      className="text-white bg-gray-400 hover:bg-gray-300 hover:text-gray-900 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="text-white bg-[#66CCFF] hover:bg-blue-400 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditUsers;

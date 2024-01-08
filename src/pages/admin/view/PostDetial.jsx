import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import { useParams } from "react-router-dom";
import { getPostWithUserInfoById } from "../../../api/post.api";
import { db } from "../../../firebase";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const PostDetial = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [isCancel, setIsCancel] = useState(false);
  const [inputData, setInputData] = useState({
    username: "",
    title: "",
    description: "",
    country: "",
    gender: "",
    age: "",
    people: "",
    position: "",
    department: "",
    academic: "",
    url: "",
    experience: "",
    email: "",
    result: "",
    startDate: "",
    deadline: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const onChange = (e) => {
    const trimmedValue = e.target.value.startsWith("https://")
      ? e.target.value.slice(8)
      : e.target.value;

    setInputData({
      ...inputData,
      [e.target.name]: trimmedValue,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const post = await getPostWithUserInfoById(postId);
        setData(post);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  useEffect(() => {
    setInputData({
      username: data?.user?.displayName ?? "",
      title: data?.title ?? "",
      description: data?.description ?? "",
      country: data?.country ?? "",
      gender: data?.gender ?? "",
      age: data?.age ?? "",
      people: data?.people ?? "",
      position: data?.position ?? "",
      department: data?.department ?? "",
      academic: data?.academic ?? "",
      url: data?.url ?? "",
      experience: data?.experience ?? "",
      email: data?.email ?? "",
      result: data?.result ?? "",
      startDate: data?.startDate ?? "",
      deadline: data?.deadline ?? "",
    });
    // Update checkboxValues based on skills from post.skill
    if (data && data?.skill) {
      const updatedCheckboxValues = { ...checkboxValues };

      Object.keys(updatedCheckboxValues).forEach((key) => {
        updatedCheckboxValues[key] = data.skill.includes(key);
      });

      setCheckboxValues(updatedCheckboxValues);
    }
  }, [data, isCancel]);

  const [checkboxValues, setCheckboxValues] = useState({
    projectManagement: false,
    research: false,
    teamwork: true,
    communication: false,
    timeManagement: false,
  });

  // Step 2: Create onChange handler to update the state
  const handleCheckboxChange = (checkboxName) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: !prevValues[checkboxName],
    }));
  };

  // Step 3: Function to get selected values
  const getSelectedValues = () => {
    return Object.keys(checkboxValues).filter((key) => checkboxValues[key]);
  };

  const handleSave = async () => {
    try {
      const formData = {
        title: inputData.title,
        description: inputData.description,
        country: inputData.country,
        gender: inputData.gender,
        age: inputData.age,
        people: inputData.people,
        position: inputData.position,
        department: inputData.department,
        academic: inputData.academic,
        url: inputData.url,
        experience: inputData.experience,
        email: inputData.email,
        result: inputData.result,
        skill: getSelectedValues(),
        startDate: inputData.startDate,
        deadline: inputData.deadline,
      };

      const recruitRef = doc(db, "volunteer-recruits", postId);
      await updateDoc(recruitRef, {
        ...formData,
        updatedTimeStamp: serverTimestamp(),
      });
      setLoading(false);
      setIsEdit(false);
      toast.success("post updated", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsCancel(true);
    setIsEdit(false);
  };

  return (
    <DashboardLayout>
      <div className="py-1 items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-modal sm:h-full">
        <div className="relative w-full h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
              <h3 className="text-xl font-semibold ">
                Recruitment / View Post Detail
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <form>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="user"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      User
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={inputData.username}
                      onChange={onChange}
                      className="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-200"
                      placeholder="Username"
                      disabled
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3"></div>
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
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      placeholder="Email"
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3"></div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="result"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      post title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={inputData.title}
                      onChange={onChange}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      placeholder=""
                      required
                      disabled={!isEdit}
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
                      value={inputData.description}
                      onChange={onChange}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg ${
                        isEdit ? "" : "bg-gray-200"
                      } block w-full p-2.5   `}
                      placeholder=""
                      disabled={!isEdit}
                    ></textarea>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      event location
                    </label>
                    <select
                      name="country"
                      onChange={onChange}
                      value={inputData.country}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg ${
                        isEdit ? "" : "bg-gray-200"
                      } block w-full p-2.5   `}
                      placeholder="example@company.com"
                      required
                      disabled={!isEdit}
                    >
                      <option disabled={true} value="">
                        please select city
                      </option>
                      <option value="Phnom Penh">Phnom Penh</option>
                      <option value="Kampong Cham">Kampong Cham</option>
                      <option value="Kampong Thom">Kampong Thom</option>
                      <option value="Prey Veng">Prey Veng</option>
                      <option value="Siem Reap">Siem Reap</option>
                      <option value="Battambang">Battambang</option>
                      <option value="Kandal">Kandal</option>
                      <option value="Svay Rieng">Svay Rieng</option>
                      <option value="Takéo">Takéo</option>
                      <option value="Kampot">Kampot</option>
                      <option value="Preah Sihanouk">Preah Sihanouk</option>
                      <option value="Koh Kong">Koh Kong</option>
                      <option value="Kep">Kep</option>
                      <option value="Kratié">Kratié</option>
                      <option value="Tboung Khmum">Tboung Khmum</option>
                      <option value="Kampong Speu">Kampong Speu</option>
                      <option value="Kampong Chhnang">Kampong Chhnang</option>
                      <option value="Preah Vihear">Preah Vihear</option>
                      <option value="Oddar Meanchey">Oddar Meanchey</option>
                      <option value="Banteay Meanchey">Banteay Meanchey</option>
                      <option value="Rattanakkiri">Rattanakkiri</option>
                      <option value="Mondulkiri">Mondulkiri</option>
                      <option value="Pursat">Pursat</option>
                      <option value="Stung Treng">Stung Treng</option>
                      <option value="Pailin">Pailin</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      recruitment gender
                    </label>

                    <select
                      name="gender"
                      onChange={onChange}
                      value={inputData.gender}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                        isEdit ? "" : "bg-gray-200 "
                      }  `}
                      required
                      disabled={!isEdit}
                    >
                      <option disabled={true} value="">
                        please select gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="department"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      recruit under department
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={inputData.department}
                      onChange={onChange}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lgblock w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      placeholder=""
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="position"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      recruiting position
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={inputData.position}
                      onChange={onChange}
                      className={`${
                        isEdit ? "" : "bg-gray-200"
                      } shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5   `}
                      placeholder=""
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="experience"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      expect experience from candidates
                    </label>
                    <input
                      type="text"
                      name="experience"
                      onChange={onChange}
                      value={inputData.experience}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      placeholder=""
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="age"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      recruiting age range
                    </label>
                    <select
                      name="age"
                      onChange={onChange}
                      value={inputData.age}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      required
                      placeholder=""
                      disabled={!isEdit}
                    >
                      <option disabled={true} value="">
                        please select age
                      </option>
                      <option value="Under 18">Under 18</option>
                      <option value="18-35">18-35</option>
                      <option value="Above 35">Above 35</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="people"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      number of recruitment
                    </label>

                    <select
                      name="people"
                      onChange={onChange}
                      value={inputData.people}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      required
                      placeholder=""
                      disabled={!isEdit}
                    >
                      <option disabled={true} value="">
                        please select how many candidates
                      </option>
                      <option value="1">1</option>
                      <option value="2 or 3">2 or 3</option>
                      <option value="5-10">5-10</option>
                      <option value="10-30">10-30</option>
                      <option value="50-100">50-100</option>
                      <option value="more">more</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="url"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      organization website
                    </label>
                    <input
                      type="text"
                      name="url"
                      value={inputData.url}
                      onChange={onChange}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      placeholder="www.example.com"
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="academic"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      qualification
                    </label>
                    <select
                      name="academic"
                      onChange={onChange}
                      value={inputData.academic}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      required
                      placeholder=""
                      disabled={!isEdit}
                    >
                      <option disabled={true} value="">
                        please select qualification
                      </option>
                      <option value="high school diploma">
                        high school diploma
                      </option>
                      <option value="Bachelor degree">Bachelor degree</option>
                      <option value="Masters degree">Masters degree</option>
                      <option value="Doctoral degree">Doctoral degree</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="startDate"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      start accept application
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={inputData.startDate}
                      onChange={onChange}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      placeholder=""
                      disabled={!isEdit}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="deadline"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      deadline application
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={inputData.deadline}
                      onChange={onChange}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      placeholder=""
                      disabled={!isEdit}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="result"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      result will be announce after
                    </label>

                    <select
                      name="result"
                      onChange={onChange}
                      value={inputData.result}
                      className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  ${
                        isEdit ? "" : "bg-gray-200"
                      }  `}
                      required
                      placeholder=""
                      disabled={!isEdit}
                    >
                      <option disabled value="">
                        please select result anouncement duration
                      </option>
                      <option value="After 1 Week">After 1 Week</option>
                      <option value="After 2 Week">After 2 Week</option>
                      <option value="After 3 Week">After 3 Week</option>
                      <option value="After 1 month">After 1 month</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="created"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      created at
                    </label>
                    <input
                      type="text"
                      name="created"
                      value={data?.updatedTimeStamp?.toDate()}
                      className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   "
                      placeholder=""
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="created"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      updated at
                    </label>
                    <input
                      type="text"
                      name="created"
                      value={data?.timestamp?.toDate()}
                      className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5   "
                      placeholder=""
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 pl-4">
                    <legend className=" text-base text-1.5xl font-medium text-gray-900">
                      Required Skill
                    </legend>
                    <div className="mt-2 space-y-4">
                      <div className="flex place-items-center">
                        <div clasName="flex items-center h-5">
                          <input
                            id="teamwork"
                            name="teamwork"
                            type="checkbox"
                            checked={checkboxValues.teamwork}
                            onChange={() => handleCheckboxChange("teamwork")}
                            className="focus:ring-indigo-500 p-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            required
                            disabled={!isEdit}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="teamwork"
                            className="font-regular text-gray-700"
                          >
                            Teamwork
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start ">
                        <div className="flex items-center h-5">
                          <input
                            id="project-management"
                            name="projectManagement"
                            type="checkbox"
                            checked={checkboxValues.projectManagement}
                            onChange={() =>
                              handleCheckboxChange("projectManagement")
                            }
                            disabled={!isEdit}
                            className="focus:ring-indigo-500 p-2 h-4 w-4 border text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="projectManagement"
                            className="font-regular text-gray-700"
                          >
                            Project management
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="research"
                            name="research"
                            type="checkbox"
                            disabled={!isEdit}
                            checked={checkboxValues.research}
                            onChange={() => handleCheckboxChange("research")}
                            className="focus:ring-indigo-500 p-2 h-4 w-4 border text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="research"
                            className="font-regular text-gray-700"
                          >
                            Research
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="communication"
                            name="communication"
                            type="checkbox"
                            checked={checkboxValues.communication}
                            onChange={() =>
                              handleCheckboxChange("communication")
                            }
                            disabled={!isEdit}
                            className="focus:ring-indigo-500 p-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="communication"
                            className="font-regular text-gray-700"
                          >
                            communication
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="timeManagement"
                            name="timeManagement"
                            type="checkbox"
                            checked={checkboxValues.timeManagement}
                            onChange={() =>
                              handleCheckboxChange("timeManagement")
                            }
                            disabled={!isEdit}
                            className="focus:ring-indigo-500 p-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="timeManagement"
                            className="font-regular text-gray-700"
                          >
                            Time management
                          </label>
                        </div>
                      </div>
                    </div>
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
                      onClick={handleCancel}
                      className="text-white bg-gray-400 hover:bg-gray-300 hover:text-gray-900 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsEdit(true);
                    }}
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

export default PostDetial;

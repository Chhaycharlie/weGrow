import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { getRecruitmentById } from "../../api/post.api";
import SmallSpinner from "../shared/SmallSpinner";

const RecruitmentForm = () => {
  const { formId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecruitmentById(formId);
        setPost(data);
      } catch (error) {
        console.error("Error fetching recruitment data:", error);
      }
    };

    // Only fetch data if formId is available
    if (formId) {
      fetchData();
    }
  }, [formId]);

  useEffect(() => {
    setInputData({
      title: post?.title || "",
      description: post?.description || "",
      country: post?.country || "",
      gender: post?.gender || "",
      age: post?.age || "",
      people: post?.people || "",
      position: post?.position || "",
      department: post?.department || "",
      academic: post?.academic || "",
      url: post?.url || "",
      experience: post?.experience || "",
      email: post?.email || "",
      result: post?.result || "",
      startDate: post?.startDate || "",
      deadline: post?.deadline || "",
    });
    // Update checkboxValues based on skills from post.skill
    if (post && post?.skill) {
      const updatedCheckboxValues = { ...checkboxValues };

      Object.keys(updatedCheckboxValues).forEach((key) => {
        updatedCheckboxValues[key] = post.skill.includes(key);
      });

      setCheckboxValues(updatedCheckboxValues);
    }
  }, [post]);

  const [inputData, setInputData] = useState({});

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    const trimmedValue = e.target.value.startsWith("https://")
      ? e.target.value.slice(8)
      : e.target.value;

    setInputData({
      ...inputData,
      [e.target.name]: trimmedValue,
    });
  };

  // Step 1: Initialize state for checkbox values
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

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      setLoading(true);
      const formData = {
        ...inputData,
        skill: getSelectedValues(),
        userId: user.uid,
        timestamp: serverTimestamp(),
      };
      // Add a new document with a generated id
      const recruitRef = doc(collection(db, "volunteer-recruits"));
      await setDoc(recruitRef, formData);

      setLoading(false);
      toast.success("Data added to Firestore successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log("Data added to Firestore successfully!");
      navigate("/recruitment");
    } catch (error) {
      setLoading(false);
      console.error("Error adding data to Firestore:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-20 py-5 text-center bg-blue-600  shadow overflow-hidden sm:rounded-md font-bold text-3xl text-white">
        Volunteer Recruitment Form
      </div>

      <section className="text-gray-600 body-font m-0 p-0 relative bg-blue-200"></section>

      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-1"></div>

        <div className="mt-10 md:mt-0 md:col-span-2 px-24 pt-10 ">
          <form onSubmit={handleFormSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md border border-gray-400">
              <div className="px-2 py-8 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title Recruitment
                    </label>
                    <input
                      value={inputData["title"]}
                      onChange={onChange}
                      type="text"
                      name="title"
                      placeholder="Write a short Title here..."
                      required
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recruiment Description
                    </label>
                    <input
                      type="text"
                      value={inputData.description}
                      onChange={onChange}
                      name="description"
                      placeholder="Write Description of Organization here"
                      required
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recruitment Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={inputData.startDate}
                      onChange={onChange}
                      placeholder="DD/MM/YYYY"
                      required
                      className="mt-1 p-2 focus:ring-indigo-500 border border-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="deadline"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recruitment Deadline
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={inputData.deadline}
                      onChange={onChange}
                      placeholder="DD/MM/YYYY"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <select
                      id="country"
                      name="country"
                      onChange={onChange}
                      value={inputData.country}
                      defaultValue="Phnom Penh"
                      className="mt-1 p-2 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
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
                      class="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      onChange={onChange}
                      value={inputData.gender}
                      defaultValue="Both"
                      className="mt-1 p-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    >
                      <option disabled={true} value="">
                        please select gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">female</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="age"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <select
                      id="gender"
                      name="age"
                      onChange={onChange}
                      value={inputData.age}
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    >
                      <option disabled={true} value="">
                        please select age
                      </option>
                      <option value="Under 18">Under 18</option>
                      <option value="18-35">18-35</option>
                      <option value="Above 35">Above 35</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="people"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How many people you are recruit?
                    </label>
                    <select
                      id="people"
                      name="people"
                      onChange={onChange}
                      value={inputData.people}
                      className="mt-1 p-2 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
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
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      placeholder="position want to recruit"
                      onChange={onChange}
                      value={inputData.position}
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="department"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      onChange={onChange}
                      value={inputData.department}
                      placeholder="position under department"
                      className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="web_url"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Website Organization
                    </label>
                    <input
                      type="text"
                      name="url"
                      onChange={onChange}
                      value={inputData.url}
                      placeholder="enter organization website (eg:www.wegrow.com)"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="academic"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Academic Qualification
                    </label>
                    <select
                      id="academic"
                      name="academic"
                      onChange={onChange}
                      value={inputData.academic}
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
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
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Required experience
                    </label>
                    <input
                      type="text"
                      name="experience"
                      onChange={onChange}
                      value={inputData.experience}
                      placeholder="expected from candidates ( eg: Need to have softskill...)"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Organization
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={onChange}
                      placeholder="Socheata123@example.com."
                      value={inputData.email}
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Result Announcement
                    </label>
                    <select
                      id="result"
                      name="result"
                      onChange={onChange}
                      value={inputData.result}
                      className="mt-1 p-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    >
                      <option>After 1 Week</option>
                      <option>After 2 Week</option>
                      <option>After 3 Week</option>
                      <option>After 1 month</option>
                    </select>
                  </div>
                </div>
                <div className="mt-8 ">
                  <legend className=" text-base  text-1.5xl font-medium text-gray-900">
                    Tell me some of your skill
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
                          onChange={() => handleCheckboxChange("communication")}
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
                  <div className="px-4 py-3  text-right sm:px-6 flex justify-end">
                    <button
                      onClick={handleGoBack}
                      className="mr-4 inline-flex justify-center p-2 w-24 border border-transparent shadow-sm text-sm font-medium rounded-md   text-white bg-gray-600 hover:bg-gray-900 focus:outline-none   focus:ring-indigo-500"
                    >
                      Cancel
                    </button>

                    <button className="inline-flex justify-center w-24 h-10 p-2 border text-white border-transparent shadow-sm text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-400 text-whitefocus:outline-none   focus:ring-indigo-500">
                      {loading ? (
                        <SmallSpinner className={"mt-[-4px]"} />
                      ) : formId ? (
                        "Saved Edit"
                      ) : (
                        "Saved"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class=""></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecruitmentForm;

import React, { useEffect, useState } from "react";
import { ModalTerms } from "../shared/ModalTerms";
import AppLayout from "../Layout/AppLayout";
import { useParams, useNavigate } from "react-router-dom";
import { db, auth, storage } from "../../firebase";
import {
  setDoc,
  getDocs,
  doc,
  collection,
  serverTimestamp,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import SmallSpinner from "../shared/SmallSpinner";
import { useSelector } from "react-redux";

const VolunteerForm = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const user = auth.currentUser;
  const currentUser = useSelector((state) => state.user);

  //check whether user has submmitt form
  const [isDisable, setIsDisable] = useState(false);
  const [inputData, setInputData] = useState({
    fullname: user.displayName ?? "",
    gender: "",
    dob: "",
    phone: user?.phoneNumber ?? "",
    address: "",
    email: "",
    position: "",
    expectation: "",
  });

  const handleBack = () => {
    navigate(-1);
  };

  const [cvFile, setCvFile] = useState(null);
  const [isReadTerms, setIsReadTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  //check user and formId and sync formId
  if (formId) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (currentUser && currentUser.user?.phoneNumber) {
            setInputData({
              ...inputData,
              phone: user?.phoneNumber,
            });
          }

          // query user with formId
          const usersSubmitQuery = query(
            collection(db, "user-submit-form"),
            where("userId", "==", user.uid),
            where("formId", "==", formId)
          );

          const querySnapshot = await getDocs(usersSubmitQuery);

          // Check if any documents exist
          if (querySnapshot.size > 0) {
            setIsDisable(true);
          } else {
            setIsDisable(false);
          }
        } catch (error) {
          toast.error(error);
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  }

  const handleCheckboxChange = (event) => {
    setIsReadTerms(event.target.checked);
  };

  const onChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // handle Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formId) {
      try {
        setLoading(true);

        // Check if cvFile is present
        if (cvFile) {
          const fileRef = ref(storage, `cv/${user.uid}+${formId}`);
          await uploadBytes(fileRef, cvFile);
          const cvFileUrl = await getDownloadURL(fileRef);
          console.log(inputData.phone);

          const formData = {
            ...inputData,
            applyer: user.uid,
            formId: formId,
            cvUrl: cvFileUrl,
            fileType: cvFile.type,
            fileName: cvFile.name,
            isReadTerms: isReadTerms,
            timestamp: serverTimestamp(),
            updatedTimeStamp: serverTimestamp(),
          };
          console.log(formData.phone);

          // store data in firestore
          const applyVolunteersRef = collection(db, "apply-volunteers");
          const newDocRef = await addDoc(applyVolunteersRef, formData);

          // update user-submit-form document
          const userSubmitRef = doc(db, "user-submit-form", newDocRef.id);
          await setDoc(userSubmitRef, {
            userId: user.uid,
            formId: formId,
            submittedAt: serverTimestamp(),
          });

          toast.success("Apply success!", {
            position: toast.POSITION.TOP_CENTER,
          });

          setIsReadTerms(false);
          setLoading(false);
          navigate("/recruitment", { replace: true });
        } else {
          setLoading(false);
          toast.error("No CV file submitted.");
          console.log("no cv file submit");
        }
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
        console.error("Error adding data:", error);
      }
    } else {
      toast.error("Can't submit without a form ID");
      console.log("no form id");
    }
  };

  return (
    <AppLayout>
      {/* go back button */}
      <button
        type="button"
        onClick={handleBack}
        className="w-36 h-10 flex items-center justify-center pr-2 m-2 sm:m-8 sm:mt-4 sm:mb-1 py-2 text-sm text-black transition-colors duration-200 bg-gray-200 border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            el
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </button>
      <div>
        <h2 className=" text-center text-3xl font-bold pt-5">
          Apply to become a potential volunteer!
        </h2>
        <div className="flex justify-center items-center">
          <img src="/src/assets/image/haha.gif" alt="gif" width={300} />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="px-20 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={inputData.fullname}
              onChange={onChange}
              className="bg-gray-50 p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
              placeholder="Your full name"
              disabled={isDisable}
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Gender
            </label>
            <select
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
              value={inputData.gender}
              onChange={onChange}
              placeholder="Female, Male"
              name="gender"
              disabled={isDisable}
              required
            >
              <option value="">Choose a gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="date_of_birth"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Date of Birth
            </label>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="DD/MM/YYYY"
              name="dob"
              onChange={onChange}
              value={inputData.dob}
              disabled={isDisable}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              onChange={onChange}
              value={inputData.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              placeholder="012-345-678"
              disabled={isDisable}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Current Address
          </label>
          <input
            type="text"
            name="address"
            value={inputData.address}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            placeholder="Village a, pp commune, Khan sen sok, Phnom Penh"
            disabled={isDisable}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            placeholder="Example@gmail.com"
            disabled={isDisable}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="question"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            What position are you applying for?
          </label>
          <input
            type="text"
            name="position"
            value={inputData.position}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            placeholder="Logistics member"
            disabled={isDisable}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tell me your expectation
          </label>
          <input
            type="text"
            name="expectation"
            value={inputData.expectation}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            placeholder="tell me what you expected from this work"
            disabled={isDisable}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="file_input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Upload Your Resume
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
            aria-describedby="file_input_help"
            onChange={(event) => {
              setCvFile(event.target.files[0]);
            }}
            accept=".pdf, .docx, .doc"
            type="file"
            required
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>

        {isDisable ? (
          <button
            disabled={true}
            className={`text-white bg-blue-300 ${
              isReadTerms ? "hover:bg-blue-400" : ""
            } focus:outline-none font-medium rounded-lg max-h-10 text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >
            Already Submitted
          </button>
        ) : (
          <>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={isReadTerms}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                I agree with the &nbsp;
              </label>
              <p
                className="text-sm"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
              >
                <ModalTerms />
              </p>
            </div>
            <button
              disabled={!isReadTerms}
              className={`text-white bg-blue-600 ${
                isReadTerms ? "hover:bg-blue-400" : ""
              } focus:outline-none font-medium rounded-lg max-h-10 text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
            >
              {loading ? <SmallSpinner className={"mt-[-4px]"} /> : "Apply Now"}
            </button>
          </>
        )}
      </form>
    </AppLayout>
  );
};

export default VolunteerForm;

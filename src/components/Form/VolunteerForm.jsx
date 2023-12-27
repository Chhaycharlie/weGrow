import React, { useState } from "react";
import { ModalTerms } from "../shared/ModalTerms";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { db, auth, storage } from "../../firebase";
import { setDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loading from "../../pages/loading";
import { toast } from "react-toastify";

const VolunteerForm = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    fullname: "",
    gender: "",
    dob: "",
    phone: "",
    address: "",
    email: "",
    position: "",
    expectation: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [isReadTerms, setIsReadTerms] = useState(false);
  const [loading, setLoading] = useState(false);

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
    try {
      const user = auth.currentUser;
      setLoading(true);
      // add logic to submit cv here
      let cvFileUrl = "";

      //add image to storage
      if (cvFile) {
        const fileRef = ref(storage, `cv/${user.uid}+${formId}`);
        await uploadBytes(fileRef, cvFile);
        cvFileUrl = await getDownloadURL(fileRef);

        const formData = {
          ...inputData,
          applyer: user.uid,
          formId: formId,
          cvUrl: cvFileUrl,
          isReadTerms: isReadTerms,
          timestamp: serverTimestamp(),
        };

        // store data in firestore
        const applyRef = doc(collection(db, "apply-volunteers"));
        await setDoc(applyRef, formData);

        toast.success("Thanks for Apply !", {
          position: toast.POSITION.TOP_CENTER,
        });
        setLoading(false);
        navigate("/recruitment", { replace: true });
      } else {
        setLoading(false);
        console.log("no cv file submit");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error adding data to Firestore:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div>
        <h2 className=" text-center text-3xl font-bold pt-5">
          Apply to become a potential volunteer!
        </h2>
        <div className="flex justify-center items-center">
          <img src="/src/assets/image/haha.gif" alt="gif" width={300} />
        </div>
      </div>
      <form className="px-20 pb-10">
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
              defaultValue={"Male"}
              required
            >
              <option>Choose a gender</option>
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
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>
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
            for="remember"
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
          onClick={handleSubmit}
          disabled={!isReadTerms}
          className={`text-white bg-blue-600 ${
            isReadTerms ? "hover:bg-blue-400" : ""
          } focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
        >
          Apply Now
        </button>
      </form>
      <Footer />
    </>
  );
};

export default VolunteerForm;

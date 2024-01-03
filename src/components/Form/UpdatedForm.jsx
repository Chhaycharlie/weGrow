import { useEffect, useState } from "react";
import { ModalTerms } from "../shared/ModalTerms";
import AppLayout from "../Layout/AppLayout";
import { useParams, useNavigate } from "react-router-dom";
import { db, auth, storage } from "../../firebase";
import { deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import SmallSpinner from "../shared/SmallSpinner";
import { useSelector } from "react-redux";
import { getApplyForm } from "../../api/post.api";
import Doc from "../shared/SVG/Doc";
import Pdf from "../shared/SVG/Pdf";
import File from "../shared/SVG/File";
import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import Loading from "../../pages/Loading";

const VolunteerForm = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const user = auth.currentUser;
  const currentUser = useSelector((state) => state.user);
  const [cvFile, setCvFile] = useState(null);
  const [isReadTerms, setIsReadTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [form, setForm] = useState(null);
  const [file, setFile] = useState({
    url: "",
    name: "",
    type: "",
  });

  const type_of_file = {
    "image/svg+xml": <Doc />,
    "application/pdf": <Pdf />,
    "application/msword": <Doc />,
    file: <File />,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  //check whether user has submmitt form
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingPost(true);
        const data = await getApplyForm(formId, user.uid);
        setForm(data);
        setLoadingPost(false);
      } catch (error) {
        setLoadingPost(false);
        console.log(error);
      }
    };

    if (formId) {
      fetchData();
    }
  }, [formId]);

  useEffect(() => {
    setInputData({
      fullname: form?.fullname ?? "",
      gender: form?.gender ?? "",
      dob: form?.dob ?? "",
      phone: form?.phone ?? "",
      address: form?.address ?? "",
      email: form?.email ?? "",
      position: form?.position ?? "",
      expectation: form?.expectation ?? "",
    });
    setIsReadTerms(form?.isReadTerms ?? false);
    setFile({
      name: form?.fileName ?? "",
      type: form?.fileType ?? "",
      url: form?.cvUrl ?? "",
    });
  }, [form]);

  const handleBack = () => {
    navigate(-1);
  };

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

    //if file updated
    if (formId && cvFile) {
      try {
        setLoading(true);
        // add logic to submit cv here
        let cvFileUrl = "";
        const fileRef = ref(storage, `cv/${user.uid}+${formId}`);
        await uploadBytes(fileRef, cvFile);
        cvFileUrl = await getDownloadURL(fileRef);

        const formData = {
          ...inputData,
          applyer: user.uid,
          formId: formId,
          cvUrl: cvFileUrl,
          fileType: cvFile.type,
          fileName: cvFile.name,
          updatedTimeStamp: serverTimestamp(),
        };

        // store data in firestore
        const applyRef = doc(db, "apply-volunteers", form.id);
        await updateDoc(applyRef, {
          ...formData,
        });

        toast.success("Edited Success !", {
          position: toast.POSITION.TOP_CENTER,
        });
        setLoading(false);
        navigate("/recruitment", { replace: true });
      } catch (error) {
        setLoading(false);
        console.error("Error adding data:", error);
      }
    }
    // no file updated
    else if (formId) {
      try {
        setLoading(true);

        const formData = {
          ...inputData,
          applyer: user.uid,
          formId: formId,
          updatedTimeStamp: serverTimestamp(),
        };

        // store data in firestore
        const applyRef = doc(db, "apply-volunteers", form.id);
        await updateDoc(applyRef, formData);

        toast.success("Edited Success !", {
          position: toast.POSITION.TOP_CENTER,
        });
        setLoading(false);
        navigate("/recruitment", { replace: true });
      } catch (error) {
        setLoading(false);
        console.error("Error adding data:", error);
      }
    } else {
      toast.error("can't not submitted");
      console.log("no form id");
    }
  };

  //handle delete post
  const handleDelete = async (e, postId) => {
    e.preventDefault();
    console.log(postId);
    // Add your delete logic here
    setDeleteLoading(true);

    const applyRef = doc(db, "apply-volunteers", postId);
    const userSubmitRef = doc(db, "user-submit-form", postId);

    deleteDoc(applyRef).then(() => {
      deleteDoc(userSubmitRef)
        .then(() => {
          setDeleteLoading(false);
          toast.success("Form deleted!", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/recruitment", { replace: true });
        })
        .catch((error) => {
          setDeleteLoading(false);
          toast.error(error);
        });
    });
  };

  return (
    <AppLayout>
      {loadingPost ? (
        <div className="h-[80vh] flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
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

          {/* header  */}
          <div>
            <h2 className=" text-center text-3xl font-bold pt-5">
              Apply to become a potential volunteer!
            </h2>
            <div className="flex justify-center items-center">
              <img src="/src/assets/image/haha.gif" alt="gif" width={300} />
            </div>
          </div>
          <form className="px-20">
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
                Upload Your New Resume Here, If you want to Change file
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

            <div className="mb-6 h-16 w-full overflow-hidden">
              <div className="w-full h-full flex justify-start items-center bg-gray-100 rounded-sm">
                <div className=" whitespace-nowrap flex-1">
                  <div className="mt-3 sm:pl-10">
                    <span className="flex justify-start gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                      {/* svg here */}
                      <p className="text-sm pr-5">File Submitted:</p>
                      {type_of_file[file.type]}
                      <a
                        className="hover:underline"
                        href={file.url}
                        target="blank"
                      >
                        {file.name}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
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
          </form>

          {/* button  */}
          <div className="mb-16 mt-10 ml-20 min-h-20 sm:flex items-center">
            <button
              disabled={!isReadTerms}
              onClick={handleSubmit}
              className={`text-white  ${
                isReadTerms ? "hover:bg-blue-400 bg-blue-600 " : "bg-blue-400"
              } focus:outline-none font-medium rounded-lg max-h-10 text-sm  sm:w-auto px-5 py-2.5 text-center`}
            >
              {loading ? <SmallSpinner className={"mt-[-4px]"} /> : "Save Edit"}
            </button>
            {/* toggle modal button */}
            <button
              className="bg-red-600 px-3 hover:bg-red-500 ml-2 rounded-lg text-white sm:w-32 h-10"
              onClick={handleOpen}
            >
              Delete Form
            </button>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Confirmation Alert</DialogHeader>
              <DialogBody className="mt-[-15px]">
                Are you sure , you want to delete?
              </DialogBody>
              {/* </DialogBody> */}
              <DialogFooter className="space-x-2">
                <Button variant="text" color="blue-gray" onClick={handleOpen}>
                  Back
                </Button>
                <Button
                  variant="text"
                  color="white"
                  onClick={(e) => handleDelete(e, form.id)}
                  className="bg-blue-600 hover:bg-blue-400 max-h-10"
                >
                  {deleteLoading ? (
                    <SmallSpinner className={"mt-[-5px]"} />
                  ) : (
                    "Confirm"
                  )}
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </>
      )}
    </AppLayout>
  );
};

export default VolunteerForm;

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { auth, storage, db } from "../../firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { setDoc, doc, serverTimestamp, collection } from "firebase/firestore";
import SmallSpinner from "../shared/SmallSpinner";
import { toast } from "react-toastify";

export function ModalPost() {
  const [open, setOpen] = React.useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const defaultPhotoURL =
    "https://www.shutterstock.com/image-vector/drag-drop-icon-linear-design-600nw-1386472832.jpg";

  const handleOpen = () => {
    setIsFileSelected(false);
    setOpen(!open);
  };
  const fileInputRef = useRef(null);

  const [inputData, setInputData] = useState({
    title: "",
    description: "",
  });
  // preview image
  const loadFile = (event) => {
    const input = fileInputRef.current;
    const file = input.files[0];

    const output = document.getElementById("preview_img");

    output.src = URL.createObjectURL(event.target.files[0]);
    setIsFileSelected(true);
    output.onload = () => {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  const onChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      const postPic = fileInputRef.current.files[0];
      setLoading(true);

      //post inspiration to storage
      let inspirationUrl = "";
      const fileRef = ref(storage, `inspirations/${user.uid}+${date}`);
      await uploadBytes(fileRef, postPic);
      inspirationUrl = await getDownloadURL(fileRef);

      //create object for firestore
      const formData = {
        ...inputData,
        publisher: user.uid,
        inspirationUrl: inspirationUrl,
        timestamp: serverTimestamp(),
      };

      // store data in firestore
      const postRef = doc(collection(db, "inspirations"));
      await setDoc(postRef, formData);

      setInputData({
        title: "",
        description: "",
      });
      handleOpen();
      setLoading(false);
      toast.success("Posting Successfully !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>New +</Button>
      <Dialog open={open} size="sm" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Create Post
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5 cursor-pointer"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="sm:mb-10 -mt-7" color="blue" variant="lead">
            What's on your mind?
          </Typography>
          <div className="grid gap-6">
            <Typography className="-mb-1 sm:-mt-7" color="black" variant="h6">
              You can post your Inspiration here by add photos, title and
              description of post
            </Typography>

            <div className="h-[200px] mb-6">
              <input
                type="file"
                accept="image/*"
                onChange={loadFile}
                ref={fileInputRef}
                name="file"
                id="file"
                className="sr-only"
                required
              />
              <label
                htmlFor="file"
                className="flex mb-6 sm:mb-20 h-full cursor-pointer flex-wrap items-center justify-center rounded-md border border-dashed border-[#e0e0e0] px-12 text-center"
              >
                <div className="h-full">
                  <img
                    className="h-full"
                    id="preview_img"
                    src={defaultPhotoURL}
                    alt="Current profile photo"
                  />
                </div>
              </label>
            </div>
            <Input
              label="Title"
              name="title"
              value={inputData.title}
              onChange={onChange}
            />
            <Textarea
              label="Write your description..."
              name="description"
              value={inputData.description}
              onChange={onChange}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue" onClick={handleOpen}>
            cancel
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={handleSubmit}
            disabled={!isFileSelected}
            className="h-10 w-30 "
          >
            {loading ? <SmallSpinner className={"mt-[-5px]"} /> : "Post Now"}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default ModalPost;

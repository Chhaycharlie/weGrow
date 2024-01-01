import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { useRef, useState } from "react";
import { auth, db, storage } from "../../firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { useEffect } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalProfile({ toggle }) {
  const [open, setOpen] = React.useState(toggle);
  const currentUser = auth.currentUser;
  const handleOpen = () => setOpen(true);
  const [name, setName] = useState(currentUser.displayName ?? "");
  const handleClose = () => {
    setOpen(false);
    setIsSelectedFile(null);
  };
  const fileInputRef = useRef(null);
  const [isSelectedFile, setIsSelectedFile] = useState(null);
  const user = auth.currentUser;
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setPhoto(user.photoURL);
  }, [user.photoURL]);

  const defaultPhotoURL =
    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";

  const handleSubmit = async () => {
    const selectedFile = fileInputRef.current.files[0];
    if (selectedFile) {
      // Check if the selected file is an image
      // Handle the selected image file
      let userImg = "";
      try {
        //add image to storage
        const imageRef = ref(
          storage,
          `users-image/${user.uid}+${serverTimestamp()}`
        );
        await uploadBytes(imageRef, selectedFile);
        userImg = await getDownloadURL(imageRef);

        //   update profile pic
        updateProfile(user, {
          photoURL: userImg,
        });

        // update on firestore too
        //query user id and then update data
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          photoUrl: userImg,
          updatedTimeStamp: serverTimestamp(),
        });

        //created img history
        const profileImgHistoryRef = collection(db, "profileImageHistory");
        await addDoc(profileImgHistoryRef, {
          createdAt: serverTimestamp(),
          photoUrlHistory: userImg,
          userId: user.uid,
        });

        //is success save
        // window.location.reload();
      } catch (error) {
        console.log(error);
      }
      handleClose();
      // do sth here
    } else {
      console.log("no file select");
    }
  };

  // preview image
  const loadFile = (event) => {
    const input = fileInputRef.current;
    const file = input.files[0];

    const output = document.getElementById("preview_img");

    output.src = URL.createObjectURL(event.target.files[0]);
    setIsSelectedFile(file);
    output.onload = () => {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Avatar
          sx={{ width: 60, height: 60 }}
          src={photo}
          className="cursor-pointer hover:shadow-none"
        >
          {name[0]}
        </Avatar>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="lg:w-[600px] h-[400px] w-[400px]">
          {/* title */}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-center lg:text-left"
          >
            Edit Profile Image
          </Typography>

          {/* add profile image */}
          <form className="lg:m-20 m-10">
            <div className="flex lg:items-center flex-wrap justify-center space-x-6">
              <div className="shrink-0">
                <img
                  id="preview_img"
                  className="h-20 w-20 object-cover rounded-full"
                  src={user.photoURL || defaultPhotoURL}
                  alt="Current profile photo"
                />
              </div>
              <label className="block mt-10 lg:mt-0">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={loadFile}
                  ref={fileInputRef}
                  required
                  className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100"
                />
              </label>
            </div>
          </form>
          {/* save button  */}
          <button
            className="mt-6 w-32 h-12 font-lg text-black 
                rounded-full hover:cursor-pointer hover:border-2
                bg-white duration-200 absolute bottom-8 right-44 border 
                "
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className={`mt-6 w-32 h-12 font-lg text-white 
                rounded-full ${isSelectedFile ? "hover:bg-blue-400" : ""} 
                bg-[#007EEA] duration-200 absolute bottom-8 right-8 `}
            onClick={handleSubmit}
            disabled={!isSelectedFile}
          >
            Save
          </button>
        </Box>
      </Modal>
    </div>
  );
}

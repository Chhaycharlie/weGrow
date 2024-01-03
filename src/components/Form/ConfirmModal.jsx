import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";
import SmallSpinner from "../shared/SmallSpinner";

export function ConfirmModal({ onDelete, loading }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  //handle delete
  const handleDelete = () => {
    onDelete();
    if (!loading) {
      handleOpen();
    }
  };

  return (
    <>
      <button onClick={handleOpen}>
        <svg
          fill="#000000"
          width="17px"
          height="17px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>{" "}
          </g>
        </svg>
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
            onClick={handleDelete}
            className="bg-blue-600 hover:bg-blue-400 max-h-10"
          >
            {loading ? <SmallSpinner className={"mt-[-5px]"} /> : "Confirm"}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

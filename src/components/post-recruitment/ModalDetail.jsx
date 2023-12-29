import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import React from "react";

export function ModalDetail({ post }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-gray-500 bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-4 py-2 hover:text-gray-900 focus:z-10 "
      >
        {" "}
        View Detail
      </button>
      <Dialog open={open} handler={handleOpen}>
        <div className="p-10"></div>
        {/* </DialogBody> */}
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Back
          </Button>
          {/* <Button variant="gradient" color="green" onClick={handleOpen}>
              confirm
            </Button> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}

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
import React, { useRef } from "react";

export function ModalPost() {
  const [open, setOpen] = React.useState(false);
  const defaultPhotoURL =
    "https://www.shutterstock.com/image-vector/drag-drop-icon-linear-design-600nw-1386472832.jpg";

  const handleOpen = () => setOpen(!open);
  const fileInputRef = useRef(null);

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
    <>
      <Button onClick={handleOpen} className="my-10">
        New +
      </Button>
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
            className="mr-3 h-5 w-5"
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

            <div className="h-[200px] mb-6 ">
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
                className="flex mb-6 sm:mb-20 h-full flex-wrap items-center justify-center rounded-md border border-dashed border-[#e0e0e0] px-12 text-center"
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
            <Input label="Title" />
            <Textarea label="Write your description..." />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            Post Now
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default ModalPost;

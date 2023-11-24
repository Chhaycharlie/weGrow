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
import React from "react";
 
export function Modal_Post() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen}>New +</Button>
    <Dialog open={open} size="xs" handler={handleOpen}>
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
          <Typography className="mb-10 -mt-7 " color="blue" variant="lead">
            What's on your mind?
          </Typography>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="black" variant="h6">
              You can post your Inspiration here by add photos, title and description of post
            </Typography>
            <div class="mb-8">
          <input type="file" name="file" id="file" class="sr-only"/>
          <label
            for="file"
            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] px-12 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-gray-900">
                Upload Photo here
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                class="inline-flex rounded border border-[#e0e0e0] px-7 text-base font-medium text-gray-900"
              >
                Browse
              </span>
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
export default Modal_Post
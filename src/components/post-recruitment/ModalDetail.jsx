import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

export function ModalDetail({ post }) {
  const [open, setOpen] = useState(false);
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
        <DialogHeader>{post.title}</DialogHeader>
        <DialogBody className="h-[36rem] overflow-scroll mt-[-15px]">
          <DialogBody className="text-justify text-black">
            <span className="pl-8" />
            {post.description}
          </DialogBody>
          <div className="space-y-3 pl-16 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">Qualification</p>
                <p className="text-sm text-gray-700">{post.academic}</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">Age</p>
                <p className="text-sm text-gray-700">{post.age}</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">City</p>
                <p className="text-sm text-gray-700">{post.country}</p>
              </div>

              <div className="space-y-1">
                <p className="font-medium text-lg text-black">Department</p>
                <p className="text-sm text-gray-700">{post.department}</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">Experience</p>
                <p className="text-sm text-gray-700">{post.experience}</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">Gender Recruit</p>
                <p className="text-sm text-gray-700">{post.gender}</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">Recruit People</p>
                <p className="text-sm text-gray-700">{post.people}</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">Position</p>
                <p className="text-sm text-gray-700">{post.position}</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">
                  Start Accept Application
                </p>
                <p className="text-sm text-gray-700">{post.startDate}</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-lg text-black">
                  Result Anouncement
                </p>
                <p className="text-sm text-gray-700">{post.result}</p>
              </div>

              <div className="space-y-1">
                <p className="font-medium text-lg text-black">
                  Deadline Application
                </p>
                <p className="text-sm text-gray-700">{post.deadline}</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-lg text-black">Skills Required</p>
              <div className="flex flex-col text-sm">
                {post.skill.map((skill) => (
                  <li className="text-sm text-gray-700" key={skill}>
                    {skill}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </DialogBody>
        {/* </DialogBody> */}
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Back
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

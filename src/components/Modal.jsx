import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  Typography
} from "@material-tailwind/react";
import React from "react";

export function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <a
        onClick={handleOpen}
        className="text-blue-900 hover:cursor-pointer hover:underline"
      >
        terms & conditions
      </a>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Terms and Conditions</DialogHeader>
        {/* <DialogBody className="h-[42rem] overflow-scroll"> */}
          <Typography className="font-normal p-5">
          These Terms and Conditions shall be governed by and construed in accordance with the laws of the Kingdom of Cambodia. 
          Any dispute arising out of or in connection with these Terms and Conditions shall be resolved exclusively by the courts of the Kingdom of Cambodia. These Terms and Conditions constitute the entire agreement between you and weGrow with respect to the subject matter hereof and supersede all prior or contemporaneous communications, representations, or agreements, whether oral or written. If any provision of these Terms and Conditions is held to be invalid or unenforceable, such provision shall be struck from these Terms and Conditions and the remaining provisions shall remain in full force and effect. No waiver of any provision of these Terms and Conditions shall be effective unless in writing and signed by both parties.
            
          </Typography>
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

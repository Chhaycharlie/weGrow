import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import React from "react";

export function Pagination() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "blue",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-24 py-10 ">
      <Button
        variant="text"
        className="md:flex items-center gap-2 hidden"
        color="blue"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-6 w-6 rounded-full" />{" "}
        Previous
      </Button>
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        {[1, 2, 3, 4, 5].map((index) => (
          <IconButton key={index} size="lg" {...getItemProps(index)}>
            {index}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="md:flex items-center gap-2 hidden"
        color="blue"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-6 w-6" />
      </Button>
    </div>
  );
}

export default Pagination;

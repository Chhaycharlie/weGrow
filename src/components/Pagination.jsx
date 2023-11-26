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
    <div className="flex justify-center items-center gap-4 px-24 md:py-10">
      <Button
        variant="text"
        className="flex items-center gap-2"
        color="blue"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-6 w-6 rounded-full" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton size="lg" {...getItemProps(1)}>
          1
        </IconButton>
        <IconButton size="lg" {...getItemProps(2)}>
          2
        </IconButton>
        <IconButton size="lg" {...getItemProps(3)}>
          3
        </IconButton>
        <IconButton size="lg" {...getItemProps(4)}>
          4
        </IconButton>
        <IconButton size="lg" {...getItemProps(5)}>
          5
        </IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
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

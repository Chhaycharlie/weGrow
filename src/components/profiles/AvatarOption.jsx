import React, { useState } from "react";
import ModalProfile from "./modalProfile";

const AvatarOption = ({ title, name, quote }) => {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(true);
  };

  return (
    <div className="w-[40%] h-auto flex flex-wrap mt-10 text-center mx-auto lg:mx-7 lg:text-left lg:justify-normal justify-center lg:space-x-10 lg:items-center lg:m-10">
      <ModalProfile toggle={toggle} name={name} />
      <div>
        <h1 className="font-thin text-3xl">
          {name} {title}
        </h1>
        <p className="pt-2 text-base opacity-30 tracking-[.10em]">{quote}</p>
      </div>
    </div>
  );
};

export default AvatarOption;

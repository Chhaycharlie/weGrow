import React, { useState } from "react";
import { auth } from "../../firebase";
import ModalProfile from "./modalProfile";

const AvatarOption = ({ title, quote }) => {
  const [toggle, setToggle] = useState(false);
  const currentUser = auth.currentUser;
  const [name, setName] = useState(currentUser.displayName ?? "");

  const onClick = () => {
    setToggle(true);
  };

  return (
    <div className="w-[40%] h-auto flex flex-wrap mt-10 text-center mx-auto lg:mx-7 lg:text-left lg:justify-normal justify-center lg:space-x-10 lg:items-center lg:m-10">
      <ModalProfile toggle={toggle} />
      <div>
        <h1 className="font-thin text-3xl">
          {name} / {title}
        </h1>
        <p className="pt-2 text-base opacity-30 tracking-[.10em]">{quote}</p>
      </div>
    </div>
  );
};

export default AvatarOption;

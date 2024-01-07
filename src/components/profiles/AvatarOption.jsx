import React, { useEffect, useState } from "react";
import ModalProfile from "./ModalProfile";
import { useSelector } from "react-redux";

const AvatarOption = ({ title, quote }) => {
  const [toggle, setToggle] = useState(false);
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");

  useEffect(() => {
    if (user?.user) {
      setName(user.user.displayName ?? "");
    }
  }, [user?.user]);

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

import React from "react";

import AvatarIcon from "../../assets/profiles/avatar_icon.svg";

const AvatarOption = ({ title, name, quote }) => {
  return (
    <div className="w-[40%] h-auto flex flex-wrap mt-10 text-center lg:text-left lg:justify-normal justify-center lg:space-x-10 lg:items-center lg:m-10">
      <img
        src={AvatarIcon}
        width={70}
        alt="profile avatar"
        className="cursor-pointer"
      />
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

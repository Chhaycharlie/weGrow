import React from "react";

const SaveButton = ({ name }) => {
  return (
    <button
      className="mt-6 w-32 h-12 font-lg text-white 
                rounded-full hover:bg-blue-400 
                bg-[#007EEA] duration-200"
    >
      {name}
    </button>
  );
};

export default SaveButton;

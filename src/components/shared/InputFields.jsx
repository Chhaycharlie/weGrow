import React from "react";

const InputFields = ({
  placeholder,
  label,
  value,
  className,
  onChange,
  disable,
  required
}) => {
  return (
    <>
      <h1 className={`-mb-1 ${className} text-2xl`}>{label}</h1>
      <input
        placeholder={placeholder}
        className="focus:border-gray-800 mr-10 lg:w-auto w-[250px] focus:border-2 outline-none pl-5 h-16 text-xl border border-gray-300 rounded-xl"
        value={value}
        onChange={onChange}
        disabled={disable}
        required={required}
      />
    </>
  );
};

export default InputFields;

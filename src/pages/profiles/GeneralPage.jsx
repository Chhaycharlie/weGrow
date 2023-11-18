import React from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";
import Profile from "../../components/profiles/profile";

const GeneralPage = () => {
  return (
    <Profile
      title={"/ General"}
      name={"Son Chhay"}
      quote={"Set up your weGrow present and hiring needs"}
    >
      <form className="mb-2 w-80 sm:w-full">
        <div className="mb-1 flex flex-col gap-6">
          <InputFields placeholder={"Username"} label={"Username"} />
          <h1 className="text-xl text-gray-500 ml-4 ">
            Your weGrow URL: https://weGrow.com/username
          </h1>
          <InputFields placeholder={"Email Address"} label={"Email"} />
        </div>
        <div className="w-full flex justify-end mt-10">
          <SaveButton name={"Save Profile"} />
        </div>
      </form>
    </Profile>
  );
};

export default GeneralPage;

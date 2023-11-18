import React from "react";
import Profile from "../../components/profiles/profile";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";

const PasswordPage = () => {
  return (
    <Profile
      title={"Password"}
      name={"Son chhay"}
      quote={"Set up your weGrow present and hiring needs"}
    >
      <form className="mb-2 w-80 sm:w-full">
        <div className="mb-1 flex flex-col gap-6">
          <InputFields
            placeholder={"Enter Old Password"}
            label={"Old Password"}
          />
          <InputFields
            placeholder={"Enter at least 8 characters"}
            label={"New Password"}
            className={"mt-10"}
          />
        </div>
        <div className="w-full flex justify-end mt-10">
          <SaveButton name={"Save Profile"} />
        </div>
      </form>
    </Profile>
  );
};

export default PasswordPage;

import React from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";

const PasswordPage = () => {
  return (
    <form className="mb-2 w-80 sm:w-full">
      <div className="mb-1 flex flex-col gap-6">
        <InputFields placeholder={"New Password"} label={"New Password"} />
        <InputFields
          placeholder={"Enter at least 8 chars "}
          label={"Confirm New Password"}
          className={"mt-10"}
        />
      </div>
      <div className="w-full flex lg:justify-end mt-10 ml-12 lg:ml-auto">
        <SaveButton name={"Save Profile"} />
      </div>
    </form>
  );
};

export default PasswordPage;

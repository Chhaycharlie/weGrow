import React from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";
import Profile from "../../components/profiles/profile";

import { Textarea } from "@material-tailwind/react";

const AccountPage = () => {
  return (
    <Profile
      title={"Edit Profile"}
      name={"Son Chhay"}
      quote={"Set up your weGrow present and hiring needs"}
    >
      <form className="mb-2 w-80 sm:w-full">
        <div className="mb-1 flex flex-col gap-6">
          <InputFields
            label={"Username"}
            placeholder={"Username"}
            value={"Username"}
          />

          <InputFields
            placeholder={"Link URL"}
            label={"Location"}
            value={"Phnom Penh"}
            className={"mt-2"}
          />

          {/* BiO textfields */}
          <h1 className="-mb-3 mt-2 text-2xl">Bio</h1>
          <Textarea
            className="text-xl"
            label="Brief description for your profile"
            value={"Hello Kon PAPA"}
          />
          {/* Link URL */}
          <InputFields
            placeholder={"Link URL"}
            label={"Personal Website"}
            value={"www.chhay.com.kh"}
          />
        </div>
        <div className="w-full flex justify-end mt-5">
          <SaveButton name={"Save Profile"} />
        </div>
      </form>
    </Profile>
  );
};

export default AccountPage;

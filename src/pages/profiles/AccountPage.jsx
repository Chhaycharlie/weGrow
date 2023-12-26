import React, { useState } from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";
import { auth } from "../../firebase";
import { Textarea } from "@material-tailwind/react";

const AccountPage = () => {
  const currentUser = auth.currentUser;
  const [userState, setUserState] = useState(currentUser.displayName);
  const [location, setLocation] = useState("Phnom Penh");

  const onUsernameChange = (e) => {
    setUserState(e.target.value);
  };

  const onLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form className="mb-2 w-80 sm:w-full">
      <div className="mb-1 flex flex-col gap-6">
        <InputFields
          label={"Username"}
          placeholder={"Username"}
          onChange={onUsernameChange}
          value={userState}
        />

        <InputFields
          placeholder={"Link URL"}
          label={"Location"}
          value={location}
          className={"mt-2"}
          onChange={onLocationChange}
        />
        {/* Link URL */}
        <InputFields
          placeholder={"Link URL"}
          label={"Personal Website"}
          value={"www.chhay.com.kh"}
        />
      </div>
      <div className="w-full flex lg:justify-end mt-10 ml-12 lg:ml-auto">
        <SaveButton name={"Save Profile"} />
      </div>
    </form>
  );
};

export default AccountPage;

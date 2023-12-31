import React, { useEffect, useState } from "react";
import InputFields from "../../components/shared/InputFields";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";

const GeneralPage = () => {
  const currentUser = auth.currentUser;
  const [email, setEmail] = useState(currentUser.email);
  const [username, setUsername] = useState(currentUser.displayName);
  const userInfo = useSelector((state) => state.user);

  return (
    <form className="mb-2 w-80 sm:w-full">
      <div className="mb-1 flex flex-col gap-6">
        <InputFields
          placeholder={"Username"}
          label={"Username"}
          value={username}
          disable={true}
        />
        <InputFields
          placeholder={"Email Address"}
          label={"Email"}
          value={email}
          disable={true}
        />
        <InputFields
          placeholder={"Current Location"}
          label={"Location"}
          value={location}
          disable={true}
        />

        <InputFields
          placeholder={"Organization Name"}
          label={"Organization Name"}
          value={userInfo?.user.organizationName ?? ""}
          disable={true}
        />
        <InputFields
          placeholder={"Oraginzation Website"}
          label={"Organization Website"}
          value={userInfo?.user.organizationEmail ?? ""}
          disable={true}
        />

        <InputFields
          placeholder={"Phone Number"}
          label={"Phone Number"}
          value={userInfo?.user.phoneNumber ?? ""}
          disable={true}
        />
      </div>
    </form>
  );
};

export default GeneralPage;

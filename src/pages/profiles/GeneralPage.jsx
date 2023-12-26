import React, { useState } from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";
import { auth } from "../../firebase";

const GeneralPage = () => {
  const currentUser = auth.currentUser;
  const [email, setEmail] = useState(currentUser.email);
  const [username, setUsername] = useState(currentUser.displayName);
  const [organization, setOrganization] = useState("Care For Cambodia");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  return (
    <form className="mb-2 w-80 sm:w-full">
      <div className="mb-1 flex flex-col gap-6">
        <InputFields
          placeholder={"Username"}
          label={"Username"}
          value={username}
          onChange={onUsernameChange}
          disable={true}
        />
        <InputFields
          placeholder={"Email Address"}
          label={"Email"}
          value={email}
          onChange={onEmailChange}
          disable={true}
        />
        <InputFields
          placeholder={"Organization Name"}
          label={"Organization Name"}
          value={organization}
          onChange={onOrganizationChange}
          disable={true}
        />
      </div>
    </form>
  );
};

export default GeneralPage;

import React, { useState } from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const userInfo = useSelector((state) => state.user);
  const currentUser = auth.currentUser;

  const [username, setUsername] = useState(currentUser.displayName);
  const [email, setEmail] = useState(currentUser.email);
  const [location, setLocation] = useState(userInfo?.user.location);
  const [organizationName, setOrganizationName] = useState(
    userInfo?.user.organizationName
  );
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.user.phoneNumber);
  const [organizationEmail, setOrganizationEmail] = useState(
    userInfo?.user.organizationEmail
  );

  // isEdit profile
  const [isEdit, setIsEdit] = useState(false);
  const handleClick = () => {
    setIsEdit((prev) => !prev);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onOrganizationName = (e) => {
    setOrganizationName(e.target.value);
  };

  const onOrganizationEmail = (e) => {
    setOrganizationEmail(e.target.value);
  };

  const onLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      //handle update logic
      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mb-2 w-80 sm:w-full">
      <div className="h-8 flex justify-end px-10">
        <h1
          className="cursor-pointer text-xl hover:text-red-400"
          onClick={handleClick}
        >
          {isEdit ? "x" : "edit"}
        </h1>
      </div>
      <div className="mb-1 flex flex-col gap-6">
        <InputFields
          placeholder={"Username"}
          label={"Username"}
          value={username}
          onChange={onUsernameChange}
          disable={!isEdit}
        />
        <InputFields
          placeholder={"Email Address"}
          label={"Email"}
          value={email}
          onChange={onEmailChange}
          disable={!isEdit}
        />
        <InputFields
          placeholder={"Organization Name"}
          label={"Organization Name"}
          value={userInfo?.user.organizationName ?? ""}
          onChange={onOrganizationName}
          disable={!isEdit}
        />
        <InputFields
          placeholder={"Oraginzation Website"}
          label={"Organization Website"}
          value={userInfo?.user.organizationEmail ?? ""}
          onChange={onOrganizationEmail}
          disable={!isEdit}
        />

        <InputFields
          placeholder={"Phone Number"}
          label={"Phone Number"}
          value={userInfo?.user.phoneNumber ?? ""}
          onChange={onPhoneNumberChange}
          disable={!isEdit}
        />
      </div>
      <div className="w-full flex lg:justify-end mt-10 ml-12 lg:ml-auto h-10">
        {isEdit && <SaveButton onClick={handleUpdate} name={"Save Profile"} />}
      </div>
    </form>
  );
};

export default AccountPage;

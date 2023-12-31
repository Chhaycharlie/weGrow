import React, { useState } from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

//firebaes
import { auth, db } from "../../firebase";
import { updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const AccountPage = () => {
  const userInfo = useSelector((state) => state.user);
  const currentUser = auth.currentUser;

  const [username, setUsername] = useState(currentUser.displayName ?? "");
  const [email, setEmail] = useState(currentUser.email ?? "");
  const [location, setLocation] = useState(userInfo?.user.location ?? "");
  const [organizationName, setOrganizationName] = useState(
    userInfo?.user.organizationName ?? ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    userInfo?.user.phoneNumber ?? ""
  );
  const [organizationEmail, setOrganizationEmail] = useState(
    userInfo?.user.organizationEmail ?? ""
  );

  // isEdit profile
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setIsEdit((prev) => !prev);
    setUsername(currentUser.displayName ?? "");
    setEmail(currentUser.email ?? "");
    setLocation(userInfo?.user.location ?? "");
    setPhoneNumber(userInfo?.user.phoneNumber ?? "");
    setOrganizationName(userInfo?.user.organizationName ?? "");
    setOrganizationEmail(userInfo?.user.organizationEmail ?? "");
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onLocationChange = (e) => {
    setLocation(e.target.value);
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //handle update logic
      const formData = {
        // username,
        email,
        location,
        organizationEmail,
        organizationName,
        phoneNumber,
      };

      //update firebase data
      const profileRef = doc(db, "users", currentUser.uid);
      updateDoc(profileRef, {
        ...formData,
        displayName: username,
        updatedTimeStamp: serverTimestamp(),
      }).then(
        updateProfile(currentUser, {
          displayName: username,
          email: email,
          phoneNumber: phoneNumber,
        }).then(
          setLoading(false),
          toast.success("Profile Updated !", {
            position: toast.POSITION.TOP_CENTER,
          }),
          setIsEdit(false)
        )
      );
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <form className="mb-2 w-80 sm:w-full" onSubmit={handleUpdate}>
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
          required={true}
        />
        <InputFields
          placeholder={"Email Address"}
          label={"Email"}
          value={email}
          onChange={onEmailChange}
          disable={!isEdit}
          required={true}
        />
        <InputFields
          placeholder={"Current Location"}
          label={"Location"}
          value={location}
          onChange={onLocationChange}
          disable={!isEdit}
          required={true}
        />
        <InputFields
          placeholder={"Organization Name"}
          label={"Organization Name"}
          value={organizationName}
          onChange={onOrganizationName}
          disable={!isEdit}
          required={true}
        />
        <InputFields
          placeholder={"Oraginzation Website"}
          label={"Organization Website"}
          value={organizationEmail}
          onChange={onOrganizationEmail}
          disable={!isEdit}
          required={true}
        />

        <InputFields
          placeholder={"Phone Number"}
          label={"Phone Number"}
          value={phoneNumber}
          onChange={onPhoneNumberChange}
          disable={!isEdit}
          required={false}
        />
      </div>
      <div className="w-full flex lg:justify-end mt-10 ml-12 lg:ml-auto h-10">
        {isEdit && (
          <SaveButton name={loading ? "Please wait" : "Save Profile"} />
        )}
      </div>
    </form>
  );
};

export default AccountPage;

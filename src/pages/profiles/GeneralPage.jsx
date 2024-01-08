import React, { useEffect, useState } from "react";
import InputFields from "../../components/shared/InputFields";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../api/user.api";

const GeneralPage = () => {
  const currentUser = auth.currentUser;
  const [email, setEmail] = useState(currentUser?.email ?? "");
  const [username, setUsername] = useState(currentUser?.displayName ?? "");
  const [role, setRole] = useState("");

  const [organizationName, setOrganizationName] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentUser(currentUser.uid);
        setOrganizationEmail(data?.organizationEmail);
        setOrganizationName(data?.organizationName);
        setPhoneNumber(data?.phoneNumber);
        setLocation(data?.location);
        setRole(userInfo?.user?.role || data?.role);
      } catch (error) {
        console.error("Error fetching recruitment data:", error);
      }
    };
    if (currentUser) {
      fetchData();
    }
  }, []);

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
          label={"Email Address"}
          value={email}
          disable={true}
        />
        <InputFields
          placeholder={"Current Location"}
          label={"Location"}
          value={location}
          disable={true}
        />

        {role !== "user" ? (
          <>
            <InputFields
              placeholder={"Organization Name"}
              label={"Organization Name"}
              value={organizationName}
              disable={true}
            />
            <InputFields
              placeholder={"Oraginzation Website"}
              label={"Organization Website"}
              value={organizationEmail}
              disable={true}
            />
          </>
        ) : (
          ""
        )}

        <InputFields
          placeholder={"Phone Number"}
          label={"Phone Number"}
          value={phoneNumber}
          disable={true}
        />
      </div>
    </form>
  );
};

export default GeneralPage;

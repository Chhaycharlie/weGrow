import React, { useEffect, useState } from "react";
import InputFields from "../../components/shared/InputFields";
import { auth } from "../../firebase";
import { getCurrentUser } from "../../api/user.api";

const GeneralPage = () => {
  const currentUser = auth.currentUser;
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(currentUser.email);
  const [username, setUsername] = useState(currentUser.displayName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentUser(currentUser.uid);
        setUser(data);
      } catch (error) {
        console.error("Error fetching recruitment data:", error);
      }
    };

    // Only fetch data if formId is available
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
          label={"Email"}
          value={email}
          disable={true}
        />
        <InputFields
          placeholder={"Organization Name"}
          label={"Organization Name"}
          value={user?.organizationName ?? ""}
          disable={true}
        />
        <InputFields
          placeholder={"Oraginzation Website"}
          label={"Organization Website"}
          value={user?.organizationEmail ?? ""}
          disable={true}
        />
      </div>
    </form>
  );
};

export default GeneralPage;

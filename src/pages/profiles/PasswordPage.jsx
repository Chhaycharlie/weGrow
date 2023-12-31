import { useState } from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";

const PasswordPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const handleClick = () => {
    setIsEdit((prev) => !prev);
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
          placeholder={"New Password"}
          label={"New Password"}
          disable={!isEdit}
        />
        <InputFields
          placeholder={"Enter at least 8 chars "}
          label={"Confirm New Password"}
          className={"mt-5"}
          disable={!isEdit}
        />
      </div>
      <div className="w-full flex lg:justify-end mt-10 ml-12 lg:ml-auto h-10">
        {isEdit && <SaveButton name={"Save Profile"} />}
      </div>
    </form>
  );
};

export default PasswordPage;

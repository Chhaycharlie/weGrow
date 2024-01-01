import { useState } from "react";
import InputFields from "../../components/shared/InputFields";
import SaveButton from "../../components/shared/SaveButton";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import SmallSpinner from "../../components/shared/SmallSpinner";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

const PasswordPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setIsEdit((prev) => !prev);
    setConfirmPass("");
    setNewPass("");
    setOldPass("");
  };

  const onOldPassChange = (e) => {
    setOldPass(e.target.value);
  };

  const onNewPassChange = (e) => {
    setNewPass(e.target.value);
  };

  const onConfirmPassChange = (e) => {
    setConfirmPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPass !== newPass) {
      toast.error("New Password and Confirm Password Missed Matched !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (confirmPass.length < 8 || newPass.length < 8) {
      toast.error(
        "New Password or Confirm Password must bigger than 8 Characters!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    } else {
      setLoading(true);
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, oldPass);

      reauthenticateWithCredential(user, credential)
        .then(() => {
          // User re-authenticated.
          updatePassword(user, confirmPass).then(() => {
            // Update successful.
            toast.success("Password Updated", {
              position: toast.POSITION.TOP_CENTER,
            });
            setLoading(false);
            handleClick();
          });
        })
        .catch((error) => {
          setLoading(false);
          // toast.error("Incorrect Old Password!!!", {
          //   position: toast.POSITION.TOP_CENTER,
          // });
          handleClick();
          console.log(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 w-80 sm:w-full">
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
          placeholder={"Enter Old Password"}
          label={"Old Password"}
          disable={!isEdit}
          required={true}
          onChange={onOldPassChange}
          value={oldPass}
          type={"password"}
        />

        <InputFields
          placeholder={"Enter New Password"}
          label={"New Password"}
          disable={!isEdit}
          required={true}
          onChange={onNewPassChange}
          value={newPass}
          type={"password"}
        />
        <InputFields
          placeholder={"Enter Confirm New Password "}
          label={"Confirm New Password"}
          className={"mt-5"}
          disable={!isEdit}
          required={true}
          onChange={onConfirmPassChange}
          value={confirmPass}
          type={"password"}
        />
      </div>
      <div className="w-full flex lg:justify-end mt-10 ml-12 lg:ml-auto h-10">
        {isEdit && (
          <SaveButton
            name={
              loading ? <SmallSpinner className={"mt-2"} /> : "Save Profile"
            }
          />
        )}
      </div>
    </form>
  );
};

export default PasswordPage;

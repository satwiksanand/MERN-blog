import { useSelector } from "react-redux";
import { FaEye, FaEyeSlash, FaTrash, FaSignOutAlt } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { useState } from "react";
import { Alert, Button, Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import {
  updateStart,
  updateFailure,
  updateSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "../redux/user/userSlice.js";

function DashProfile() {
  const { user, error } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  //i will implement a different ui for the profile menu.

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  function toggleShow() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(null);
    setSuccess(null);
    if (Object.keys(formData).length === 0) {
      return;
    }
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setErrorMessage(data.message);
      } else {
        dispatch(updateSuccess(data));
        setSuccess("Updates Successfull!");
      }
    } catch {
      console.error("there was an error");
    }
  }

  async function handleDeleteUser(e) {
    e.preventDefault();
    setShowModal(false);
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${user._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserFailure(data.message));
      } else {
        dispatch(deleteUserSuccess(data));
      }
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-4 p-8 m-auto"
    >
      <h1 className="font-bold text-4xl mb-8">Profile</h1>
      <div className="w-32 h-32 self-center">
        <img
          src={user.userPhotoUrl}
          alt="user-photo"
          className="w-full h-full object-cover rounded-full border-8 border-gray-400"
        />
      </div>
      <div className="w-full text-xl font-bold">
        <label htmlFor="name" className="">
          User Name
        </label>
        <input
          type="text"
          disabled
          placeholder={user.userName}
          id="name"
          className="w-full p-1 rounded cursor-not-allowed border-2 "
        />
      </div>
      <div className="w-full text-xl font-bold">
        <label htmlFor="email" className="">
          User Email
        </label>
        <input
          type="text"
          disabled
          placeholder={user.userEmail}
          id="email"
          className="w-full p-1 rounded cursor-not-allowed  border-2"
        />
      </div>
      <div className="w-full text-xl font-bold">
        <label htmlFor="password" className="">
          Update Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="New Password"
          id="password"
          className="w-full p-1 rounded border-2"
          onChange={handleChange}
        />
        {showPassword ? (
          <FaEye
            onClick={toggleShow}
            className="relative left-[95%] bottom-7 cursor-pointer"
          />
        ) : (
          <FaEyeSlash
            onClick={toggleShow}
            className="relative left-[95%] bottom-7 cursor-pointer"
          />
        )}
      </div>
      <Button className="w-full font-semibold text-xl" onClick={handleSubmit}>
        Update Password
      </Button>
      <div className="w-full flex justify-evenly items-center gap-2">
        <Button
          className="flex-1"
          gradientMonochrome={"failure"}
          onClick={() => setShowModal(true)}
        >
          <FaTrash className="mr-2 h-5 w-5" /> Delete Account
        </Button>
        <Button className="flex-1" gradientDuoTone={"greenToBlue"} outline>
          <FaSignOutAlt className="mr-2 h-5 w-5" /> Sign Out
        </Button>
      </div>
      {errorMessage && (
        <Alert color={"failure"} className="mt-5">
          {errorMessage}
        </Alert>
      )}
      {error && (
        <Alert color={"failure"} className="mt-5">
          {error}
        </Alert>
      )}
      {success && (
        <Alert color={"success"} className="mt-5">
          {success}
        </Alert>
      )}
      <Modal
        show={showModal}
        size={"md"}
        popup
        onClose={() => setShowModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <MdInfoOutline className="w-14 h-14 mx-auto mb-4 text-gray-500 dark:text-gray-100" />
            <p className="font-semibold text-gray-700 mb-4">
              Are you sure you want to delete you account!
            </p>
            <div className="flex justify-center items-center gap-2 w-full">
              <Button
                color={"failure"}
                onClick={handleDeleteUser}
                className="flex-1"
              >
                Yes, I&#39;m sure
              </Button>
              <Button onClick={() => setShowModal(false)} className="flex-1">
                No, Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </form>
  );
}

export default DashProfile;

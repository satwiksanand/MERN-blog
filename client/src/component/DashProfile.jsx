import { useSelector } from "react-redux";
import { FaEye, FaEyeSlash, FaTrash, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import { Alert, Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import {
  updateStart,
  updateFailure,
  updateSuccess,
} from "../redux/user/userSlice.js";

function DashProfile() {
  const { user } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
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
    setError(null);
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
        setError(data.message);
      } else {
        dispatch(updateSuccess(data));
        setSuccess("Updates Successfull!");
      }
    } catch {
      console.error("there was an error");
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
        <Button className="flex-1" gradientMonochrome={"failure"}>
          <FaTrash className="mr-2 h-5 w-5" /> Delete Account
        </Button>
        <Button className="flex-1" gradientDuoTone={"greenToBlue"} outline>
          <FaSignOutAlt className="mr-2 h-5 w-5" /> Sign Out
        </Button>
      </div>
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
    </form>
  );
}

export default DashProfile;

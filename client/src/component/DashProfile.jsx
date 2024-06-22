import { useSelector } from "react-redux";
import { FaEye, FaEyeSlash, FaTrash, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import { Button } from "flowbite-react";

function DashProfile() {
  const { user } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  //i will implement a different ui for the profile menu.

  function toggleShow() {
    setShowPassword(!showPassword);
  }

  return (
    <form className="flex flex-col justify-center items-center gap-4 p-8 m-auto">
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
        <Button className="w-full font-semibold text-xl">
          Update Password
        </Button>
      </div>
      <div className="w-full flex justify-evenly items-center gap-2">
        <Button className="flex-1" gradientMonochrome={"failure"}>
          <FaTrash className="mr-2 h-5 w-5" /> Delete Account
        </Button>
        <Button className="flex-1" gradientDuoTone={"greenToBlue"} outline>
          <FaSignOutAlt className="mr-2 h-5 w-5" /> Sign Out
        </Button>
      </div>
    </form>
  );
}

export default DashProfile;

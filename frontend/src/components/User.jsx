import PropTypes from "prop-types";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

User.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
};

function User({ user, index }) {
  const { profilePicture, username, useremail } = user;

  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#262626] p-8 sm:grid-cols-5 sm:p-4">
      <p className="hidden text-lg font-bold sm:block sm:justify-self-start">
        {index}
      </p>
      <img
        src={profilePicture}
        alt="profile"
        className="max-w-8 rounded-full"
      />
      <p className="justify-self-end truncate text-lg font-thin sm:justify-self-auto">
        {username}
      </p>
      <p className="truncate text-lg font-thin">{useremail}</p>
      <div className="flex items-center justify-end gap-4">
        <MdEdit fill="blue" size={24} cursor={"pointer"} />
        <MdDelete fill="red" size={24} cursor={"pointer"} />
      </div>
    </div>
  );
}

export default User;

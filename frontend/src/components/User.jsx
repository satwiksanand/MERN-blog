import PropTypes from "prop-types";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

User.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  handleDelete: PropTypes.func,
};

function User({ user, index, handleDelete }) {
  const { profilePicture, username, useremail, _id, isAdmin } = user;

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
      {isAdmin ? (
        <div className="flex items-center justify-end">
          <p className="rounded-lg bg-[#1a1a1a] px-3 py-1 text-lg font-semibold text-[#a3a3a7]">
            Admin
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-4">
          <Link to={`/users/user/${_id}`}>
            <MdEdit fill="blue" size={24} cursor={"pointer"} />
          </Link>
          <MdDelete
            fill="red"
            size={24}
            cursor={"pointer"}
            onClick={() => {
              handleDelete(_id);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default User;

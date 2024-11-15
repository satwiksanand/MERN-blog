import { Dropdown } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { signOut } from "../slice/userSlice";

User.propTypes = {
  handleSignOut: PropTypes.func,
};

//render the user info dynamically here

function User() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <div className="invisible rounded-lg text-white md:visible">
      <Dropdown
        label={
          user ? (
            <img
              src={user.profilePicture}
              className="max-w-8 rounded-full"
            ></img>
          ) : (
            "You"
          )
        }
        color="#7e7e81"
        arrowIcon={!user}
        className="max-w-72"
      >
        {user && (
          <Dropdown.Header>
            <span className="block text-sm">{user.username}</span>
            <span className="block truncate text-sm font-medium">
              {user.useremail}
            </span>
          </Dropdown.Header>
        )}
        {user?.isAdmin && (
          <Link to={"/users"}>
            <Dropdown.Item icon={FaUsers}>All Users</Dropdown.Item>
          </Link>
        )}
        <Dropdown.Divider className="font-bold text-black" />
        <Link to={user ? "/profile" : "/signin"}>
          <Dropdown.Item icon={FaUser}>
            {user ? "My Profile" : "Sign In"}
          </Dropdown.Item>
        </Link>
        <Dropdown.Divider className="font-bold text-black" />
        {user && (
          <Dropdown.Item icon={FaSignOutAlt} onClick={handleSignOut}>
            Sign Out
          </Dropdown.Item>
        )}
      </Dropdown>
    </div>
  );
}

export default User;

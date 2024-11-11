import { Dropdown } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//render the user info dynamically here

function User() {
  const user = useSelector((state) => state.user.currentUser);

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
        <Dropdown.Item icon={FaUser}>
          {!user ? <Link to={"/signin"}>Sign In</Link> : "My Profile"}
        </Dropdown.Item>
        <Dropdown.Divider className="font-bold text-black" />
        {user && <Dropdown.Item icon={FaSignOutAlt}>Sign Out</Dropdown.Item>}
      </Dropdown>
    </div>
  );
}

export default User;

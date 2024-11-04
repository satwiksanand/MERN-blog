import { Dropdown } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

//render the user info dynamically here

function User() {
  return (
    <Dropdown label={"You"}>
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          bonnie@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item icon={FaUser}>My Profile</Dropdown.Item>
      <Dropdown.Divider className="font-bold text-black" />
      <Dropdown.Item icon={FaSignOutAlt}>Sign Out</Dropdown.Item>
    </Dropdown>
  );
}

export default User;

import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import User from "./User";
import { Dropdown } from "flowbite-react";
import { FaHome } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

function Navbar() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <nav className="hidden md:block">
        <div className="flex justify-around gap-1 bg-[#333333] p-3">
          <Logo />
          <div className="flex items-center justify-center gap-3">
            <NavLinks label="Home" path="/" />
            <NavLinks label="News" path="/news" />
            <NavLinks label="Blogs" path="/blogs" />
            <NavLinks label="Create" path="/create" />
            <NavLinks label="Contact Us" path="/contact" />
          </div>
          <User />
        </div>
      </nav>
      <nav className="block md:hidden">
        <div className="flex items-center justify-end bg-[#333] p-3">
          <Dropdown
            label={<IoMenu color="white" size={32} />}
            color="#333"
            arrowIcon={false}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user ? user.username : ""}</span>
              <span className="block truncate text-sm font-medium">
                {user ? user.useremail : ""}
              </span>
            </Dropdown.Header>
            {user ? (
              <>
                <Dropdown.Item icon={FaHome}>Home</Dropdown.Item>
                <Dropdown.Item icon={FaNewspaper}>News</Dropdown.Item>
                <Dropdown.Item icon={FaBlog}>Blogs</Dropdown.Item>
                <Dropdown.Item icon={IoCreate}>Create</Dropdown.Item>
                <Dropdown.Item icon={MdSupportAgent}>Contact Us</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={FaSignOutAlt}>Sign out</Dropdown.Item>
              </>
            ) : (
              <Dropdown.Item>Sign In</Dropdown.Item>
            )}
          </Dropdown>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

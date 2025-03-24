import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavDrop from "./NavDrop";
import { Dropdown } from "flowbite-react";
import { FaHome } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { signOut } from "../slice/userSlice";

function Navbar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  async function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <div className="sticky top-0 z-10">
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
          <NavDrop />
        </div>
      </nav>
      <nav className="block md:hidden">
        <div className="flex items-center justify-between bg-[#333] p-3">
          <Logo />
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
                <Link to={"/"}>
                  <Dropdown.Item icon={FaHome}>Home</Dropdown.Item>
                </Link>
                <Link to={"/news"}>
                  <Dropdown.Item icon={FaNewspaper}>News</Dropdown.Item>
                </Link>
                <Link to={"/blogs"}>
                  <Dropdown.Item icon={FaBlog}>Blogs</Dropdown.Item>
                </Link>
                <Link to={"/create"}>
                  <Dropdown.Item icon={IoCreate}>Create</Dropdown.Item>
                </Link>
                <Link to={"/contact"}>
                  <Dropdown.Item icon={MdSupportAgent}>
                    Contact Us
                  </Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                {user?.isAdmin && (
                  <>
                    <Link to={"/users"}>
                      <Dropdown.Item icon={FaUsers}>All Users</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                  </>
                )}
                <Link to={"/profile"}>
                  <Dropdown.Item icon={FaUser}>My Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Divider />
                <Dropdown.Item icon={FaSignOutAlt} onClick={handleSignOut}>
                  Sign out
                </Dropdown.Item>
              </>
            ) : (
              <Link to={"/signin"}>
                <Dropdown.Item icon={FaUser}>Sign In</Dropdown.Item>
              </Link>
            )}
          </Dropdown>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

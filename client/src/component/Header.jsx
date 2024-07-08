import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleThemeMode } from "../redux/theme/themeSlice.js";
import {
  signOutStart,
  signOutSuccess,
  signOutFailure,
} from "../redux/user/userSlice.js";

function Header() {
  const path = useLocation().pathname;
  const { user } = useSelector((state) => state.user);
  const currTheme = useSelector((state) => state.theme.currTheme);
  const dispatch = useDispatch();

  async function handleSignOut() {
    try {
      dispatch(signOutStart());
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = res.json();
      if (!res.ok) {
        dispatch(signOutFailure(data.message));
      } else {
        dispatch(signOutSuccess());
      }
    } catch (err) {
      dispatch(signOutFailure(err));
    }
  }

  return (
    <Navbar className="border-b-2" color={"gray"}>
      <Link
        className="whitespace-nowrap text-sm sm:text-lg font-semibold dark:text-white"
        to={"/"}
      >
        <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Blogzy
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          rightIcon={AiOutlineSearch}
          placeholder="search..."
          className="hidden lg:inline"
        />
      </form>
      <Button className="lg:hidden" color={"gray"} pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex justify-center items-center gap-2 md:order-2">
        <Button color={"gray"} pill onClick={() => dispatch(toggleThemeMode())}>
          {currTheme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={user.userPhotoUrl} />}
            rounded
          >
            <DropdownHeader className="flex flex-col justify-center items-center text-lg">
              <span className="underline">User Information</span>{" "}
              <span>@{user.userName}</span>
              <span>{user.userEmail}</span>
            </DropdownHeader>
            <Link to={"/dashboard/profile"}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider />
            <Link>
              <DropdownItem onClick={handleSignOut}>Sign Out</DropdownItem>
            </Link>
          </Dropdown>
        ) : (
          <Button color={"gray"} pill>
            <Link to={"/sign-in"}>Sign In</Link>
          </Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to={"projects"}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

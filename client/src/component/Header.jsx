import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
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
        <Button color={"gray"} pill>
          <FaMoon />
        </Button>
        <Button color={"gray"} pill>
          <Link to={"/sign-in"}>Sign In</Link>
        </Button>
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

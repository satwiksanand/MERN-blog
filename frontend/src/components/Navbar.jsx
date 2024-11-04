import Logo from "./Logo";
import NavLinks from "./NavLinks";
import User from "./User";

function Navbar() {
  return (
    <nav className="flex gap-1 justify-around p-3 bg-[#333333]">
      <Logo />
      <div className="flex gap-3 justify-center items-center">
        <NavLinks label="Home" path="/" />
        <NavLinks label="News" path="/news" />
        <NavLinks label="Blogs" path="/blogs" />
        <NavLinks label="Create" path="/create" />
        <NavLinks label="Contact Us" path="/contact" />
      </div>
      <User />
    </nav>
  );
}

export default Navbar;

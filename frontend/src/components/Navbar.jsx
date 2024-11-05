import Logo from "./Logo";
import NavLinks from "./NavLinks";
import User from "./User";

function Navbar() {
  return (
    <nav className="flex justify-around gap-1 bg-[#333333] p-3">
      <Logo />
      <div className="flex items-center justify-center gap-3">
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

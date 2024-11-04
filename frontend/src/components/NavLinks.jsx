import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

NavLinks.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
};

function NavLinks({ label, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return `py-2 rounded-lg  px-4 ${
          isActive ? "bg-[#141414] text-white" : "bg-[#333333] text-[#7e7e81]"
        }`;
      }}
    >
      {label}
    </NavLink>
  );
}

export default NavLinks;

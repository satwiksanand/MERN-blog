import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <FaBlog fill="yellow" size={26} />
      <Link className="font-bold text-white" to={"/"}>
        Blogzy
      </Link>
    </div>
  );
}

export default Logo;

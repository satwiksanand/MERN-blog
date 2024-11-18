import { Link } from "react-router-dom";

import { FaLocationArrow } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function RightIntro() {
  return (
    <div className="mt-12 box-border flex flex-col justify-end gap-6 p-8">
      <div>
        <p className="text-lg font-bold">Our Contributors</p>
        <div className="flex">
          <CgProfile size={24} fill="yellow" />
          <CgProfile size={24} fill="red" />
          <CgProfile size={24} fill="green" />
          <CgProfile size={24} fill="blue" />
        </div>
      </div>
      <div>
        <p>Explore 1000+ Resources</p>
        <p className="text-[#7e7e81]">
          Over 1000 articles on emerging tech trends and breakthroughs
        </p>
      </div>
      <div className="flex">
        <Link
          to={"/resources"}
          className="flex items-center justify-center gap-2 rounded-xl border-[1px] border-gray-400 p-2 text-[#7e7e81]"
        >
          Explore Resources <FaLocationArrow fill="yellow" />
        </Link>
      </div>
    </div>
  );
}

export default RightIntro;

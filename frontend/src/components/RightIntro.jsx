import { Link } from "react-router-dom";

import { FaLocationArrow } from "react-icons/fa";

function RightIntro() {
  return (
    <div className="mt-12 box-border flex flex-col justify-end gap-6 p-8">
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

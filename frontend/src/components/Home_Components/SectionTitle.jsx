import PropTypes from "prop-types";
import { Link } from "react-router-dom";

SectionTitle.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.node,
  buttonText: PropTypes.string,
};

function SectionTitle({ intro, title, logo = null, buttonText = "" }) {
  return (
    <div className="flex flex-grow flex-col justify-between bg-[#262626] p-4 sm:flex-row sm:p-12">
      <div>
        <p className="w-fit rounded-lg bg-[#333] p-1 text-white">{intro}</p>
        <p className="text-5xl font-thin text-white">{title}</p>
      </div>
      {logo && (
        <Link
          to={"/#"}
          className="flex items-center justify-evenly gap-2 rounded-md border-[1px] p-2 outline-gray-500/50"
        >
          {buttonText}
          {logo}
        </Link>
      )}
    </div>
  );
}

export default SectionTitle;

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
    <div className="flex flex-grow flex-col gap-2 bg-[#262626] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-12">
      <div>
        <p className="w-fit rounded-lg bg-[#333] p-1 text-white">{intro}</p>
        <p className="text-3xl font-thin text-white md:text-5xl">{title}</p>
      </div>
      {logo && (
        <Link
          to={"/#"}
          className="flex w-fit items-center justify-evenly gap-2 rounded-xl border-[1px] bg-[#1a1a1a] p-2 text-[#7e7e81] sm:h-fit"
        >
          {buttonText}
          {logo}
        </Link>
      )}
    </div>
  );
}

export default SectionTitle;

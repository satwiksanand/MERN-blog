import { FaLocationArrow } from "react-icons/fa";
import PropTypes from "prop-types";

BottomCards.propTypes = {
  logo: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  stats: PropTypes.string,
};

function BottomCards({ logo, title, description, stats }) {
  return (
    <div className="border-1 flex-grow border-[1px] border-[#7e7e81] p-2 outline-gray-500/50">
      {logo}
      <div className="mb-2 mt-2 flex items-center justify-between">
        <div>
          <p>{title}</p>
          <p className="text-[#7e7e81]">{description}</p>
        </div>
        <div className="rounded-full bg-yellow-200 p-2">
          <FaLocationArrow fill="black" />
        </div>
      </div>
      <p className="text-[#7e7e81]">{stats}</p>
    </div>
  );
}

export default BottomCards;

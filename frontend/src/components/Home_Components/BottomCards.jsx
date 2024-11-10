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
    <div>
      {logo}
      <div>
        <div>
          <p>{title}</p>
          <p className="text-[#7e7e81]">{description}</p>
        </div>
        <div className="bg-yellow-200 p-2">
          <FaLocationArrow fill="white" />
        </div>
      </div>
      <p className="text-[#7e7e81]">{stats}</p>
    </div>
  );
}

export default BottomCards;

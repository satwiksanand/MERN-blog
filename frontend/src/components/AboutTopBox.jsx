import { IoNavigate } from "react-icons/io5";
import PropTypes from "prop-types";

AboutTopBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

function AboutTopBox({ title, description }) {
  return (
    <div className="rounded-md bg-[#333] p-4">
      <div className="flex items-center justify-between p-2">
        <p className="text-lg font-semibold text-white">{title}</p>
        <IoNavigate fill="yellow" />
      </div>
      <div>
        <p className="p-2 text-sm font-thin text-[#7e7e81]">{description}</p>
      </div>
    </div>
  );
}

export default AboutTopBox;

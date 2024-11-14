import PropTypes from "prop-types";
import { IoNavigate } from "react-icons/io5";

ContactHeader.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

function ContactHeader({ title, content }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="mb-4 font-bold text-white">{title}</span>
      {content.map((curr, ind) => (
        <div
          className="flex items-center justify-center gap-2 rounded-lg bg-[#262626] p-4 font-thin text-[#b3b3b3]"
          key={ind}
        >
          {curr} <IoNavigate fill="yellow" />
        </div>
      ))}
    </div>
  );
}

export default ContactHeader;

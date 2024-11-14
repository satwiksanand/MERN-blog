import { useState } from "react";
import PropTypes from "prop-types";
import { IoMdAdd } from "react-icons/io";

Accordion.propTypes = {
  items: PropTypes.array,
};

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full rounded-t-2xl bg-[#262626] p-4"
          onClick={() => handleToggle(index)}
        >
          <p className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white">
            {item.title} <IoMdAdd fill="yellow" size={24} />
          </p>
          {openIndex === index && (
            <div className="font-thin">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

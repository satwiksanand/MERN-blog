import { useState } from "react";
import PropTypes from "prop-types";

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
            {item.title}{" "}
            <span className="text-2xl font-bold text-yellow-200">
              {openIndex === index ? "-" : "+"}
            </span>
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

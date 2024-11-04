import PropTypes from "prop-types";

AboutColumn.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  logo: PropTypes.node,
};

function AboutColumn({ title, items, logo }) {
  return (
    <div>
      <span className="font-bold text-white text-lg mb-6">{title}</span>
      <div className="flex flex-col gap-1 text-[#7e7e81]">
        {items.map((curr, ind) => {
          return (
            <span
              key={ind}
              className={`${logo ? "flex items-center gap-1" : ""}`}
            >
              {curr} {logo || ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default AboutColumn;

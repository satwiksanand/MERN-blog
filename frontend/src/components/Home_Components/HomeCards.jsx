import PropTypes from "prop-types";

HomeCards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

function HomeCards({ title, description }) {
  return (
    <div className="border-[1px] border-[#7e7e81] p-2 text-left outline-gray-500/50">
      <p className="text-4xl font-semibold text-white">
        {title}
        <span className="text-2xl text-[yellow]">+</span>
      </p>
      <p className="capitalize text-[#7e7e81]">{description}</p>
    </div>
  );
}

export default HomeCards;

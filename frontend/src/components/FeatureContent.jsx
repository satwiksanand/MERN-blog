import PropTypes from "prop-types";
import FeatureCard from "./FeatureCard";

FeatureContent.propTypes = {
  logo: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  cardDetails: PropTypes.array,
};

function FeatureContent({ logo, title, description, cardDetails }) {
  return (
    <div className="flex flex-col p-12 sm:flex-row">
      <div
        id="left"
        className="flex max-w-[35rem] flex-col justify-center gap-2 p-6"
      >
        {logo}
        <p className="text-xl font-thin text-white">{title}</p>
        <p className="flex-wrap text-[#98989a]">{description}</p>
      </div>
      <div id="right" className="grid grid-cols-2 gap-4">
        {cardDetails.map((card, ind) => {
          return (
            <FeatureCard
              title={card.title}
              description={card.description}
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeatureContent;

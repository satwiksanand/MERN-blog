import PropTypes from "prop-types";

FeatureCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

function FeatureCard({ title, description }) {
  return (
    <div className="max-w-96 rounded-md bg-[#404040] p-6">
      <p className="mb-4 text-lg text-white">{title}</p>
      <p className="text-[#98989a]">{description}</p>
    </div>
  );
}

export default FeatureCard;

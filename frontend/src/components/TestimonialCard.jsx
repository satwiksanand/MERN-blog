import PropTypes from "prop-types";

TestimonialCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  feedback: PropTypes.string,
};

function TestimonialCard({ image, name, address, feedback }) {
  return (
    <div className="p-10 sm:p-6">
      <div className="mb-4 flex flex-row items-center justify-center gap-2">
        <img src={image} alt="" className="h-12 w-12 rounded-full" />
        <div className="flex flex-col items-center justify-start p-2">
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm font-thin text-white">{address}</p>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-lg bg-[#1a1a1a] p-8 text-center text-sm font-thin text-white">
        {feedback}
      </div>
    </div>
  );
}

export default TestimonialCard;

import PropTypes from "prop-types";
import { FaShare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

NewsHighlights.propTypes = {
  news: PropTypes.object,
};

function NewsHighlights({ news }) {
  const { image, title, tag, likes, shares } = news;
  return (
    <div className="flex flex-col gap-3 p-6 md:p-8">
      <img src={image} alt="" className="h-44 w-full rounded-md" />
      <div>
        <p className="truncate text-lg text-white">{title}</p>
        <p className="truncate text-sm text-[#7e7e81]">{tag}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center gap-2 rounded-md bg-[#4a4747] px-2 py-1">
            <FaRegHeart /> {likes}
          </div>
          <div className="flex items-center justify-center gap-2 rounded-md bg-[#4a4747] px-2 py-1">
            <FaShare /> {shares}
          </div>
        </div>
        <Link
          to={"#"}
          className="truncate rounded-md bg-[#4a4747] px-2 py-1 text-[#b0b0b4]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default NewsHighlights;

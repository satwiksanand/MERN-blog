import PropTypes from "prop-types";
import { FaShare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

NewsHeadlines.propTypes = {
  news: PropTypes.object,
};

function NewsHeadlines({ news }) {
  const {
    image,
    headline,
    introduction,
    category,
    likes,
    shares,
    publicationDate,
    author,
  } = news;
  return (
    <div className="grid grid-cols-1 items-center gap-4 p-4 sm:grid-cols-3 sm:p-8">
      <img src={image} alt="" className="rounded-lg" />
      <div className="p-3 sm:col-span-2 sm:col-start-2 sm:p-6">
        <p className="mb-3 text-xl font-bold text-white sm:mb-6">{headline}</p>
        <p className="text-md mb-3 font-thin text-[#7e7e81] sm:mb-6">
          {introduction}
        </p>
        <div className="mb-3 flex items-center justify-start gap-4 sm:mb-6 sm:gap-8">
          <div>
            <p className="font-semibold text-[#7e7e81]">Category</p>
            <p className="text-sm font-thin text-white">{category}</p>
          </div>
          <div>
            <p className="font-semibold text-[#7e7e81]">Publication Date</p>
            <p className="text-sm font-thin text-white">{publicationDate}</p>
          </div>
          <div>
            <p className="font-semibold text-[#7e7e81]">Author</p>
            <p className="text-sm font-thin text-white">{author}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-3">
            <div className="flex items-center justify-center gap-3 rounded-md bg-[#4a4747] px-2 py-1">
              <FaRegHeart /> {likes}
            </div>
            <div className="flex items-center justify-center gap-3 rounded-md bg-[#4a4747] px-2 py-1">
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
    </div>
  );
}

export default NewsHeadlines;

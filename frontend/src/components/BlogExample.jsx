import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";
import { IoNavigateSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

BlogExample.propTypes = {
  blogExample: PropTypes.object,
};

function BlogExample({ blogExample }) {
  return (
    <div className="grid grid-cols-2 p-12 sm:grid-cols-5">
      <div id="profile" className="flex gap-2">
        <img
          src={blogExample.user.image}
          alt="profile"
          className="h-fit w-fit max-w-12 rounded-full"
        />
        <div>
          <p className="text-white">{blogExample.user.name}</p>
          <p className="text-[#7e7e81]">{blogExample.user.field}</p>
        </div>
      </div>
      <div id="blog-details" className="col-span-full mb-4 sm:col-span-3">
        <p className="mb-2 text-[#7e7e81]">{blogExample.blogData.date}</p>
        <p className="mb-2">{blogExample.blogData.title}</p>
        <p className="mb-2 text-[#7e7e81]">{blogExample.blogData.intro}</p>
        <div className="flex">
          <div
            className="mr-2 flex items-center justify-center gap-2 rounded-lg bg-[#333] p-1"
            key={1}
          >
            <FaRegHeart />
            {blogExample.blogData.likes}
          </div>
          <div
            key={2}
            className="mr-2 flex items-center justify-center gap-2 rounded-lg bg-[#333] p-1"
          >
            <FaRegComment />
            {blogExample.blogData.comments}
          </div>
          <div
            key={3}
            className="mr-2 flex items-center justify-center gap-2 rounded-lg bg-[#333] p-1"
          >
            <FaShare />
            {blogExample.blogData.shares}
          </div>
        </div>
      </div>
      <div className="col-auto">
        <Link
          to={"/#"}
          className="flex w-fit items-center justify-evenly gap-2 justify-self-start rounded-xl border-[1px] bg-[#1a1a1a] p-2 text-[#7e7e81] sm:h-fit sm:justify-self-center"
        >
          <p className="sm:text-md text-sm">View Blog</p>
          <IoNavigateSharp fill="yellow" size={24} />
        </Link>
      </div>
    </div>
  );
}

export default BlogExample;

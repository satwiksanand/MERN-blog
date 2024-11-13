import { Card, Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoNavigate } from "react-icons/io5";
import { FaShare } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

BlogCard.propTypes = {
  blog: PropTypes.object,
  deletePost: PropTypes.func,
};

export default function BlogCard({ blog, deletePost }) {
  const { isAdmin } = useSelector((state) => state.user.currentUser);
  const { bannerImage, title, likes, shares, _id } = blog;
  const navigate = useNavigate();

  return (
    <Card className="flex flex-col gap-3 bg-[#1e1e1e] p-2 hover:scale-x-[1.02] hover:scale-y-[1.02] hover:cursor-pointer">
      {isAdmin && (
        <div className="flex justify-end text-end">
          <Dropdown className="rounded-lg" inline label="">
            <Dropdown.Item className="font-thin" icon={FaEdit}>
              Update
            </Dropdown.Item>
            <Dropdown.Item
              className="font-thin"
              icon={MdDelete}
              color="red"
              onClick={() => {
                deletePost(blog._id);
              }}
            >
              Delete
            </Dropdown.Item>
          </Dropdown>
        </div>
      )}
      <img
        src={bannerImage}
        alt="bannerImage"
        className="h-40 w-full flex-grow rounded-lg"
      />
      <p className="h-10 w-full truncate text-lg font-semibold">{title}</p>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-1 rounded-md bg-[#424243] p-1 px-2">
            <FaRegHeart /> <p>{likes}</p>
          </div>
          <div className="flex items-center justify-center gap-1 rounded-md bg-[#424243] p-1 px-2">
            <FaShare /> <p>{shares}</p>
          </div>
        </div>
        <div
          className="flex items-center justify-center gap-2 rounded-2xl border-[1px] p-2 outline-gray-500/50"
          onClick={() => {
            navigate(`/blogs/blog/${_id}`);
          }}
        >
          <p>Read More</p>
          <IoNavigate size={24} fill="yellow" />
        </div>
      </div>
    </Card>
  );
}

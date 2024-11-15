import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { getPostById } from "../slice/postSlice";

//make this responsive

function BlogOpen() {
  const [blogData, setBlogData] = useState({});
  console.log("re-render");
  const id = useParams().blogId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostById({ id, navigate, setBlogData }));
  }, [dispatch, id, navigate]);

  return (
    <div>
      <img
        src={blogData.bannerImage}
        alt="bannerImage"
        className="h-auto w-full"
      />
      <p className="p-6 text-center text-3xl font-bold text-white">
        {blogData.title}
      </p>
      <div className="grid lg:grid-cols-3">
        <div className="box-border lg:col-span-2 lg:col-start-1">
          {blogData.introduction && (
            <div className="p-6 text-lg font-thin text-[#b1b1b6]">
              <span className="block text-xl font-bold text-white">
                Introduction
              </span>
              {blogData.introduction}
            </div>
          )}
          <div className="col-start-1 box-border p-6 text-lg font-thin text-[#b1b1b6] lg:col-span-2">
            {blogData.content}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 p-6">
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#000] p-2 hover:cursor-pointer">
              <FaRegHeart /> <span className="font-bold">{blogData.likes}</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#000] p-2">
              <FaEye /> <span className="font-bold">{blogData.views}</span>{" "}
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#000] p-2">
              <FaShare /> <span className="font-bold">{blogData.shares}</span>{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 p-6 lg:p-2">
            <div className="flex flex-col gap-2 text-lg font-thin">
              <span className="text-lg font-bold">Publishing Date</span>
              {blogData.publicationDate}
            </div>
            <div className="flex flex-col gap-2 text-lg font-thin">
              <span className="text-lg font-bold">Category</span>
              {blogData.category}
            </div>
            <div className="flex flex-col gap-2 text-lg font-thin">
              <span className="text-lg font-bold">Reading Time</span>
              {blogData.readingTime}
            </div>
            <div className="flex flex-col gap-2 text-lg font-thin">
              <span className="text-lg font-bold">Author Name</span>
              {blogData.author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogOpen;

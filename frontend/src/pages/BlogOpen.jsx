import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";

//make this responsive

function BlogOpen() {
  const [blogData, setBlogData] = useState({});
  console.log("re-render");
  const par = useParams().blogId;
  const navigate = useNavigate();
  const getPostById = useCallback(async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/posts/read/${par}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      );
      const finalData = await res.json();
      console.log(finalData);
      if (res.ok) {
        return finalData;
      } else {
        toast.error(finalData.message || "Error while fetching the data!");
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message || "Error while fetching the data!");
      navigate("/");
    }
  }, [navigate, par]);

  useEffect(() => {
    getPostById().then((data) => {
      if (data) setBlogData(data);
    });
  }, [getPostById, par]);

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
      <div className="grid grid-cols-3">
        <div className="col-span-2 col-start-1 box-border">
          {blogData.introduction && (
            <div className="p-6 text-lg font-thin text-[#b1b1b6]">
              <span className="block text-xl font-bold text-white">
                Introduction
              </span>
              {blogData.introduction}
            </div>
          )}
          <div className="col-span-2 col-start-1 box-border p-6 text-lg font-thin text-[#b1b1b6]">
            {blogData.content}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 p-6">
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#000] p-2">
              <FaRegHeart /> <span className="font-bold">{blogData.likes}</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#000] p-2">
              <FaRegComment />{" "}
              <span className="font-bold">{blogData.views}</span>{" "}
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#000] p-2">
              <FaShare /> <span className="font-bold">{blogData.shares}</span>{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
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

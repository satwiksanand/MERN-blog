import { useDispatch, useSelector } from "react-redux";

import BlogCard from "../components/BlogCard";
import BlogForm from "./BlogForm";

import { deletePost } from "../slice/postSlice";

function Blogs() {
  const { post } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  function handleDeletePost(id) {
    dispatch(deletePost({ id }));
  }

  return (
    <div>
      <BlogForm />
      <div className="grid grid-cols-1 gap-4 p-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {post &&
          post.map((blog, ind) => {
            return (
              <BlogCard blog={blog} key={ind} deletePost={handleDeletePost} />
            );
          })}
      </div>
    </div>
  );
}

export default Blogs;

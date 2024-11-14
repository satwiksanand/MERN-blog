import { useDispatch, useSelector } from "react-redux";

import BlogCard from "../components/BlogCard";
import BlogForm from "./BlogForm";

import { deletePostSuccess } from "../slice/postSlice";
import { toast } from "react-toastify";

function Blogs() {
  const { post } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  async function deletePost(id) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/posts/delete/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      );
      await res.json();
      if (res.ok) {
        toast.success("post deleted successfully!");
        dispatch(deletePostSuccess(id));
      } else {
        toast.error("unable to delete the post!");
      }
    } catch (err) {
      toast.error(err.message || "unable to delete the post!");
    }
  }

  return (
    <div>
      <BlogForm />
      <div className="grid grid-cols-1 gap-4 p-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {post &&
          post.map((blog, ind) => {
            return <BlogCard blog={blog} key={ind} deletePost={deletePost} />;
          })}
      </div>
    </div>
  );
}

export default Blogs;

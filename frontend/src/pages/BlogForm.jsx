import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getByCategory } from "../slice/postSlice";
import { useCallback, useEffect } from "react";

function BlogForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      category: "All",
      limit: "16",
    },
  });

  const watchedCategory = watch("category");
  const watchedLimit = watch("limit");

  const onSubmit = useCallback(
    async (data) => {
      dispatch(getByCategory({ data }));
    },
    [dispatch],
  );

  useEffect(() => {
    handleSubmit(onSubmit)();
  }, [watchedCategory, watchedLimit, onSubmit, handleSubmit]);

  return (
    <form className="flex flex-col gap-3 bg-[#262626] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p className="text-4xl font-thin sm:text-lg sm:font-bold">
        This is the Blog form
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center md:gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="category"
            className="font-thin text-[#7e7e81] sm:text-lg sm:font-semibold"
          >
            Chose your Category
          </label>
          <select
            name="category"
            id="category"
            className="rounded-lg bg-[#757575] hover:cursor-pointer"
            {...register("category")}
          >
            <option value="All">All</option>
            <option value="ReactJS">ReactJS</option>
            <option value="NodeJS">NodeJS</option>
            <option value="NextJS">NextJS</option>
            <option value="MERN">MERN</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="limit"
            className="font-thin text-[#7e7e81] sm:text-lg sm:font-semibold"
          >
            Number of Blogs
          </label>
          <select
            name="limit"
            id="limit"
            className="rounded-lg bg-[#757575] hover:cursor-pointer"
            {...register("limit")}
          >
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="32">32</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default BlogForm;

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";
import {
  createPostFail,
  createPostStart,
  createPostSuccess,
} from "../slice/postSlice";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  async function onSubmit(data) {
    dispatch(createPostStart());
    try {
      const res = await fetch("http://localhost:3000/api/v1/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const finalData = await res.json();
      if (res.ok) {
        toast.success("Blog created successfully");
        dispatch(createPostSuccess());
      } else {
        toast.error(
          finalData.message ||
            "something wrong with the server try again later!",
        );
        dispatch(
          createPostFail(
            finalData.message ||
              "something wrong with the server try again later!",
          ),
        );
      }
    } catch (err) {
      toast.error(err.message || "Error while creating Blog!");
      dispatch(createPostFail(err.message || "Erro while creating blog!"));
    }
  }

  return (
    <div className="flex items-center justify-center gap-3 p-12">
      <form
        className="grid flex-grow grid-cols-1 gap-2 rounded-lg border-[1px] p-8 outline-gray-500/50 md:max-w-[90%] md:grid-cols-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-2 flex flex-col justify-evenly gap-3 p-4 md:col-start-1">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-lg font-semibold">
              Title
            </label>
            <input
              type="text"
              placeholder="What's your blog called?"
              id="title"
              className="rounded-lg bg-[#757575] p-2 font-thin placeholder:font-thin placeholder:text-white focus:outline-none"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="font-semibold text-red-600">
                <span className="font-bold">Oops</span> Title is required
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="introduction" className="text-lg font-semibold">
              introduction
            </label>
            <input
              type="text"
              placeholder="highlights of your blog!"
              id="introduction"
              className="rounded-lg bg-[#757575] p-2 font-thin placeholder:font-thin placeholder:text-white focus:outline-none"
              {...register("introduction")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content" className="text-lg font-semibold">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              placeholder="contents of your blog"
              className="rounded-lg bg-[#757575] p-2 font-thin placeholder:font-thin placeholder:text-white focus:outline-none"
              rows={8}
              {...register("content", { required: "Content cannot be empty!" })}
            ></textarea>
            {errors.content && (
              <p className="font-semibold text-red-600">
                <span className="font-bold">Oops</span> Content cannot be empty!
              </p>
            )}
          </div>
          <div className="flex items-center gap-6 p-2">
            <label htmlFor="readingTime" className="text-lg font-semibold">
              Reading Time
            </label>
            <select
              name="readingTime"
              id="readingTime"
              className="rounded-lg bg-[#757575]"
              {...register("readingTime")}
            >
              <option value="5min+">5 minutes</option>
              <option value="10min+">10 minutes</option>
              <option value="15min+">15 minutes</option>
              <option value="30min+">30 minutes</option>
            </select>
          </div>
          <div className="flex w-full flex-col gap-6 p-2">
            <label htmlFor="bannerImage" className="text-lg font-semibold">
              Banner Image
            </label>
            <input
              type="text"
              name="bannerImage"
              id="bannerImage"
              className="w-full rounded-lg bg-[#757575]"
              {...register("bannerImage")}
              placeholder="Leave empty for default image"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4 md:col-start-3">
          <div className="flex items-center gap-6 p-2">
            <label htmlFor="category" className="text-lg font-semibold">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="rounded-lg bg-[#757575]"
              {...register("category")}
            >
              <option value="ReactJS">ReactJS</option>
              <option value="NodeJS">NodeJS</option>
              <option value="NextJS">NextJS</option>
              <option value="MERN">MERN</option>
            </select>
          </div>
          <div className="hidden md:block">
            <div className="max-w-md rounded-lg border border-gray-200 bg-[#444] shadow dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://plus.unsplash.com/premium_photo-1680680514571-e16201d23e9d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwb24lMjBkZXNrfGVufDB8fDB8fHww"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-#7e7e81 mb-2 text-2xl font-bold tracking-tight dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="text-md inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="col-start-1 rounded-lg bg-[#7e7e91] p-3 text-white md:col-span-3">
          {loading ? <Spinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Create;

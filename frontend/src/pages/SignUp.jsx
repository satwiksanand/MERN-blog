import { Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../slice/userSlice";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  function onSubmit(data) {
    dispatch(signUp({ data, navigate }));
  }

  return (
    <div className="flex items-center justify-center p-4 sm:p-12">
      <form
        className="flex max-w-full flex-grow flex-col gap-4 rounded-xl border-[1px] p-6 outline-gray-500/50 sm:p-8 md:max-w-[60%] md:p-10 lg:max-w-[45%] lg:p-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-2 flex flex-col items-center justify-center gap-2 text-xl font-semibold">
          <span className="text-3xl font-bold">Log in to your Account</span>
          Welcome Back! Please Enter Your Details
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="useremail" className="text-lg font-semibold">
            Your Email
          </label>
          <input
            id="useremail"
            name="useremail"
            type="email"
            autoComplete="email"
            placeholder="name@flowbite.com"
            required
            className="rounded-lg bg-[#262626] p-2 font-thin placeholder:font-thin placeholder:text-[#b3b3b3] focus:outline-none"
            {...register("useremail", { required: "User Email is required" })}
          />
          {errors.useremail && (
            <p className="font-semibold text-red-600">
              <span className="font-bold">Oops </span>
              {errors.useremail.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold">
            Your Name
          </label>
          <input
            id="username"
            name="username"
            autoComplete="username"
            type="text"
            placeholder="Enter your User Name"
            required
            className="rounded-lg bg-[#262626] p-2 font-thin placeholder:font-thin placeholder:text-[#b3b3b3] focus:outline-none"
            {...register("username", { required: "User name is required" })}
          />
          {errors.username && (
            <p className="font-semibold text-red-600">
              <span className="font-bold">Oops </span>
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="rounded-lg bg-[#262626] p-2 font-thin placeholder:font-thin placeholder:text-[#b3b3b3] focus:outline-none"
            {...register("password", {
              required: "Password is a necessary field!",
            })}
          />
          {errors.password && (
            <p className="font-semibold text-red-600">
              <span className="font-bold">Oops </span>
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="rounded-lg bg-[#4975dd] p-3 text-[#060606]"
        >
          {loading ? (
            <>
              <Spinner size="sm" />
            </>
          ) : (
            "Sign Up"
          )}
        </button>
        <div className="flex items-center justify-between gap-2">
          <p className="text-white">Already have an account?</p>
          <Link to={"/signin"} className="text-blue-500">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

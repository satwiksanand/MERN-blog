import { Spinner } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../slice/userSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    //submit the form data and redirect to the login page if successfull!
    try {
      dispatch(signInStart());
      const response = await fetch("http://localhost:3000/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const finalResponse = await response.json();
      console.log(finalResponse);
      if (response.ok) {
        dispatch(signInSuccess(finalResponse));
        toast.success("login successfull");
        navigate("/");
      } else {
        dispatch(
          signInFailure(
            finalResponse.message || "something wrong with the server!",
          ),
        );
        toast.error("can't sign in");
      }
    } catch (err) {
      dispatch(
        signInFailure(err.message || "something wrong with the server!"),
      );
      toast.error("something up with the server!");
    }
  };

  const handleAdminLogin = () => {
    setValue("useremail", "admin@gmail.com");
    setValue("password", "adminpassword");
    handleSubmit(onSubmit)();
  };

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
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
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
            "Sign In"
          )}
        </button>
        <div className="flex items-center justify-between gap-2">
          <p className="text-white">Don{`'`}t have an account?</p>
          <Link to={"/signup"} className="text-blue-500">
            Sign Up
          </Link>
        </div>
        <hr />
        <div
          className="box-border flex cursor-pointer flex-col gap-2 bg-[#262626] p-4 text-[#7e7e81]"
          onClick={handleAdminLogin}
        >
          <p>Click me logging in as an admin</p>
          <p>Email : admin@gmail.com</p>
          <p>Password : adminpassword</p>
        </div>
      </form>
    </div>
  );
}

import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Card,
  Spinner,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpFailure, signUpStart, signUpSuccess } from "../slice/userSlice";
import { toast } from "react-toastify";

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    //submit the form data and redirect to the login page if successfull!
    try {
      dispatch(signUpStart());
      const response = await fetch("http://localhost:3000/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const finalResponse = await response.json();
      if (response.ok) {
        dispatch(signUpSuccess());
        navigate("/signin");
        toast.success(finalResponse.message || "User Created!");
      } else {
        dispatch(
          signUpFailure(
            finalResponse.message || "something up with the server",
          ),
        );
        toast.error(finalResponse.message || "something up with the server");
      }
    } catch (err) {
      dispatch(signUpFailure(err.message));
      toast.error(err.message || "something up with the server!");
    }
  };

  return (
    <Card className="flex max-w-md items-center justify-center bg-[#1a1a1a]">
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold text-white">
            Log in to your Account
          </p>
          <p className="text-lg font-bold text-[#7e7e81]">
            Welcome Back! Please Enter Your Details
          </p>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="useremail"
              value="Your email"
              className="text-white"
            />
          </div>
          <TextInput
            id="useremail"
            type="email"
            placeholder="name@flowbite.com"
            required
            {...register("useremail", { required: true })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="User Name"
              className="text-white"
            />
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="username"
            required
            {...register("username", { required: true })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
              className="text-white"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            {...register("password", { required: true })}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-white">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          {loading ? (
            <>
              <Spinner size="sm" /> Loading...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
        <hr />
        <div className="flex items-center justify-around gap-2">
          <p className="text-white">Already have an account?</p>
          <Link to={"/signin"} className="text-blue-500">
            Sign In
          </Link>
        </div>
      </form>
    </Card>
  );
}

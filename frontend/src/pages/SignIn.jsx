import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Card,
  Spinner,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../slice/userSlice";
import { toast } from "react-toastify";

export default function SignIn() {
  const { register, handleSubmit, setValue } = useForm();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

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
              htmlFor="password"
              value="Your password"
              className="text-white"
            />
          </div>
          <TextInput
            id="password"
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
            "Sign In"
          )}
        </Button>
        <hr />
        <div
          className="box-border flex cursor-pointer flex-col gap-2 bg-[#333] p-4 text-[#7e7e81]"
          onClick={handleAdminLogin}
        >
          <p>Click me logging in as an admin</p>
          <p>Email : admin@gmail.com</p>
          <p>Password : adminpassword</p>
        </div>
      </form>
    </Card>
  );
}

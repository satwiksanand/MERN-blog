import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //submit the form data and redirect to the login page if successfull!
  };

  // console.log(watch("useremail"));

  console.log("re-rendered");

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
        <Button type="submit">Submit</Button>
        <hr />
        <div
          className="box-border flex cursor-pointer flex-col gap-2 bg-[#333] p-4 text-[#7e7e81]"
          onClick={(e) => {
            //login as an admin
            console.log(e.target);
          }}
        >
          <p>Click for logging in as an admin</p>
          <p>Email : admin@gmail.com</p>
          <p>Password : admin123</p>
        </div>
      </form>
    </Card>
  );
}

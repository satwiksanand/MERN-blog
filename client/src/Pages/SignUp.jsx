import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 px-6 py-6 mx-auto border-2 border-gray-300 rounded-md bg-white shadow-md">
        <form className="flex gap-4 flex-col md:min-w-96">
          <div className="">
            <Label value="Your Username" color={"black"} />
            <TextInput type="text" placeholder="Username" className="" />
          </div>
          <div className="">
            <Label value="Your Email" color={"black"} />
            <TextInput
              type="text"
              placeholder="user@company.com"
              className=""
            />
          </div>
          <div className="">
            <Label value="Password" color={"black"} />
            <TextInput type="password" placeholder="Password" className="" />
          </div>
          <Button type="submit" gradientDuoTone={"purpleToPink"}>
            Submit
          </Button>
        </form>
        <div className="flex gap-2 text-black">
          <span>Have an Account?</span>
          <Link to={"/sign-in"} className="underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

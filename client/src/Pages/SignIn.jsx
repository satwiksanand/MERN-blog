import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import Oauth from "../component/Oauth";

function SignIn() {
  const [data, setData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error: errorMessage, isLoading } = useSelector((state) => state.user);

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value.trim() });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!data.userEmail || !data.password) {
      return dispatch(signInFailure("All fields are required!"));
    }

    dispatch(signInStart());
    try {
      const res = await axios.post("/api/auth/signin", data);
      console.log(res.data);
      dispatch(signInSuccess(res.data));
      navigate("/");
    } catch (err) {
      return dispatch(signInFailure("Wrong credentials!"));
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 px-6 py-6 mx-auto border-2 border-gray-300 rounded-md bg-white shadow-md">
        <form
          className="flex gap-4 flex-col md:min-w-96"
          onSubmit={handleSubmit}
        >
          <div className="">
            <Label value="Your Email" color={"black"} />
            <TextInput
              type="text"
              placeholder="user@company.com"
              id="userEmail"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <Label value="Password" color={"black"} />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            gradientDuoTone={"purpleToPink"}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner size={"sm"} /> <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-black">
            <span>Don&#39;t have an Account?</span>
            <Link to={"/sign-up"} className="underline">
              Sign Up
            </Link>
          </div>
          <Oauth />
          {errorMessage && (
            <Alert color={"failure"} className="font-bold">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;

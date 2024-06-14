import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function Oauth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleAuthentication = async () => {
    console.log("button clicked!");
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const dataFromGoogle = {
        userName: result.user.displayName,
        userEmail: result.user.email,
        userPhotoUrl: result.user.photoURL,
      };
      const res = await axios.post("/api/auth/google", dataFromGoogle);
      //   console.log(res.data);
      dispatch(signInSuccess(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button type="button" onClick={handleGoogleAuthentication}>
      <FaGoogle className="mr-2 w-6 h-6" /> Sign in with Google!
    </Button>
  );
}

export default Oauth;

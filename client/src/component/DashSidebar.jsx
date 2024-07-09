import { Sidebar } from "flowbite-react";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  signOutStart,
  signOutSuccess,
  signOutFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function DashSidebar() {
  const { tab } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function handleSignOut() {
    try {
      dispatch(signOutStart());
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = res.json();
      if (!res.ok) {
        dispatch(signOutFailure(data.message));
      } else {
        dispatch(signOutSuccess());
      }
    } catch (err) {
      dispatch(signOutFailure(err));
    }
  }

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            to={"/dashboard/profile"}
            icon={FaUserAlt}
            label={user.isAdmin ? "Admin" : "User"}
            labelColor={"dark"}
            className="cursor-pointer"
            active={tab === "profile"}
          >
            Profile
          </Sidebar.Item>
          <Sidebar.Item
            icon={FaSignOutAlt}
            className="cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;

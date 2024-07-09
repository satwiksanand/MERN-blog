import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function AdminOnlyPrivateRoute() {
  const { user } = useSelector((state) => state.user);
  return user && user.isAdmin ? <Outlet /> : <Navigate to={"/"} />;
}

export default AdminOnlyPrivateRoute;

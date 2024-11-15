import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AdminPrivateRoute() {
  const { isAdmin } = useSelector((state) => state.user.currentUser);
  return isAdmin ? <Outlet /> : <Navigate to={"/"} />;
}

export default AdminPrivateRoute;

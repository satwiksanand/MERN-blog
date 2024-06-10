import { Outlet } from "react-router-dom";
import Header from "../component/Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;

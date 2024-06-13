import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import FooterCom from "../component/FooterComponent";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterCom />
    </div>
  );
}

export default AppLayout;

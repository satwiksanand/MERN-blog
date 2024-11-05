import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col font-bold">
      <Navbar />
      <hr />
      <div className="min-h-screen flex-grow content-center justify-items-center bg-[#333]">
        <Outlet />
      </div>
      <About />
    </div>
  );
};

export default AppLayout;

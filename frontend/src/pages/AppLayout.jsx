import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col font-bold">
      <Navbar />
      <hr />
      <div className="box-border min-h-screen flex-grow content-center justify-items-center bg-[#333] p-6 text-white">
        <Outlet />
      </div>
      <About />
    </div>
  );
};

export default AppLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col font-bold">
      <Navbar />
      <hr />
      <div className="m-0 box-border min-h-screen bg-[#333] p-0 text-white">
        <Outlet />
      </div>
      <About />
    </div>
  );
};

export default AppLayout;

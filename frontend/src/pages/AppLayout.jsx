import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-bold">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <About />
    </div>
  );
};

export default AppLayout;

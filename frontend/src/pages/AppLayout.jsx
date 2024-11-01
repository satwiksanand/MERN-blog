import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="font-bold">
      this is the app lay out component the pages are supposed to render in this
      componet
      <Outlet />
    </div>
  );
};

export default AppLayout;

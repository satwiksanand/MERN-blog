import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      App Layout.
      <Outlet />
    </div>
  );
}

export default AppLayout;

//we will think about state management later.

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        //this is the default route and if the user is logged in it will show up or signup sir.
        element: <PrivateRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

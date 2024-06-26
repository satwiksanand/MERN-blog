import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import AppLayout from "./Pages/AppLayout.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";

const root = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "dashboard/:tab",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={root} />;
}

export default App;

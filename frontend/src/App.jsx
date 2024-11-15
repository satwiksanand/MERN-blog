//we will think about state management later.

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import News from "./pages/News";
import Blogs from "./pages/Blogs";
import Create from "./pages/Create";
import Contact from "./pages/Contact";

import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import BlogOpen from "./pages/BlogOpen";
import BlogEdit from "./pages/BlogEdit";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import Users from "./pages/Users";

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
          {
            path: "/news",
            element: <News />,
          },
          {
            path: "/blogs",
            element: <Blogs />,
          },
          {
            path: "/create",
            element: <Create />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/blogs/blog/:blogId",
            element: <BlogOpen />,
          },
          {
            path: "/blogs/edit/:blogId",
            element: <BlogEdit />,
          },
        ],
      },
      {
        element: <AdminPrivateRoute />,
        children: [
          {
            path: "/users",
            element: <Users />,
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
      <ToastContainer />
    </>
  );
}

export default App;

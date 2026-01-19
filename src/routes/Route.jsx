import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Loading from "../pages/Loading";
import Owner from "../pages/Owner";
import PrivateRoute from "../privateRoute/PrivateRoute";
import SkillDetails from "../pages/skillDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/skillData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
  {
    path: "/owner",
    element: <Owner></Owner>,
  },
  {
    path: "/skill-details/:skillId",
    element: (
      <PrivateRoute>
        <SkillDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/skillData.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
]);
export default router;

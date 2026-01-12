import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
        {
            path:"/signin",
            element:<SignIn></SignIn>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        }
    ]
  },
]);
export default router;
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Loading from "../pages/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>,
            loader: () => fetch("/skillData.json").then(res => res.json()),
            hydrateFallbackElement:<Loading></Loading>
            
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
        },
    ]
  },
  {
    path:"/*",
    element:<h2>Error 404</h2>
  },
]);
export default router;
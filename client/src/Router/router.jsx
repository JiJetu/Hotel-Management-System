import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Catagories/Category/Category";
import LogIn from "../pages/Home/LogIn/LogIn";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:"category/:path",
        element: <Category></Category>,
      },
      {
        path:"login",
        element: <LogIn></LogIn>
      },
      {
        path:"register",
        element: <Register></Register>
      },
    ]
  },
]);

export default router;
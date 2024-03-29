import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Catagories/Category/Category";
import LogIn from "../pages/Home/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PrivateAuth from "../PrivateAuth/PrivateAuth";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../pages/Dashboard/Dashboard";
import Text from "../Text/Text";
import ManageProduct from "../pages/Dashboard/ManageProduct/ManageProduct";
import Product from "../pages/Home/Catagories/Category/Product/Product";
import CheckOut from "../pages/Home/Catagories/Category/Product/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import UpdateProduct from "../pages/Dashboard/UpdateProduct/UpdateProduct";


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
        path:"/category/:path",
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.path}`)
      },
      {
        path:"/category/product/:id",
        element: <PrivateAuth><Product></Product></PrivateAuth>,
        loader: ({params}) => fetch(`http://localhost:5000/category/product/${params.id}`)
      },
      {
        path:"/checkout/:id",
        element: <PrivateAuth><CheckOut></CheckOut></PrivateAuth>,
        loader: ({params}) => fetch(`http://localhost:5000/category/product/${params.id}`)
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
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element: <Text>Dashboard</Text>,
      },
      {
        path:'/dashboard/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path:'/dashboard/manageProduct',
        element: <ManageProduct></ManageProduct>,
        loader: () => fetch('http://localhost:5000/addProducts')
      },
      {
        path:'/dashboard/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/addProducts/${params.id}`)
      },
    ]
  },
  {
    path:'/bookings',
    element: <PrivateAuth><Bookings></Bookings></PrivateAuth>
  }
]);

export default router;
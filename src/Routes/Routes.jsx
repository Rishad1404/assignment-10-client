import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllItems from "../Pages/AllItems";
import Blogs from "../Pages/Blogs";
import PrivateRoute from "./PrivateRoute";
import AddCraftItem from "../AddCraft/AddCraftItem";
import MyCraftItems from "../MyCraftItem/MyCraftItems";
import CraftDetails from "../Home/CraftDetails";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/addCraft')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/items',
            element:<AllItems></AllItems>,
        },
        {
            path:'/crafts/:_id',
            element:<CraftDetails></CraftDetails>,
            loader:()=>fetch('http://localhost:5000/addCraft')
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/addItems',
            element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path:'/myItems',
            element:<PrivateRoute><MyCraftItems></MyCraftItems></PrivateRoute>
        }
      ]
    },
  ]);

export default routes;
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
import UpdateCraft from "../AddCraft/UpdateCraft";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/crafts')
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
            loader:()=>fetch('http://localhost:5000/crafts')
        },
        {
            path:'/crafts/:id',
            element:<CraftDetails></CraftDetails>,
            // loader:({params})=>fetch(`http://localhost:5000/${params._id}`)
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/updateCraft/:id',
            element:<UpdateCraft></UpdateCraft>,
            // loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`)
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
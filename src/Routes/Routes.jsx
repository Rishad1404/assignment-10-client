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
import SubCategories from "../Home/SubCategories";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://lumina-art-and-craft-store-server.vercel.app/crafts')
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
            loader:()=>fetch('https://lumina-art-and-craft-store-server.vercel.app/crafts')
        },
        {
            path:'/crafts/:id',
            element:<CraftDetails></CraftDetails>,
            // loader:({params})=>fetch(`https://lumina-art-and-craft-store-server.vercel.app/${params._id}`)
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/subcategories',
            element:<SubCategories></SubCategories>,
            loader:()=>fetch('https://lumina-art-and-craft-store-server.vercel.app/crafts')

        },
        {
            path:'/updateCraft/:id',
            element:<UpdateCraft></UpdateCraft>,
            // loader:({params})=>fetch(`https://lumina-art-and-craft-store-server.vercel.app/crafts/${params.id}`)
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
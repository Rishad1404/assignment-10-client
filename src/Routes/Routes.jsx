import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

export default routes;
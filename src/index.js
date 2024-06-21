import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./views/Home/Home"
// import Product from "./views/Home/Home"
import Productview from "./views/ProductView/ProductView"



const root = ReactDOM.createRoot(document.getElementById("root"));


const router =createBrowserRouter([
   {
       path:"/",
       element:<Home/>
   },
// {
//    path:"/product",
//    element:<Product/>
// ,
// },
{
   path:"/productview/:id",
   element:<Productview/>

},
  
])
root.render(<RouterProvider router={router} /> )



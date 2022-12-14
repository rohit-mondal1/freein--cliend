import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Imgdrag from "../Page/Dashbord/Imgdrag";
import Profite from "../Page/Dashbord/Profite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path:'/uplodeimg' , element: <Imgdrag/>},
      {path:'/profile' , element: <Profite/>},
      {path:'/uplodeimg' , element: <Imgdrag/>},
      {path:'/uplodeimg' , element: <Imgdrag/>},
        
    ]
  },
]);

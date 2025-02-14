import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter ,Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../Redux/features/auth/authSlice";

import { Landing } from "../views/Auth/Landing";
import AuthLayout from "../layouts/AuthLayout";


export const authRouter = createBrowserRouter([ 
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/landing",
        element: <Landing />,
      },
    ],
  },
]);

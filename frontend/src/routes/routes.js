import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter ,Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../Redux/features/auth/authSlice";

import { Landing } from "../views/Auth/Landing";
import AuthLayout from "../layouts/AuthLayout";
import Appointments from "../views/user/Appointments";
import ViewBooking from "../views/user/ViewBooking";
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
      {
        path: "/appointments",
        element: <Appointments />,
      },
      {
        path: "/view-booking/:id",
        element: <ViewBooking />,
      }
    ],
  },
]);

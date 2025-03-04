import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter ,Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../Redux/features/auth/authSlice";
import { Landing } from "../views/Auth/Landing";
import AuthLayout from "../layouts/AuthLayout";
import Appointments from "../views/user/Appointments";
import ViewBooking from "../views/user/ViewBooking";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import AdminReg from "../views/Auth/AdminReg";
import { Dashboard } from "../views/Admin/Dashboard";
import { ManageSlots } from "../views/Admin/ManageSlots";
import { ViewAppointments } from "../views/Admin/ViewAppointments";

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
      },
      {
        path: "/auth/sign-in",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path:"/admin/register",
        element: <AdminReg/>,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/manage-slots",
        element: <ManageSlots />,
      },
      {
        path:"/admin/ViewBooking",
        element: <ViewAppointments />,
      }
    ],
  },
]);

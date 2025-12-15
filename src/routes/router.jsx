import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Home from "../pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Vendor from "../pages/Vendor/Vendor";
import BuyTickets from "../pages/BuyTickets.jsx/BuyTickets";
import AboutUs from "../pages/Vendor/AboutUs/AboutUs";
import AllTickets from "../pages/AllTickets/AllTickets";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "all-tickets",
        Component: AllTickets,
      },
      {
        path: "vendor",
        element: (
          <PrivateRoute>
            <Vendor></Vendor>
          </PrivateRoute>
        ),
      },
      {
        path: "buy-tickets",
        element: (
          <PrivateRoute>
            <BuyTickets></BuyTickets>
          </PrivateRoute>
        ),
        loader: () => fetch("/location.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

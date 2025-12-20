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

import MyProfile from "../pages/MyProfile/MyProfile";
import DashboardLayout from "../layouts/DashboardLayout";

import Profile from "../pages/Dashboard/Common/Profile";
import AddTickets from "../pages/Dashboard/Vendor/AddTickets";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import MyInventory from "../pages/Dashboard/Vendor/MyInventory";
import ManageOrders from "../pages/Dashboard/Vendor/ManageOrders";
import ErrorPage from "../pages/ErrorPage";
import Ticket from "../pages/Dashboard/Home/Ticket";
import TicketDetails from "../pages/TicketDetails/TicketDetails";
import LatestTickets from "../pages/Home/LatestTickets/LatestTickets";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import VendorRequest from "../pages/Dashboard/Admin/VendorRequest";
import VendorRoute from "./VendorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "ticket",
        element: (
          <PrivateRoute>
            <LatestTickets></LatestTickets>
          </PrivateRoute>
        ),
      },
      {
        path: "ticket/:id",
        element: (
          <PrivateRoute>
            <TicketDetails></TicketDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics></Statistics>
          </PrivateRoute>
        ),
      },
      {
        path: "add-tickets",
        element: (
          <PrivateRoute>
            <VendorRoute>
              <AddTickets />
            </VendorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "my-inventory",
        element: (
          <PrivateRoute>
            <VendorRoute>
              <MyInventory />
            </VendorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "vendor-requests",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <VendorRequest></VendorRequest>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <PrivateRoute>
            <VendorRoute>
              <ManageOrders></ManageOrders>
            </VendorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

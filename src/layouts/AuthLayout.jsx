import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/loginBg.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Logo />

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* LEFT SIDE */}
        <div className="flex-1 w-full">
          <Outlet />
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 w-full flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-md object-cover"
            src={authImg}
            alt="authentication image"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

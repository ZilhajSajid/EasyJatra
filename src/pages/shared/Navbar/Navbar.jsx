import React, { useState } from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [dropdown, setDropdown] = useState(false);

  const handleSignOut = () => {
    logOut().then().catch();
    setDropdown(false);
  };

  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="all-tickets">All Tickets</NavLink>
      </li>
      <li>
        <NavLink to="about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/buy-tickets">Buy Tickets</NavLink>
      </li>
      <li>
        <NavLink to="/vendor">Register as Vendor</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <span className="text-xl">
            <Logo></Logo>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              >
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">{user.displayName}</span>
              </div>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-50">
                  <Link
                    to="/my-profile"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                    onClick={() => setDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-secondary">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

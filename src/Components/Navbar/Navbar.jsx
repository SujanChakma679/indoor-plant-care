
import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../Provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/plants"}>Plants</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto">
      {/* Left Section */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl text-green-700">
          GreenNest
        </NavLink>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 btn btn-ghost"
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <CgProfile size={28} className="text-green-700" />
              )}
              <span>{user.displayName}</span>
            </div>

            {/* Dropdown Content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/auth/login"
            className="btn bg-green-600 hover:bg-green-700 text-white px-8"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;


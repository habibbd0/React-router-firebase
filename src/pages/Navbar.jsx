import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  // javascript lekhar jaiga
  const navLinks =
    <div className="text-lg text-center flex gap-10 font-semibold">
      <li>
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-700 scale-125 duration-700 ease-in-out border-y-2" : ""
          }
        >
         Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-700 scale-125 duration-700 ease-in-out border-y-2" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-700 scale-125 duration-700 ease-in-out border-y-2" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-700 scale-125 duration-700 ease-in-out border-y-2" : ""
          }
        >
          Service
        </NavLink>
      </li>
    </div>
 
  return (
    <div className="">
      <div className="navbar bg-black text-white">
        <div className="navbar-start ">
          <div className="dropdown mx-9">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-black rounded-box w-52 mx-9 flex gap-2"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl">Demo</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-2">{navLinks}</ul>
        </div>

        <div className="navbar navbar-end pr-16">
          
        <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <button className="btn btn-success w-20 text-white ">Login</button>
        </NavLink>
      </li>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

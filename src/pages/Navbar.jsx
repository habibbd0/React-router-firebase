import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../components/Authprovider/Authprovider";

const Navbar = () => {
  // javascript lekhar jaiga

  const { user } = useContext(AuthContext);
  // navLinks.json file er kaj
// const [nav,setnav] = useState([])

// useEffect(() => {
// fetch('/navlink.json')
// .then(res => res.json())
// .then(data => console.log(data))
// },[])

  const navLinks = (
    <div className="text-lg text-center flex gap-10 font-semibold">
      <li>
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-violet-700 scale-125 duration-700 ease-in-out border-y-2"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-violet-700 scale-125 duration-700 ease-in-out border-y-2"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-violet-700 scale-125 duration-700 ease-in-out border-y-2"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-violet-700 scale-125 duration-700 ease-in-out border-y-2"
              : ""
          }
        >
          Service
        </NavLink>
      </li>
    </div>
  );

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
          {/* <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <button className="btn btn-success w-20 text-white ">Login</button>
        </NavLink>
      </li> */}

          {/* profile  */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img alt="Habib" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link className="justify-between text-xl text-green-500">
                  {user?.displayName}
                </Link>
              </li>
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

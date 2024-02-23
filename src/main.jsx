import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./pages/ErrorElement.jsx";

import Home from "./pages/Home.jsx";
import Root from "./Root/Root.jsx";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Authprovider from "./components/Authprovider/Authprovider.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Blog from "./pages/Blog.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./components/Router/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorElement/>,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/blog',
        element:<Blog/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/login',
        element: <Login/>
      }, 
      {
        path : '/register',
        element : <Register/>
      },
      {
        path : '/profile',
        element : <PrivateRoute><UserProfile/></PrivateRoute>
      },
      {
        path : '/dashboard',
        element : <PrivateRoute><Dashboard/></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>
);

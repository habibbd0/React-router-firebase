import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./pages/ErrorElement.jsx";

import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Root from "./Root/Root.jsx";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/login',
        element: <Login></Login>
      }, 
      {
        path : '/register',
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

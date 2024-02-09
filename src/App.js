import React from "react";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Layout from "./component/Layout/Layout";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Portfolio from "./component/Portfolio/Portfolio";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
        { path: "", element: <Home/> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

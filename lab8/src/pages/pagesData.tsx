import { routerType } from "../types/router.types";
import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const pagesData: routerType[] = [
  { path: "", element: <Home />, title: "home" },
  { path: "/about", element: <About />, title: "about" },
  { path: "/contact", element: <Contact />, title: "contact" },
];

export default pagesData;

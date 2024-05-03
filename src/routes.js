// import React from "react";
import Home from "./pages/Home.js"
import Directors from "./pages/Directors.js"
import Actors from "./pages/Actors.js"
import Movie from "./pages/Movie.js"

const routes = [
  {path: '/', component: Home, exact: true},
  {path: "/actors", component: Actors},
  {path: "/directors", component: Directors},
  {path: "/movie:id", component: Movie}
  ];

export default routes;
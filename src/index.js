// import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const BrowserRouter = createBrowserRouter({routeConfig: routes});

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => (
    <BrowserRouter>
    <RouterProvider>
        {routes.map((route,index) => (
            <route.component key = {index}/>
        ))}
    </RouterProvider>
    </BrowserRouter>
)

root.render(renderApp());


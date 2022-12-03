import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Root from "./routes/Root";
import Error404 from "./Error404";
import Bienvenida from "./routes/Bienvenida";
import YTM from "./routes/YTM";

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Bienvenida />,
            },
            {
                path: "youtubemusic/",
                element: <YTM />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);

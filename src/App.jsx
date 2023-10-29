import './styles/App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HobbyList, {loader as rootLoader} from "./routes/HobbyList.jsx";
import HobbyDetails, {loader as hobbyDetailsLoader} from "./routes/HobbyDetails";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HobbyList/>,
        loader: rootLoader,
    },
    {
        path: "hobby/:id",
        element: <HobbyDetails/>,
        loader: hobbyDetailsLoader,
    },
]);
const App = () => {
    return <RouterProvider router={router}/>;
};

export default App;

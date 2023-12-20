import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Home from "../components/Home";
import Main from "../Layout/Main";
import Design2 from "../components/Design2";

export const router = createBrowserRouter([
  { path: "*", element: <Error /> },
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/design2", element: <Design2 /> },
    ],
  },
]);

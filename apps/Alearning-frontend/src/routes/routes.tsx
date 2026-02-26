import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/test/Dashborad";
import Home from "../pages/test/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      { index: true, Component: Home },
    ],
  },
  
]);
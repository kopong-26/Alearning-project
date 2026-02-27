import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/test/Dashborad";
import Home from "../pages/test/Home"
import { MainLayout } from "../layouts/MainLayout";
import { NoteListPage } from "../pages/NoteListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/notes",
    Component: MainLayout,
    children: [
      {index: true, Component: NoteListPage}
    ]
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      { index: true, Component: Home },
    ],
  },
  
]);
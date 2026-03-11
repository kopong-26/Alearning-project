import { createBrowserRouter } from "react-router";
import App from "../App";
import { MainLayout } from "../layouts/MainLayout";
import { NoteListPage } from "../pages/NoteListPage";
import { NoteDetailPage } from "../pages/NoteDetailPage";
import { getItems } from "../util/fetchUtils";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/notes",
    id: "notes-data",
    loader: async() => { return {notes: await getItems(`${import.meta.env.VITE_API_URL}/notes`)}},
    Component: MainLayout,
    children: [
      {index: true, Component: NoteListPage},
      {path: ":id", Component: NoteDetailPage}
    ]
  },
]);
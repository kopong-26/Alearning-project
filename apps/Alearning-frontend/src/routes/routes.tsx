import { createBrowserRouter, redirect } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { NoteListPage } from "../pages/NoteListPage";
import { NoteDetailPage } from "../pages/NoteDetailPage";
import { NoteForm } from "../pages/NoteForm";
import { createNote, getNotes } from "../features/note/api/services";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/notes"); 
    }
  },
  {
    path: "/notes",
    id: "notes-data",
    loader: getNotes,
    Component: MainLayout,
    children: [
      {index: true, Component: NoteListPage},
      {path: ":id", Component: NoteDetailPage},
      {
        path: "form", 
        Component: NoteForm, 
        action: createNote
      }
    ]
  }
]);
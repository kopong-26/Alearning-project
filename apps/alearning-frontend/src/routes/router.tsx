import { createBrowserRouter, redirect } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { NoteListPage } from "./notes/pages/NoteListPage";
import { NoteDetailPage } from "./notes/pages/NoteDetailPage";
import { NoteForm } from "./notes/pages/NoteForm";
import { notesAction, notesLoader } from "./notes/notes";
import { noteAction } from "./notes/note";

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
    loader: notesLoader,
    Component: MainLayout,
    children: [
      {index: true, Component: NoteListPage},
      {
        path: ":id", 
        Component: NoteDetailPage,
        action: noteAction
      },
      {
        path: "form", 
        Component: NoteForm,
        action: notesAction
      }
    ]
  }
]);
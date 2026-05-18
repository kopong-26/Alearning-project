import { createBrowserRouter, redirect } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { NoteListPage } from "./notes/pages/NoteListPage";
import { NoteDetailPage } from "./notes/pages/NoteDetailPage";
import { NoteFormPage } from "./notes/pages/NoteFormPage";
import { createNoteAction, deleteNoteFetcher, getNoteByIdLoader, getNotesLoader, noteAction } from "./notes/loaderAction";
import { LoginPage } from "./login/pages/LoginPage";
import { login } from "./login/loginAction";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1>server ไม่ทำงาน</h1>,
    children: [
      {
        index: true,
        element: <></>,
        loader: () => { return redirect("/notes"); }
      },
      {
        path: "notes",
        // id: "notes-data",
        loader: getNotesLoader,
        action: createNoteAction,
        Component: NoteListPage
      },
      {
        path: "notes/:id", 
        Component: NoteDetailPage,
        action: noteAction,
        loader: getNoteByIdLoader
      },
      {
        path: "notes/create", 
        Component: NoteFormPage,
      },
      {
        path: "notes/:id/edit",
        Component: NoteFormPage,
        loader: getNoteByIdLoader
      },
    ]
  },
  {
    path: '/login',
    Component: LoginPage,
    action: login
  },
  {
    path: "/api/notes/:id/delete",
    action: deleteNoteFetcher
  }
])
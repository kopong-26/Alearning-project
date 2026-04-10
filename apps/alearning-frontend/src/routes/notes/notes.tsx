import { redirect } from "react-router";
import type { ActionFunctionArgs } from "react-router";

import { getNotes } from "../../features/note/api/get-notes";
import { createNote } from "../../features/note/api/create-note";

// /notes method GET
export const notesAction = async ({ request }: ActionFunctionArgs) => {
          let payload = await request.json();
          await createNote(payload)
          return redirect("/notes");
}

// /notes method POST
export const notesLoader = async() => { 
        return {
          notes: await getNotes()
        }
    }


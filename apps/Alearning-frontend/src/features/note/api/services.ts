import { redirect } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { createItem, getItems } from "../../../utils/fetchUtils";

export const createNote = async ({ request }: ActionFunctionArgs) => {
          let payload = await request.json();
          await createItem(import.meta.env.VITE_NOTE_API, payload)
          return redirect("/notes");
}

export const getNotes = async() => { 
        return {
          notes: await getItems(import.meta.env.VITE_NOTE_API)
        }
    }
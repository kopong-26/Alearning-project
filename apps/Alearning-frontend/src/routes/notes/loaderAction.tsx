import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { deleteItem } from "../../utils/fetchUtils";
import { redirect } from "react-router";
import { getNotes } from "../../features/note/api/get-notes";
import { createNote } from "../../features/note/api/create-note";
import { getNoteById } from "../../features/note/api/get-note";

// DELETE/PUT /notes/:id
export const noteAction = async({request,params}:ActionFunctionArgs)=>{ 
    if(request.method === 'DELETE' ){
        const noteId = params.id
        await deleteItem(`${import.meta.env.VITE_NOTE_API}/${noteId}`)
        return redirect('/notes')
    }
    if(request.method === 'PUT' ){
        console.log("click update")
    }          
}

// DELETE /api/notes/:id/delete
export const deleteNoteFetcher = async({params}:ActionFunctionArgs)=>{
    const noteId = params.id
    await deleteItem(`${import.meta.env.VITE_NOTE_API}/${noteId}`)

}


// POST /notes
export const createNoteAction = async ({ request }: ActionFunctionArgs) => {
    let payload = await request.json();
    await createNote(payload)
    return redirect("/notes");
}

// GET /notes
export const getNotesLoader = async() => { 
    return {
        notes: await getNotes()
    }
}

export const getNoteByIdLoader = async({params}: LoaderFunctionArgs) => {
    const id = params.id as string
    return {
        note: await getNoteById(id)
    }
}
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { fetchDel, fetchPut } from "../../utils/fetchUtils";
import { redirect } from "react-router";
import { getNotes } from "../../features/note/api/getNotes";
import { createNote } from "../../features/note/api/createNote";
import { getNoteById } from "../../features/note/api/getNote";
import { useAuth } from "../../stores/auth";

//FIXME
/////////////////////
// DELETE/PUT /notes/:id
export const noteAction = async({request,params}:ActionFunctionArgs)=>{
    const token = useAuth.getState().auth?.accessTokens
    if(request.method === 'DELETE' ){
        const noteId = params.id
        await fetchDel(`${import.meta.env.VITE_NOTE_API}/${noteId}`,{token})
        return redirect('/notes')
    }
    if(request.method === 'PUT' ){
        const noteId = params.id
        const payload = await request.json()
        await fetchPut(`${import.meta.env.VITE_NOTE_API}/${noteId}`, payload, {token})
        return redirect(`/notes/${noteId}`)
    }          
}

//FIX ME
/////////////////////////
// DELETE /api/notes/:id/delete
export const deleteNoteFetcher = async({params}:ActionFunctionArgs)=>{
    const token = useAuth.getState().auth?.accessTokens
    const noteId = params.id
    await fetchDel(`${import.meta.env.VITE_NOTE_API}/${noteId}`,{token})

}


// POST /notes
export const createNoteAction = async ({ request }: ActionFunctionArgs) => {
    const token = useAuth.getState().auth?.accessTokens
    const payload = await request.json();
    await createNote(payload, token)
    return redirect("/notes");
}

// GET /notes
export const getNotesLoader = async() => { 
    return {
        notes: await getNotes()
    }
}

export const getNoteByIdLoader = async({params}: LoaderFunctionArgs) => {
    const token = useAuth.getState().auth?.accessTokens
    const id = params.id as string
    return {
        note: await getNoteById(id, token)
    }
}
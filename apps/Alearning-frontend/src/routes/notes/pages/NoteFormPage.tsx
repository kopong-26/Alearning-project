import { useLoaderData } from "react-router"
import { NoteForm } from "../../../features/note/components/NoteForm"


export function NoteFormPage(){
    const data = useLoaderData()
    const note = data?.note

    return <NoteForm note={note}/>
}
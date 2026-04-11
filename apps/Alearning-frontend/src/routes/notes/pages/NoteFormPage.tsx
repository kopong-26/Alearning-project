import { useLoaderData } from "react-router"
import { NoteForm } from "../../../features/note/components/NoteForm"
import type { NoteResponse } from "@alearning/types"


export function NoteFormPage(){
    const data = useLoaderData()
    const note = data?.note as NoteResponse


    return <NoteForm note={note} />
}
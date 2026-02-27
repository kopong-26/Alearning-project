import { useRouteLoaderData, useParams } from "react-router"

export function NoteDetailPage(){
    const { id } = useParams()
    const {notes} = useRouteLoaderData("notes-data") as { notes: any[] }
    console.log(id)

    let note = notes.find((note)=> note.id === Number(id))
    
    return (
        <>
        <h1>NoteDetailPage</h1>
        <div className="m-4 p-2 border border-main-contrast rounded-sm h-30">
            <h2 className="text-xl font-semibold">{note.id}:{note.title}</h2>
            <p className="text-sm">{note.desc}</p>
        </div>
        
        </>
    )
}
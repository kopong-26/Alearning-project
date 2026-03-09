import { useRouteLoaderData, useParams } from "react-router"
interface Note {
    id: string | number; // รองรับทั้ง String และ Number จาก API
    title: string;
    desc: string;
}

export function NoteDetailPage(){
    const { id } = useParams()
    const {notes} = useRouteLoaderData("notes-data") as { notes: Note[] }
    console.log(id)
    console.log(notes)

    let note = notes.find((note) => String(note.id) === String(id))
    
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
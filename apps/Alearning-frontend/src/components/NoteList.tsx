import { Link } from "react-router";

interface NoteListProps {
    notes: any[]; // แนะนำให้สร้าง interface ของ Note แยกในอนาคตเพื่อแทนที่ any
}

export function NoteList({notes}: NoteListProps){

    return (
        notes.map((note)=> {
            return (
                <div key={note.id} className="m-4 p-4 border border-main-contrast rounded-sm gap-2.5 flex-col flex">
                    <Link to={`/notes/${note.id}`} className="text-xl font-semibold text-blue-600">{note.title}</Link>
                    <p className="text-sm ">{note.desc}</p>
                    <p className="text-xs ">
                        Author: {note.author} | Created On: {note.createOn}
                    </p>
                </div>
            )
        })
    )    
}
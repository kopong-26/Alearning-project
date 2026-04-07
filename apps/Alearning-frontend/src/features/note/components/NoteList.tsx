import { Link } from "react-router";
import type { NoteResponse} from '@alearning/types';

interface NoteListProps {
    notes: NoteResponse[]; 
}

export function NoteList({notes}: NoteListProps){

    return (
        notes.map((note)=> {
            return (
                <div key={note.id} className="m-4 p-4 border border-main-contrast rounded-sm gap-2.5 flex-col flex">
                    <h3 className="text-xl font-semibold text-blue-600">
                        <Link to={`/notes/${note.id}`}>{note.title}</Link>
                    </h3>
                    <p className="text-sm break-keep">{note.description}</p>
                    <p className="text-xs ">
                        Author: {note.owner} | Created On: {note.createdAt}
                    </p>
                </div>
            )
        })
    )    
}
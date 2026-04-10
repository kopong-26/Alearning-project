import { Link, useFetcher, useSubmit } from "react-router";
import type { NoteResponse} from '@alearning/types';
import { ActionIcon } from "../../../components/ActionIcon";

interface NoteListProps {
    notes: NoteResponse[]; 
}

export function NoteList({notes}: NoteListProps){
    // const submit = useSubmit()
    
    // not change url to action url
    const fetcher = useFetcher()

    return (
        notes.map((note)=> {
            const items = [
                {label: "Edit", key:"edit", action: updateHadle },
                {label: "Delete", key:"delete", action: deleteHandle}
            ]

            function deleteHandle(){
                fetcher.submit(null, {
                    action: `/notes/${note.id}`,
                    method: "DELETE"
                })
            }
            function updateHadle(){
                fetcher.submit(null, {
                    action: `/notes/${note.id}`,
                    method: "PUT"
                })
            }

            return (
                <div key={note.id} className="m-4 p-4 border border-main-contrast rounded-sm gap-2.5 flex-col flex">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-blue-600">
                            <Link to={`/notes/${note.id}`}>{note.title}</Link>
                        </h3>
                    <ActionIcon items={items} ></ActionIcon>
                    </div>
                    
                    <p className="text-sm break-keep">{note.description}</p>
                    <p className="text-xs ">
                        Author: {note.owner} | Created On: {note.createdAt}
                    </p>
                </div>
                    
            )
        })
    )    
}
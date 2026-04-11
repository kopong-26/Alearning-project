import { Link, useFetcher, useNavigate } from "react-router";
import type { NoteResponse} from '@alearning/types';
import { ActionIcon } from "../../../components/ActionIcon";
import { Button } from "../../../components/BaseComponents/Button";

interface NoteListProps {
    notes: NoteResponse[]; 
}

export function NoteList({notes}: NoteListProps){
    // const submit = useSubmit()
    
    // not change url to action url
    const fetcher = useFetcher()
    const navigate  = useNavigate()

    return (
        notes.map((note)=> {
            const items = [
                {label: "Edit", key:"edit", action: updateHadle },
                {label: "Delete", key:"delete", action: deleteHandle}
            ]

            function deleteHandle(){
                fetcher.submit(null, {
                    action: `/api/notes/${note.id}/delete`,
                    method: "DELETE"
                })
            }
            function updateHadle(){
                navigate(`/notes/${note.id}/edit`)
            }

            return (
                <div key={note.id} className="m-4 p-4 border border-main-contrast rounded-sm gap-2.5 flex-col flex">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-blue-600">
                            <Link to={`/notes/${note.id}`}>{note.title}</Link>
                        </h3>
                        <ActionIcon items={items} />
                    </div>
                    
                    <p className="text-sm break-keep">{note.description}</p>

                    <div className="flex gap-1">
                        {note.topics.map((topic)=> (
                            
                                <Button
                                    key={topic.id}
                                    className="text-[0.75rem] bg-main-contrast border border-black h-auto"
                                >
                                    {topic.name}
                                </Button>
                            
                        ))}
                    </div>
                   
                    <p className="text-xs ">
                        Author: {note.owner} | Created On: {note.createdAt}
                    </p>
                </div>
                    
            )
        })
    )    
}
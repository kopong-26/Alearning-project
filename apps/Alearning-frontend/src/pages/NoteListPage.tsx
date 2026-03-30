import { NoteList } from "../features/NoteList"
import { BaseButton } from "../components/BaseComponents/BaseButton"
import { useRouteLoaderData } from "react-router"


export function NoteListPage(){
    const {notes} = useRouteLoaderData("notes-data")
    
    return (
        <>
            
            <div className="flex justify-end mb-6 mr-4 gap-2">
                <BaseButton> Sort </BaseButton>
                <BaseButton> New </BaseButton>
            </div>
            <NoteList notes={notes}></NoteList>
        </>
    )
}
import { NoteList } from "../features/NoteList"
import { BaseButton } from "../components/BaseComponents/BaseButton"
import { useRouteLoaderData, Link } from "react-router"


export function NoteListPage(){
    const {notes} = useRouteLoaderData("notes-data")
    
    return (
        <>
            <div className="flex justify-end mb-6 mr-4 gap-2">
                <BaseButton> Sort </BaseButton>
                <Link to="/notes/form"> <BaseButton> New </BaseButton> </Link>
            </div>
            <NoteList notes={notes}></NoteList>
            
        </>
    )
}
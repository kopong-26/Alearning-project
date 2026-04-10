import { NoteList } from "../../../features/note/components/NoteList"
import { BaseButton } from "../../../components/BaseComponents/BaseButton"
import { useRouteLoaderData, Link } from "react-router"
import { LinkButton } from "../../../components/BaseComponents/LinkButton"


export function NoteListPage(){
    const {notes} = useRouteLoaderData("notes-data")
    
    return (
        <>
            <div className="flex justify-end mb-6 mr-4 gap-2">
                <BaseButton> Sort </BaseButton>
                <LinkButton to="/notes/form">New</LinkButton>
            </div>
            <NoteList notes={notes}></NoteList>
            
        </>
    )
}
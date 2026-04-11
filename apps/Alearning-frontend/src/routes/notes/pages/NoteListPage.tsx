import { NoteList } from "../../../features/note/components/NoteList"
import { Button } from "../../../components/BaseComponents/Button"
import { useLoaderData } from "react-router"
import { LinkButton } from "../../../components/BaseComponents/LinkButton"


export function NoteListPage(){
    // const {notes} = useRouteLoaderData("notes-data")
    const {notes} = useLoaderData()
    
    return (
        <>
            <div className="flex justify-end mb-6 mr-4 gap-2">
                <Button> Sort </Button>
                <LinkButton to="/notes/create">New</LinkButton>
            </div>
            <NoteList notes={notes}></NoteList>
            
        </>
    )
}
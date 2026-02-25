import { Header } from "../components/Header"
import { NoteList } from "../components/NoteList"
import { BaseButton } from "../components/BaseButton"

export function MainLayout(){
    return (
        <>
            <Header className="mb-6"/>
            <BaseButton className="mb-6 mr-4 relative left-28"> Sort </BaseButton>
            <NoteList></NoteList>
        </>
            
        
    )
}
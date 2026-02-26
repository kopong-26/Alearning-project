import { Header } from "../components/Header"
import { NoteList } from "../components/NoteList"
import { BaseButton } from "../components/BaseButton"

export function MainLayout(){
    return (
        <>
            <Header className="mb-6"/>
            <div className="flex justify-end mb-6 mr-4 gap-2">
                <BaseButton> Sort </BaseButton>
                <BaseButton> New </BaseButton>
            </div>
            <NoteList></NoteList>
        </>
            
        
    )
}
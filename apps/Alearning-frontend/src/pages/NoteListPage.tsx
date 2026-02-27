import { NoteList } from "../components/NoteList"
import { BaseButton } from "../components/BaseComponents/BaseButton"

export function NoteListPage(){
    return (
        <>
            <div className="flex justify-end mb-6 mr-4 gap-2">
                <BaseButton> Sort </BaseButton>
                <BaseButton> New </BaseButton>
            </div>
            <NoteList></NoteList>
        </>
    )
}
interface NoteListProps {
    notes: any[]; // แนะนำให้สร้าง interface ของ Note แยกในอนาคตเพื่อแทนที่ any
}

export function NoteList({notes}: NoteListProps){

    return (
        notes.map((note)=> {
            return (
                <div className="m-4 p-2 border border-main-contrast rounded-sm h-30">
                    <h2 className="text-xl font-semibold">{note.title}</h2>
                    <p className="text-sm">{note.desc}</p>
                </div>
            )
        })
    )    
}
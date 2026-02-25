

let notes = [
    {
        id: 1,
        title: "Frontend",
        desc: "สรุปก็คือ เบราว์เซอร์กำลังแอบช่วยปรับเส้นขอบ border-[1px] ของคุณให้คมชัดที่สุดบนหน้าจอของคุณ โดยยอมให้ตัวเลขใน Inspector เพี้ยนไปนิดหน่อยเพื่อแลกกับความสวยงามครับ",
        createOn: "2026-02-25" ,
        updateOn: "2026-02-25",
        author: "artkpt",
        status: "public"
    },
    {
        id: 2,
        title: "Frontend",
        desc: "สรุปก็คือ เบราว์เซอร์กำลังแอบช่วยปรับเส้นขอบ border-[1px] ของคุณให้คมชัดที่สุดบนหน้าจอของคุณ โดยยอมให้ตัวเลขใน Inspector เพี้ยนไปนิดหน่อยเพื่อแลกกับความสวยงามครับ",
        createOn: "2026-02-25" ,
        updateOn: "2026-02-25",
        author: "artkpt",
        status: "public"
    },
    {
        id: 3,
        title: "Frontend",
        desc: "สรุปก็คือ เบราว์เซอร์กำลังแอบช่วยปรับเส้นขอบ border-[1px] ของคุณให้คมชัดที่สุดบนหน้าจอของคุณ โดยยอมให้ตัวเลขใน Inspector เพี้ยนไปนิดหน่อยเพื่อแลกกับความสวยงามครับ",
        createOn: "2026-02-25" ,
        updateOn: "2026-02-25",
        author: "artkpt",
        status: "public"
    },
    {
        id: 4,
        title: "Frontend",
        desc: "สรุปก็คือ เบราว์เซอร์กำลังแอบช่วยปรับเส้นขอบ border-[1px] ของคุณให้คมชัดที่สุดบนหน้าจอของคุณ โดยยอมให้ตัวเลขใน Inspector เพี้ยนไปนิดหน่อยเพื่อแลกกับความสวยงามครับ",
        createOn: "2026-02-25" ,
        updateOn: "2026-02-25",
        author: "artkpt",
        status: "public"
    },
    {
        id: 5,
        title: "Frontend",
        desc: "สรุปก็คือ เบราว์เซอร์กำลังแอบช่วยปรับเส้นขอบ border-[1px] ของคุณให้คมชัดที่สุดบนหน้าจอของคุณ โดยยอมให้ตัวเลขใน Inspector เพี้ยนไปนิดหน่อยเพื่อแลกกับความสวยงามครับ",
        createOn: "2026-02-25" ,
        updateOn: "2026-02-25",
        author: "artkpt",
        status: "public"
    }
]

export function NoteList(){
    return (
        notes.map((note)=> {
            return (
                <div className="m-4 p-2 border border-main-contrast rounded-sm h-28">
                    <h2 className="text-xl font-semibold">{note.title}</h2>
                    <p className="text-sm">{note.desc}</p>
                </div>
            )
        })
    )    
}
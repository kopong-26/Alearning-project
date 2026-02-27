import { createBrowserRouter } from "react-router";
import App from "../App";
import { MainLayout } from "../layouts/MainLayout";
import { NoteListPage } from "../pages/NoteListPage";
import { NoteDetailPage } from "../pages/NoteDetailPage";

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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/notes",
    id: "notes-data",
    loader: () => { return {notes:notes}},
    Component: MainLayout,
    children: [
      {index: true, Component: NoteListPage},
      {path: ":id", Component: NoteDetailPage}
    ]
  },
]);
import { createBrowserRouter, redirect } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { NoteListPage } from "../pages/NoteListPage";
import { NoteDetailPage } from "../pages/NoteDetailPage";
import { NoteForm } from "../pages/NoteForm";
import { getItems } from "../utils/fetchUtils";

export const router = createBrowserRouter([
  {
    path: "/",
    // Component: App,
    loader: () => {
      return redirect("/notes"); 
    }
  },
  {
    path: "/notes",
    id: "notes-data",
    loader: async() => { 
      return {
        notes: await getItems(import.meta.env.VITE_NOTE_API)

      }
    },
    Component: MainLayout,
    children: [
      {index: true, Component: NoteListPage},
      {path: ":id", Component: NoteDetailPage},
      {
        path: "form", 
        Component: NoteForm, 
        action: async ({ request }) => {
          // 1. ดึงข้อมูลจากฟอร์ม
          const formData = await request.formData();
          const rawData = Object.fromEntries(formData);

          // 2. ใช้ .getAll() เพื่อดึง input ที่ชื่อซ้ำกันทั้งหมดออกมาให้เป็น Array
          const stringTopicIds = formData.getAll("topic_id"); 
          // stringTopicIds จะได้เป็น ["1", "2"]

          // 3. แปลง Array ของ String ให้กลายเป็น Array ของ Number
          const numberTopicIds = stringTopicIds.map(Number);
          // numberTopicIds จะได้เป็น [1, 2]

          // 4. ประกอบร่างข้อมูลใหม่ โดยเอา Array ที่ถูกต้องไป "เขียนทับ" ค่าที่ผิดใน rawData
          const payload = {
            ...rawData,
            topic_id: numberTopicIds // ทับค่า "2" ด้วย [1, 2]
          };

          await fetch('/api/notes', { 
            method: 'POST', 
            body: JSON.stringify(payload),
            headers: {
                // 1. แปะป้ายบอก Backend ว่านี่คือ JSON นะ
                'Content-Type': 'application/json', 
                // 2. (Optional) บอกว่า Frontend ก็ขอรับคำตอบกลับมาเป็น JSON เหมือนกัน
                'Accept': 'application/json' 
            },
          });

          // 3. เตะกลับไปหน้า Home ทันทีที่เสร็จ!
          return redirect("/notes");
        }
      }
    ]
  },
  // {
  //   path: "*",
  //   loader: () => {
  //     // ทำการ Redirect กลับไปที่หน้า Home ("/") ทันที
  //     return redirect("/notes"); 
  //   }
  // }
]);
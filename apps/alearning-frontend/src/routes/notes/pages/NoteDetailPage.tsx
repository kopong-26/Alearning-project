import { useSubmit, useLoaderData, useNavigate } from "react-router"
import { Button } from "../../../components/BaseComponents/Button";
import { ActionIcon } from "../../../components/ActionIcon";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'


export function NoteDetailPage(){
    const submit = useSubmit()
    const navigate = useNavigate()
    const {note} = useLoaderData() 

    const items = [
        {
            options: [
                {label: "Edit", key:"edit", action: updateHadle },
                {label: "Delete", key:"delete", action: deleteHandle}
            ]
        }
    ]


    function deleteHandle(){
        submit(null, {
            action: `/notes/${note?.id}`,
            method: "DELETE"
        })
    }

    function updateHadle(){
        navigate(`/notes/${note.id}/edit`)
    }
    
    return (
        <>
        <div className="m-4 p-4 border border-main-contrast rounded-sm gap-2.5 flex-col flex">
            <div className="flex items-center pb-2 border-b border-main-contrast">
                <h2 className="text-2xl font-semibold ">{note?.title}</h2>
                <Button disabled className="bg-green-500 text-white font-semibold mx-2">
                    {note?.visibility}
                </Button>
                <ActionIcon items={items} className="ml-auto" ></ActionIcon>
            </div>
            <Markdown remarkPlugins={[remarkGfm]}>{note?.content}</Markdown>
        </div>

        
        </>
    )
}
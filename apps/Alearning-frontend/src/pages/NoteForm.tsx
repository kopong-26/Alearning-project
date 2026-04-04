import AsyncCreatableSelect from "react-select/async-creatable"
import { Input } from "../components/BaseComponents/Input"
import { getItems } from "../utils/fetchUtils"
import { useState } from "react"
import type { MultiValue } from "react-select"
import { BaseButton } from "../components/BaseComponents/BaseButton"
import { Form, useNavigate } from "react-router";

interface TopicOption {
  label: string;
  value: string;
  __isNew__?: boolean;
}

export function NoteForm(){
    // const {body, setbody} = useState({})
    const [inputTitle, setInputTitle] = useState("")
    const [inputSlug, setInputSlug] = useState("")
    const [inputDesc, setInputDesc] = useState("")
    const [inputContent, setInputContent] = useState("")
    const [selectOptions, setSelectOptions] = useState<MultiValue<TopicOption>>([])
    let navigate = useNavigate();
    
    async function loadOptions(searchValue:string) {
        const params:{search?: string} = {}
        params.search = searchValue
        try{
            const data = await getItems(`${import.meta.env.VITE_TOPIC_API}`,params)
            const options = data.map((topic: any) => (
                {
                    value: topic.id,
                    label: topic.name
                }
            ))
            return options
        } catch{ return []}
    }

    function submitForm(){
        
        navigate("/notes");
    }
    
    return (
        <div className="m-6 pb-50">
                <h2 className="text-2xl font-semibold mb-3">Create Note</h2>
                <Form className="flex flex-col gap-1.5" method="post" >
                    <label className="font-semibold">Title</label>
                    <Input 
                        type="text" 
                        name="title" 
                        onChange={(event)=> {
                            setInputTitle(event.target.value)
                        }}
                        value={inputTitle}
                    />
                    {/* <label className="font-semibold">Slug</label>
                    <Input 
                        type="text" 
                        name="slug" 
                        onChange={(event)=> {
                            setInputSlug(event.target.value)
                        }}
                        value={inputSlug}
                    /> */}
                    <label className="font-semibold">Description</label>
                    <Input 
                        type="text" 
                        name="description"
                        onChange={(event)=> {
                            setInputDesc(event.target.value)
                        }}
                        value={inputDesc} 
                    />
                    <label className="font-semibold">Visibility</label>
                    <div className="flex gap-1">
                        <input 
                            type="radio" 
                            name="visibility" 
                            value="public"
                        /> 
                        <label>Public</label>
                    </div>
                    <div className="flex gap-1">
                        <input 
                            type="radio" 
                            name="visibility" 
                            value="private"
                        /> 
                        <label>Private</label>
                    </div>
                    <label className="font-semibold">Content</label>
                    <textarea 
                        name="contentRaw" 
                        rows={6}
                        placeholder="พิมพ์เนื้อหาโน้ตของคุณที่นี่..."
                        className="w-full h-75 border border-main-contrast rounded-md px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(event)=> {
                            setInputContent(event.target.value)
                        }}
                        value={inputContent}
                    />
                    <label className="font-semibold">Tags</label>
                    <AsyncCreatableSelect 
                        isMulti 
                        loadOptions={loadOptions}
                        // new selected obj has __isNew__: true prop 
                        onChange={(selected: MultiValue<TopicOption>)=> {
                            setSelectOptions(selected)
                        }}
                        name="topic_id"
                        value={selectOptions}
                    />
                    <BaseButton type="submit">Create</BaseButton>
                    
                </Form>
        </div>
    )
}
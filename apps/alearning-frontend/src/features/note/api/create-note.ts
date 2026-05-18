import { fetchPost } from "../../../utils/fetchUtils"

export const createNote = async(payload: Record<string, string | number | any[] >) => {
        const response = await fetchPost(import.meta.env.VITE_NOTE_API, payload)
        
        if(response?.status !== 201){ throw new Error}

        const newNote = await response.json()
        return newNote
}
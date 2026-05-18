import { fetchGet } from "../../../utils/fetchUtils"

export const getNoteById = async(id:string) => {
        const response = await fetchGet(import.meta.env.VITE_NOTE_API+ `/${id}` )
        if(response?.status !== 200){throw new Error}
        const note = await response.json()
        return note
}
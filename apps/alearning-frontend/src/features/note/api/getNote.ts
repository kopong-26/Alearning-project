import { fetchGet } from "../../../utils/fetchUtils"

export const getNoteById = async(id:string, token:string|undefined) => {
        const response = await fetchGet(import.meta.env.VITE_NOTE_API+ `/${id}`, {token})
        if(response?.status !== 200){throw new Error}
        const note = await response.json()
        return note
}
import { getItems } from "../../../utils/fetchUtils"

export const getNoteById = async(id:string) => {
        const note = await getItems(import.meta.env.VITE_NOTE_API+ `/${id}` )
        return note
}
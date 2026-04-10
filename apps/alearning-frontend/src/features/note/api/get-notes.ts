import { getItems } from "../../../utils/fetchUtils"

export const getNotes = async() => {
        const notes = await getItems(import.meta.env.VITE_NOTE_API)
        return notes
}


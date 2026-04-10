import { createItem } from "../../../utils/fetchUtils"

export const createNote = async(payload: Record<string, string | number | any[] >) => {
        const notes = await createItem(import.meta.env.VITE_NOTE_API, payload)
        return notes
}
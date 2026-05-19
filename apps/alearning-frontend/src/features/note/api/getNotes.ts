import { fetchGet } from "../../../utils/fetchUtils"

export const getNotes = async() => {
        const response = await fetchGet(import.meta.env.VITE_NOTE_API)

        if(response?.status !== 200){throw new Error}
        const notes = await response.json()
        return notes
}


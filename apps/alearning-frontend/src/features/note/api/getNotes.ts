import { fetchGet } from "../../../utils/fetchUtils"
import { useAuth } from "../../auth/stores/authStore"

export const getNotes = async() => {
        const token = useAuth.getState().auth?.accessTokens
        const response = await fetchGet(import.meta.env.VITE_NOTE_API,{token})

        if(response?.status !== 200){throw new Error}
        const notes = await response.json()
        return notes
}


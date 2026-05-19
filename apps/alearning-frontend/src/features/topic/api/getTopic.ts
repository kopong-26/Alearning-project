import { fetchGet } from "../../../utils/fetchUtils"

export const getTopicByName = async(params:{search?: string}) => {
        const response = await fetchGet(`${import.meta.env.VITE_TOPIC_API}`,{params})
        if(response?.status !== 200){throw new Error}
        const topics = await response.json()
        return topics
}
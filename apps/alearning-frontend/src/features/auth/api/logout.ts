import { fetchPost } from "../../../utils/fetchUtils";

// FIXME
//////////////////////
export async function logout(token: string|undefined){
    const res = await fetchPost(import.meta.env.VITE_LOGOUT_API, null, {token})
    if(res?.status !== 200){ throw new Error }

    const data = await res.json()
     
    return data
}
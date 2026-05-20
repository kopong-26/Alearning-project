import { redirect } from "react-router"
import { useAuth } from "../stores/authStore"


export const requireAuth = (allowRole?:string)=>{
    const auth = useAuth.getState().auth 
    
    if(!auth){ throw redirect('/login')}

    if(allowRole && auth.role !== allowRole) {throw redirect('/notes') }
    
    return
}
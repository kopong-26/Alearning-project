import type { ActionFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { authen } from "../../features/auth/api/authen";


export const login = async({ request }:ActionFunctionArgs)=>{
    let formData = await request.formData()
    let username = formData.get("username");
    let password = formData.get("password");

    const payload = {username, password} as Record<string, string | number | any[]>
    
    try{
        const response = await authen(payload)
        return {
            userId: response.userId,
            username: response.username,
            accessTokens: response.accessTokens
        }
    } catch(e){
        return redirect('/login')
    }
    
}
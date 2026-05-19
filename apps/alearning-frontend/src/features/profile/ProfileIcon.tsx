import { useSubmit } from "react-router";
import { ActionIcon } from "../../components/ActionIcon";
import type { Items } from "../../components/BaseComponents/OptionList";
import { useAuth } from "../../stores/auth";

export function ProfileIcon(){
    const {auth} = useAuth()
    const submit = useSubmit()
    const userItems:Items = [
        {
            header: auth?.username,
            options: [
                {label: "Logout", key:"logout", action: ()=>{
                    submit(null,{method: "POST", action:"/logout"})
                }},
            ]
        }
    ]
    const adminItems:Items = [
        {
            header: auth?.username,
            options: [
                {label: "Create user", key:"createUser", action: ()=>{}},
                {label: "Logout", key:"logout", action: ()=>{
                    submit(null,{method: "POST", action:"/logout"})
                }},
            ]
        }
    ]

    return (
        <>
            {auth?.role === "admin" 
                ? <ActionIcon icon="profile" items={adminItems} />
                : <ActionIcon icon="profile" items={userItems} />
            }
        </>
    )
}
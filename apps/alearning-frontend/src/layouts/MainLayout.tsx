import { Header } from "../components/Header"
import { Outlet } from "react-router"

export function MainLayout(){
    return (
        <>
            <Header className="mb-6"/>
            <Outlet />
        </>
            
        
    )
}
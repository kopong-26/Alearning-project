import { Form } from "react-router"
import { Input } from "../../components/BaseComponents/Input"
import { Button } from "../../components/BaseComponents/Button"


export function UserForm(){

    return (
    <>
    <div className="m-6 pb-50 flex justify-center">
        <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-3">Create User</h2>
            
            <Form className="flex flex-col gap-1.5" method="POST">
                <label className="font-semibold">Username</label>
                <Input 
                    type="text" 
                    name="username" 
                />
                <label className="font-semibold">Email</label>
                <Input 
                    type="text" 
                    name="email" 
                />
                <label className="font-semibold">Firstname</label>
                <Input 
                    type="text" 
                    name="firstname" 
                />
                <label className="font-semibold">Lastname</label>
                <Input 
                    type="text" 
                    name="lastname" 
                />

                <label className="font-semibold">Role</label>
                    <div className="flex gap-1">
                        <input 
                            type="radio" 
                            name="role" 
                            value="user"
                            defaultChecked
                            className="cursor-pointer"
                        /> 
                        <label>User</label>
                    </div>
                    <div className="flex gap-1">
                        <input 
                            type="radio" 
                            name="role" 
                            value="admin"
                            className="cursor-pointer"
                        /> 
                        <label>Admin</label>
                    </div>
                
                <label className="font-semibold">Password</label>
                <Input 
                    type="text" 
                    name="password"
                />
                
                <label className="font-semibold">Confirm Password</label>
                <Input 
                    type="text" 
                    name="confirm_password"
                />
                        
                <div className="mt-4 flex justify-end">
                    <Button type="submit" className="w-full sm:w-auto px-8">
                        Create
                    </Button>      
                </div>
            </Form>
        </div>
    </div>
    </>)
}
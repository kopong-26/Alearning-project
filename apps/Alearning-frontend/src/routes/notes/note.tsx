import type { ActionFunctionArgs } from "react-router";
import { deleteItem } from "../../utils/fetchUtils";

// for /notes/:id
export const noteAction = async({request,params}:ActionFunctionArgs)=>{ 
          if(request.method === 'DELETE' ){
            const noteId = params.id
            await deleteItem(`${import.meta.env.VITE_NOTE_API}/${noteId}`)
          }
          if(request.method === 'PUT' ){
            console.log("click update")
          }
          
}
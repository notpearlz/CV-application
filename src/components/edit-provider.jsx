import { useState } from "react"


import CancelButton from "./shared/cancel";
import SubmitButton from "./shared/submit"

function EditProvider(){
    const [editing, setEditing] = useState(null)

    function handleEdit(obj){

        if(!obj) {
            setEditing(null);

            return;
        }

        const name = obj.target.dataset.form;
        if(editing == name){
            //setEditing(null)
        } else {
            setEditing(name)

        }
    }

    function EditLayout(){
        return (
            <>
                <div className="edit-layout">
                    <CancelButton />
                    <SubmitButton />
                </div>
               
            </>
        )
    }

    return {editing, handleEdit, EditLayout}
}

export default EditProvider
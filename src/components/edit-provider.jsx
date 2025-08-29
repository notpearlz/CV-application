import { useState } from "react"


import CancelButton from "./shared/cancel";
import SaveButton from "./shared/save"

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
                    <SaveButton />
                </div>
               
            </>
        )
    }

    return {editing, handleEdit, EditLayout}
}

export default EditProvider
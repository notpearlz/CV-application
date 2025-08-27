import { useState } from 'react'

import EditButton from './shared/edit'
import SubmitButton from './shared/submit'

function Name(){
    return (
        <div>
            <label htmlFor='name'>Name</label>
            <input id='name'/>
        </div>
    )
}

function Email(){
    return (
        <div>
            <label htmlFor='email'>Email</label>
            <input id='email'/>
        </div>
    )
}

function Phone(){
    return (
        <div>
            <label htmlFor='phone'>Phone</label>
            <input id='phone'/>
        </div>
    )
}

function GeneralForm(){
    const [editing, setEditing] = useState(false)
    return (
        <>
            <h1>General</h1>
            <div>
                <Name/>
                <Email/>
                <Phone/>

                {editing && (
                    <div>
                        <EditButton />
                        <SubmitButton />
                    </div>
                )}
               
                
                
            </div>
        </>
    )
   
}

export default GeneralForm
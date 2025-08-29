import EditButton from "./shared/edit"

function Name({disabled, editTemp}){
    return (
        <div className='field'>
            <label htmlFor='name' >Name</label>
            <input onChange={editTemp} id='name' disabled={disabled}/>
        </div>
    )
}

function Email({disabled, editTemp}){
    return (
        <div className='field' >
            <label htmlFor='email'>Email</label>
            <input onChange={editTemp} id='email' disabled={disabled}/>
        </div>
    )
}

function Phone({disabled, editTemp}){
    return (
        <div className='field'>
            <label htmlFor='phone'>Phone</label>
            <input onChange={editTemp} id='phone' disabled={disabled}/>
        </div>
    )
}

function GeneralForm({name, editing, handleEdit, EditLayout, editTemp}){


    return (
        <div className="form">
            <h1 className="form-title" data-form={name}>General</h1>
            <div className='extra'>
                {editing != name && <EditButton name={name} handleEdit={handleEdit}/>}
                {editing==name && <EditLayout />}

            </div>
            <div className='general section'>
                <Name editTemp={editTemp} disabled={name!=editing}/>
                <Email editTemp={editTemp} disabled={name!=editing}/>
                <Phone editTemp={editTemp} disabled={name!=editing}/>
               
            </div>
        </div>
    )
   
}

export default GeneralForm
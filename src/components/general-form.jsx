import EditButton from "./shared/edit"

function Name({disabled}){
    return (
        <div className='field'>
            <label htmlFor='name' >Name</label>
            <input id='name' disabled={disabled}/>
        </div>
    )
}

function Email({disabled}){
    return (
        <div className='field' >
            <label htmlFor='email'>Email</label>
            <input id='email' disabled={disabled}/>
        </div>
    )
}

function Phone({disabled}){
    return (
        <div className='field'>
            <label htmlFor='phone'>Phone</label>
            <input id='phone' disabled={disabled}/>
        </div>
    )
}

function GeneralForm({name, editing, handleEdit, EditLayout}){


    return (
        <div className="form">
            <h1 className="form-title" data-form={name}>General</h1>
            <div className='extra'>
                {editing != name && <EditButton name={name} handleEdit={handleEdit}/>}
                {editing==name && <EditLayout />}

            </div>
            <div className='section'>
                <Name disabled={name!=editing}/>
                <Email disabled={name!=editing}/>
                <Phone disabled={name!=editing}/>
               
            </div>
        </div>
    )
   
}

export default GeneralForm
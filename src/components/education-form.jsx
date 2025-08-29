import EditButton from "./shared/edit"

function School({disabled, editTemp}){
    return (
        <div className='school section'>
            <SchoolName editTemp={editTemp} disabled={disabled}/>
            <SchoolAreaOfStudy editTemp={editTemp} disabled={disabled}/>
            <SchoolDateOfStudy editTemp={editTemp} disabled={disabled}/>
        </div>
    )
}



function SchoolName({disabled, editTemp}){
    return (
        <>
            <div className='field'>
                <label htmlFor="schoolName">School Name</label>
                <input onChange={editTemp} id='schoolName' disabled={disabled}/>
            </div>
        </>
    )
}

function SchoolAreaOfStudy({disabled, editTemp}){
    return (
        <>
            <div className='field' >
                <label htmlFor="schoolAreaOfStudy">Area Of Study</label>
                <input onChange={editTemp} id='schoolAreaOfStudy' disabled={disabled}/>
            </div>
        </>
    )
}

function SchoolDateOfStudy({disabled, editTemp}){
    return (
        <div className="form">
            <div className='field'>
                <label htmlFor="schoolDateOfStudy">Date Of Study</label>
                <input onChange={editTemp} id='schoolDateOfStudy' disabled={disabled}/>

            </div>
               
               
               
        </div>
    )
}


function EducationForm({name, editing, handleEdit, EditLayout, editTemp}){
    return (
        <div className="form">
            <h1 className="form-title" data-form={name}>Education</h1>
            <div className='extra'>
                {editing != name && <EditButton name={name} handleEdit={handleEdit}/>}
                {editing==name && <EditLayout />}

            </div>     
            <div className="section">
                <School editTemp={editTemp} disabled={name != editing}/>


            </div>
        </div>
    )
}




export default EducationForm
import EditButton from "./shared/edit"

function School({disabled}){
    return (
        <div className='school section'>
            <SchoolName disabled={disabled}/>
            <SchoolAreaOfStudy disabled={disabled}/>
            <SchoolDateOfStudy disabled={disabled}/>
        </div>
    )
}



function SchoolName({disabled}){
    return (
        <>
            <div className='field'>
                <label htmlFor="schoolName">School Name</label>
                <input id='schoolName' disabled={disabled}/>
            </div>
        </>
    )
}

function SchoolAreaOfStudy({disabled}){
    return (
        <>
            <div className='field' >
                <label htmlFor="schoolAreaOfStudy">Area Of Study</label>
                <input id='schoolAreaOfStudy' disabled={disabled}/>
            </div>
        </>
    )
}

function SchoolDateOfStudy({disabled}){
    return (
        <div className="form">
            <div className='field'>
                <label htmlFor="schoolDateOfStudy">Date Of Study</label>
                <input id='schoolDateOfStudy' disabled={disabled}/>

            </div>
               
               
               
        </div>
    )
}


function EducationForm({name, editing, handleEdit, EditLayout}){
    return (
        <div className="form">
            <h1 className="form-title" data-form={name}>Education</h1>
            <div className='extra'>
                {editing != name && <EditButton name={name} handleEdit={handleEdit}/>}
                {editing==name && <EditLayout />}

            </div>     
            <div className="section">
                <School disabled={name != editing}/>


            </div>
        </div>
    )
}




export default EducationForm
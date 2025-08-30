import AddButton from "./shared/add"
import EditButton from "./shared/edit"
import RemoveButton from "./shared/remove"

function School({disabled, editTemp, id}){
    return (
        <div className='school section'>
            <SchoolName id={id} editTemp={editTemp} disabled={disabled}/>
            <SchoolAreaOfStudy id={id} editTemp={editTemp} disabled={disabled}/>
            <SchoolDateOfStudy id={id} editTemp={editTemp} disabled={disabled}/>
        </div>
    )
}



function SchoolName({disabled, editTemp, id}){
    return (
        <>
            <div className='field'>
                <label htmlFor={"schoolName" + id}>School Name</label>
                <input onChange={editTemp} id={'schoolName'+ id}  disabled={disabled}/>
            </div>
        </>
    )
}

function SchoolAreaOfStudy({disabled, editTemp, id}){
    return (
        <>
            <div className='field' >
                <label htmlFor={"schoolAreaOfStudy" + id}>Area Of Study</label>
                <input onChange={editTemp} id={'schoolAreaOfStudy' + id} disabled={disabled}/>
            </div>
        </>
    )
}

function SchoolDateOfStudy({disabled, editTemp, id}){
    return (
        <div className="form">
            <div className='field'>
                <label htmlFor={"schoolDateOfStudy" + id}>Date Of Study</label>
                <input onChange={editTemp} id={'schoolDateOfStudy' + id} disabled={disabled}/>

            </div>
               
               
               
        </div>
    )
}


function EducationForm({name, editing, handleEdit, EditLayout, editTemp, counts, setCounts}){

    function addEducation(){
        setCounts({...counts, education: counts.education + 1})
    }

    function removeEducation(){
        if(counts.education === 0) return;

        setCounts({...counts, education: counts.education - 1})
    }
    return (
        <div className="form">
            <h1 className="form-title" data-form={name}>Education</h1>
            <div className='extra'>
                {editing != name && <EditButton name={name} handleEdit={handleEdit}/>}
                {editing==name && <EditLayout />}

            </div>     
            <div className="section">

                {Array(counts.education).fill(null).map((val, index) => (
                    <School key={index} id={index} editTemp={editTemp} disabled={name != editing}/>
                ))}
            </div>

            <AddButton onClick={addEducation}/>
            <RemoveButton onClick={removeEducation}/>
        </div>
    )
}




export default EducationForm
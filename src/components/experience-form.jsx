import AddButton from "./shared/add"
import EditButton from "./shared/edit"

function Company({disabled, editTemp, id}){
    return (
       <div className='company section'>
            <CompanyName id={id} editTemp={editTemp} disabled={disabled}/>
            <CompanyPosition id={id} editTemp={editTemp} disabled={disabled}/>
            <CompanyTitle id={id} editTemp={editTemp} disabled={disabled}/>
            <CompanyResponsibilities id={id} editTemp={editTemp} disabled={disabled}/>
            <CompanyDate id={id} editTemp={editTemp} disabled={disabled}/>
       </div>
    )
}


function CompanyName({disabled, editTemp, id}){
    return (
        <>
            <div className='field'>
                <label htmlFor={'companyName'+id}>Company Name</label>
                <input onChange={editTemp} id={'companyName' + id} disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyPosition({disabled, editTemp, id}){
    return (
        <>
            <div className='field'>
                <label htmlFor={'companyPosition'+id}>Company Position</label>
                <input onChange={editTemp} id={'companyPosition'+id} disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyTitle({disabled, editTemp, id}){
    return (
        <>
            <div className='field'>
                <label htmlFor={'companyTitle'+id}>Company Title</label>
                <input onChange={editTemp} id={'companyTitle'+id} disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyResponsibilities({disabled, editTemp, id}){
    return (
        <>
            <div className='field'>
                <label htmlFor={'companyResponsibilties'+id}>Company Responsiblities</label>
                <textarea onChange={editTemp} id={'companyResponsibilties'+id} disabled={disabled} />
            </div>
        </>
    )
}
function CompanyDate({disabled, editTemp, id}){
    return (
        <>
            <div className='field'>
                <label htmlFor={'companyDate'+id}>Company Date</label>
                <input onChange={editTemp} id={'companyDate' + id} disabled={disabled}/>
            </div>
        </>
    )
}

function ExperienceForm({name, editing, handleEdit, EditLayout, editTemp, counts, setCounts}){
    function addExperience(){
        setCounts({...counts, experience: counts.experience + 1})
    }

    return (
        <div className="form">
            
            <h1 className="form-title" data-form={name}>Experience</h1>
            <div className='extra'>
                {editing != name && <EditButton name={name} handleEdit={handleEdit}/>}
                {editing==name && <EditLayout />}
            </div>             
             <div className="section">

                {Array(counts.experience).fill(null).map((val, index) => (
                    <Company key={index} id={index} editTemp={editTemp} disabled={name != editing}/>
                ))}

            </div>

            
            <AddButton onClick={addExperience}/>
        </div>
    )
}

export default ExperienceForm
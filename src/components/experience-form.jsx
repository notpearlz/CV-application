import EditButton from "./shared/edit"

function Company({disabled, editTemp}){
    return (
       <div className='company section'>
            <CompanyName editTemp={editTemp} disabled={disabled}/>
            <CompanyPosition editTemp={editTemp} disabled={disabled}/>
            <CompanyTitle editTemp={editTemp} disabled={disabled}/>
            <CompanyResponsibilities editTemp={editTemp} disabled={disabled}/>
            <CompanyDate editTemp={editTemp} disabled={disabled}/>
       </div>
    )
}


function CompanyName({disabled, editTemp}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyName'>Company Name</label>
                <input onChange={editTemp} id='companyName' disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyPosition({disabled, editTemp}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyPosition'>Company Position</label>
                <input onChange={editTemp} id='companyPosition' disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyTitle({disabled, editTemp}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyTitle'>Company Title</label>
                <input onChange={editTemp} id='companyTitle' disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyResponsibilities({disabled, editTemp}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyResponsibilties'>Company Responsiblities</label>
                <input onChange={editTemp} id='companyResponsibilties' disabled={disabled}/>
            </div>
        </>
    )
}
function CompanyDate({disabled, editTemp}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyDate'>Company Date</label>
                <input onChange={editTemp} id='companyDate' disabled={disabled}/>
            </div>
        </>
    )
}

function ExperienceForm({name, editing, handleEdit, EditLayout, editTemp}){
    return (
        <div className="form">
            
            <h1 className="form-title" data-form={name}>Experience</h1>
            <div className='extra'>
                {editing != name && <EditButton name={name} handleEdit={handleEdit}/>}
                {editing==name && <EditLayout />}
            </div>             
             <div className="section">
                <Company editTemp={editTemp} disabled={name!=editing}/>



            </div>

            
               
        </div>
    )
}

export default ExperienceForm
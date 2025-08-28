import EditButton from "./shared/edit"

function Company({disabled}){
    return (
       <div className='company section'>
            <CompanyName disabled={disabled}/>
            <CompanyPosition disabled={disabled}/>
            <CompanyTitle disabled={disabled}/>
            <CompanyResponsibilities disabled={disabled}/>
            <CompanyDate disabled={disabled}/>
       </div>
    )
}


function CompanyName({disabled}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyName'>Company Name</label>
                <input id='companyName' disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyPosition({disabled}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyPosition'>Company Position</label>
                <input id='companyPosition' disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyTitle({disabled}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyTitle'>Company Title</label>
                <input id='companyTitle' disabled={disabled}/>
            </div>
        </>
    )
}

function CompanyResponsibilities({disabled}){
    return (
        <>
            <div className='field'>
                <label htmlFor='company-Responsibilties'>Company Responsiblities</label>
                <input id='company-Responsibilties' disabled={disabled}/>
            </div>
        </>
    )
}
function CompanyDate({disabled}){
    return (
        <>
            <div className='field'>
                <label htmlFor='companyDate'>Company Date</label>
                <input id='companyDate' disabled={disabled}/>
            </div>
        </>
    )
}

function ExperienceForm({name, editing, handleEdit, EditLayout}){
    return (
        <div className="form">
            
            <h1 className="form-title" data-form={name}>Experience</h1>
            <div className='extra'>
                {editing != name && <EditButton name={name} handleEdit={handleEdit}/>}
                {editing==name && <EditLayout />}
            </div>             
             <div className="section">
                <Company disabled={name!=editing}/>



            </div>

            
               
        </div>
    )
}

export default ExperienceForm
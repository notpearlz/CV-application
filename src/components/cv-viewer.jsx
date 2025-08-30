import '../styles/cv-viewer.css'

function CVViewer(props){
    const fields = props.fields
    const counts = props.counts

    function formatResponsibilities(index){

    var text = fields['companyResponsibilties' + index]  
    var lines; 
    if(text){
        lines = text.split("\n");
    }

    
        return (
            <>
                {lines ? lines.map((x, index)=>(
                    <li className='companyResponsibility' key={index}>{x}</li>
                )) : <li className='companyResponsibility'>Company Responsibilities</li>}


            
            </>
        )
    }

    return (
        <>
            <div className='cv-viewer'>
                <div  className='general-viewer'>
                    <h2>{fields.name ? fields.name : "Name"}</h2>

                    <div>
                        <p>{fields.email ? fields.email : "Email"}</p>
                        <p>{fields.phone ? fields.phone : "Phone"}</p>
                    </div>
                    <hr />

                </div>

                <h3>Education</h3>
                <hr/>
                { counts.education > 0 &&
                <ul className='school-viewer'>
                    <li><b>Education</b></li>
                    <li><b>Area of Study</b></li>
                    <li><b>Graduation Month, Year</b></li>

                </ul>
                }
                {Array(counts.education).fill(null).map((val, index) => (
                    <ul className='school-viewer'key={index}>
                        <li key={"fields.schoolName"+index}> {fields['schoolName' + index] ? fields['schoolName' + index]  : "School Name"}</li>
                        <li key={"fields.schoolAreaOfStudy"+index}>{fields['schoolAreaOfStudy' + index] ? fields['schoolAreaOfStudy' + index] : "Area Of Study"}</li>
                        <li key={"fields.schoolDateOfStudy"+index}>{fields['schoolDateOfStudy' + index] ? fields['schoolDateOfStudy' + index] : "Date Of Study"}</li>
                    </ul>
                ))}

                <h3>Experience</h3>
                <hr/>


                { counts.experience > 0 &&
                <ul className='experience-viewer companyintro'>
                    <div className='companyintro'>
                        <li className='keyField'><b>Company Name</b></li>
                        <p>-</p>
                        <li><b>Company Title/Position</b></li>
                    </div>

                    <li><b>Date</b></li>

                </ul>
                }
                {Array(counts.experience).fill(null).map((val, index) => (
                    <ul  className='experience-viewer' key={index}>
                        <div className='companyintro'>
                            <div className='comapnyname'>
                                <li className='keyField' key={fields['companyName' + index]}> {fields['companyName' + index] ? fields['companyName' + index] : "Company Name"}</li>
                                <p>-</p>
                                <li key={"fields.companyTitle"+index}>{fields['companyTitle' + index] ? fields['companyTitle' + index] : "Company Title"}</li>
                                <li key={"fields.companyPosition"+index}>{fields['companyPosition' + index] ? fields['companyPosition' + index] : "Company Position"}</li>
                            </div>
                            <li key={"fields.companyDate"+index}>{fields['companyDate' + index] ? fields['companyDate' + index] : "Company Date"}</li>

                        </div>

                        {formatResponsibilities(index)}

                    </ul>
                ))}
        


            </div>
        </>
    )
}

export default CVViewer
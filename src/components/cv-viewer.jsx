import '../styles/cv-viewer.css'

function CVViewer(props){
    const fields = props.fields
    const counts = props.counts

    return (
        <div className='CV-Viewer'>
            <div>
                <h2>{fields.name ? fields.name : "Name"}</h2>
                <h2>{fields.email ? fields.name : "Email"}</h2>
                <h2>{fields.phone ? fields.name : "Phone"}</h2>
            </div>


            {Array(counts.education).fill(null).map((val, index) => (
                <div key={index}>
                    <h3 key={"fields.schoolName"+index}> {fields['schoolName' + index]}</h3>
                    <h3 key={"fields.schoolAreaOfStudy"+index}>{fields['schoolAreaOfStudy' + index]}</h3>
                    <h3 key={"fields.schoolDateOfStudy"+index}>{fields['schoolDateOfStudy' + index]}</h3>
                </div>
            ))}


            {Array(counts.experience).fill(null).map((val, index) => (
                <div key={index}>
                    <h3 key={"fields.companyName"+index}> {fields['companyName' + index]}</h3>
                    <h3 key={"fields.companyPosition"+index}>{fields['companyPosition' + index]}</h3>
                    <h3 key={"fields.companyTitle"+index}>{fields['companyTitle' + index]}</h3>
                    <h3 key={"fields.companyResponsibilties"+index}>{fields['companyResponsibilties' + index]}</h3>
                    <h3 key={"fields.companyDate"+index}>{fields['companyDate' + index]}</h3>

                </div>
            ))}
       


        </div>
    )
}

export default CVViewer
import '../styles/cv-viewer.css'

function CVViewer(props){
    const fields = props.fields

    return (
        <>
            <div>
                <h2>{fields.name}</h2>
                <h2>{fields.email}</h2>
                <h2>{fields.phone}</h2>
            </div>

            <div>
                <h3>{fields.schoolName}</h3>
                <h3>{fields.schoolAreaOfStudy}</h3>
                <h3>{fields.schoolDateOfStudy}</h3>
            </div>

            <div>
                <h3>{fields.companyName}</h3>
                <h3>{fields.companyPosition}</h3>
                <h3>{fields.companyTitle}</h3>
                <h3>{fields.companyResponsibilties}</h3>
                <h3>{fields.companyDate}</h3>
            </div>


        </>
    )
}

export default CVViewer
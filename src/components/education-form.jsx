import EditButton from './shared/submit'
import SubmitButton from './shared/edit'

function School(){
    return (
        <div className='school'>
            <SchoolName/>
            <SchoolAreaOfStudy/>
            <SchoolDateOfStudy/>
        </div>
    )
}



function SchoolName(){
    return (
        <>
            <div>
                <label htmlFor="schoolName">School Name</label>
                <input id='schoolName'/>
            </div>
        </>
    )
}

function SchoolAreaOfStudy(){
    return (
        <>
            <div>
                <label htmlFor="schoolAreaOfStudy">Area Of Study</label>
                <input id='schoolAreaOfStudy'/>
            </div>
        </>
    )
}

function SchoolDateOfStudy(){
    return (
        <>
            <div>
                <label htmlFor="schoolDateOfStudy">Date Of Study</label>
                <input id='schoolDateOfStudy'/>
            </div>
        </>
    )
}


function EducationForm(){
    return (
        <>
            <h1>Education</h1>
            <div>
                <School />
            </div>
        </>
    )
}




export default EducationForm
import EditButton from './shared/submit'
import SubmitButton from './shared/edit'

function Company(){
    return (
       <div className='company'>
            <CompanyName />
            <CompanyPosition />
            <CompanyTitle />
            <CompanyResponsibilities />
            <CompanyDate />
       </div>
    )
}


function CompanyName(){
    return (
        <>
            <div>
                <label htmlFor='companyName'>Company Name</label>
                <input id='companyName' />
            </div>
        </>
    )
}

function CompanyPosition(){
    return (
        <>
            <div>
                <label htmlFor='companyPosition'>Company Position</label>
                <input id='companyPosition' />
            </div>
        </>
    )
}

function CompanyTitle(){
    return (
        <>
            <div>
                <label htmlFor='companyTitle'>Company Title</label>
                <input id='companyTitle' />
            </div>
        </>
    )
}

function CompanyResponsibilities(){
    return (
        <>
            <div>
                <label htmlFor='company-Responsibilties'>Company Responsiblities</label>
                <input id='company-Responsibilties' />
            </div>
        </>
    )
}
function CompanyDate(){
    return (
        <>
            <div>
                <label htmlFor='companyDate'>Company Date</label>
                <input id='companyDate' />
            </div>
        </>
    )
}

function ExperienceForm(){
    return (
        <>
            <h1>Experience</h1>
            <div>
                <Company />
            </div>
        </>
    )
}

export default ExperienceForm
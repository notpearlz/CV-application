function Name(){
    return (
        <div>
            <label htmlFor='name'>Name</label>
            <input id='name'/>
        </div>
    )
}

function Email(){
    return (
        <div>
            <label htmlFor='email'>Email</label>
            <input id='email'/>
        </div>
    )
}

function Phone(){
    return (
        <div>
            <label htmlFor='phone'>Phone</label>
            <input id='phone'/>
        </div>
    )
}

function GeneralForm(){
    return (<>
        <Name/>
        <Email/>
        <Phone/>

    </>)
   
}

export default GeneralForm
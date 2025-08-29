import { useState } from 'react'

import CVViewer from './cv-viewer.jsx'
import GeneralForm from './general-form.jsx'
import EducationForm from './education-form.jsx'
import ExperienceForm from './experience-form.jsx' 

import EditProvider from "./edit-provider"


import '../styles/cv-app.css';
function CVApplication(){
    const [fields, setFields] = useState({});
    const [tempfields, setTempFields] = useState({...fields})
    const {editing, handleEdit, EditLayout} = EditProvider();

    function editTemp(){
        const form = document.getElementById("CV")

        let newFields = {}
        for (let element of form.elements) {
            newFields = {...newFields, [element.id]: element.value}
        }

        setTempFields(newFields);
    }

    function submitEdits(e){
        e.preventDefault();
        const form = e.target

        let newFields = {}
        for (let element of form.elements) {
            newFields = {...newFields, [element.id]: element.value}
        }

        setFields(newFields)
        setTempFields(newFields);

        handleEdit()

    }

    function resetEdits(e){
        e.preventDefault();
        const form = e.target

        for (let element of form.elements) {
            const val = fields[element.id]

            if(!val){
                element.value = ''
            } else {
                element.value = fields[element.id]
            }
        }

        setTempFields({...fields});

        handleEdit()
    }

    return (

        <>
            <form id='CV' onSubmit={submitEdits}  onReset={resetEdits}>
                <GeneralForm name="GeneralForm" editing={editing} handleEdit={handleEdit} EditLayout={EditLayout} editTemp={editTemp}/>
                <EducationForm name="EducationForm" editing={editing} handleEdit={handleEdit} EditLayout={EditLayout} editTemp={editTemp}/>
                <ExperienceForm name="ExperienceForm" editing={editing} handleEdit={handleEdit} EditLayout={EditLayout} editTemp={editTemp}/>
            </form>

            <div>
                <CVViewer fields={tempfields}/>
            </div>
        </>
    )
}

export default CVApplication
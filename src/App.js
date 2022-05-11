import './styles/App.css';
import './styles/generatedform.css';
import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Work from "./components/Work";
import Workexp from "./components/Workexp";

function App () {

    const [fields, setFields] = useState({
        name: '',
        email: '',
        phone: '',
        school: '',
        studyField: '',
        gradYear: '',
        company: '',
        position: '',
        jobScope1: '',
        jobScope2: '',
        jobScope3: '',
        yearStart: '',
        yearEnd: '',
        company2: '',
        position2: '',
        jobScope12: '',
        jobScope22: '',
        jobScope32: '',
        yearStart2: '',
        yearEnd2: ''
        })
  

  function onSubmitTask(e) {
    e.preventDefault();
    const formContainer = document.querySelector('.form');
    formContainer.hidden = true;
    const editButton = document.querySelector('.edit-button');
    editButton.hidden = false;
    const generatedForm = document.querySelector('.generated-form');
    generatedForm.hidden = false;
  }

  function editButtonTask() {
    const formContainer = document.querySelector('.form');
    formContainer.hidden = false;
    const editButton = document.querySelector('.edit-button');
    editButton.hidden = true;
    const generatedForm = document.querySelector('.generated-form');
    generatedForm.hidden = true;
  }

  function handleChange(e) {
    setFields(fields => ({
      ...fields,
      [e.target.name]: e.target.value
    })
    );
  }

  return (
    <div className='form-container'>
      <h1 className='app-title'>CV Generator</h1>
      <form className= 'form' onSubmit={onSubmitTask}>
      <div className="info-section">
                <h3>General Information</h3>
                <label>
                Name
                <input name = 'name' type = 'text' value = {fields.name} onChange = {handleChange} required/>
                </label>
                <label>
                Email
                <input name = 'email' type = 'email' value = {fields.email} onChange = {handleChange} required/>
                </label>
                <label>
                Phone
                <input name = 'phone' type= 'tel' value = {fields.phone} onChange = {handleChange} />
                </label>
            </div>
      <div className='education-section'>
      <h3>Education</h3>
                <label>
                Name of School
                <input name = 'school' type = 'text' value = {fields.school} onChange = {handleChange} required/>
                </label>
                <label>
                Field of Study
                <input name = 'studyField' type = 'text' value = {fields.studyField} onChange = {handleChange} />
                </label>
                <label>
                Year of Graduation
                <input name = 'gradYear' type= 'tel' value = {fields.gradYear} onChange = {handleChange} required/>
                </label>
      </div>
      <div className='work-section'>
      <h3>Work Experience</h3>
      <Workexp info= {fields} handleChange = {handleChange} />
      </div>
      <button className='submit-button'>Submit</button>
      </form>
      <button className='edit-button' hidden = {true}  onClick={editButtonTask}>Edit</button>
      <div className='generated-form' hidden = {true}>
      <GeneralInfo info = {fields} />
      <Education info = {fields} />
      <Work info = {fields} />
      </div>
    </div>
  );
}

export default App;

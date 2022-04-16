import './styles/App.css';
import './styles/generatedform.css';
import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.onSubmitTask.bind(this);
    this.editButtonTask = this.editButtonTask.bind(this);

    this.state = {
        name: '',
        email: '',
        phone: '',
        school: '',
        studyField: '',
        gradYear: '',
        company: '',
        position: '',
        jobScope: '',
        yearStart: '',
        yearEnd: '',
    }
  }

  onSubmitTask(e) {
    e.preventDefault();
    const formContainer = document.querySelector('.form');
    formContainer.hidden = true;
    const editButton = document.querySelector('.edit-button');
    editButton.hidden = false;
    const generatedForm = document.querySelector('.generated-form');
    generatedForm.hidden = false;
  }

  editButtonTask() {
    const formContainer = document.querySelector('.form');
    formContainer.hidden = false;
    const editButton = document.querySelector('.edit-button');
    editButton.hidden = true;
    const generatedForm = document.querySelector('.generated-form');
    generatedForm.hidden = true;
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
  return (
    <div className='form-container'>
      <form className= 'form' onSubmit={this.onSubmitTask}>
      <div className="info-section">
                <h3>General Information</h3>
                <label>
                Name
                <input name = 'name' type = 'text' value = {this.state.name} onChange = {this.handleChange} required/>
                </label>
                <label>
                Email
                <input name = 'email' type = 'email' value = {this.state.email} onChange = {this.handleChange} required/>
                </label>
                <label>
                Phone
                <input name = 'phone' type= 'tel' value = {this.state.phone} onChange = {this.handleChange} />
                </label>
            </div>
      <div className='education-section'>
      <h3>Education</h3>
                <label>
                Name of School
                <input name = 'school' type = 'text' value = {this.state.school} onChange = {this.handleChange} required/>
                </label>
                <label>
                Field of Study
                <input name = 'studyField' type = 'text' value = {this.state.studyField} onChange = {this.handleChange} />
                </label>
                <label>
                Year of Graduation
                <input name = 'gradYear' type= 'tel' value = {this.state.gradYear} onChange = {this.handleChange} required/>
                </label>
      </div>
      <div className='work-section'>
      <h3>Work Experience</h3>
                <label>
                Name of Company
                <input name = 'company' type = 'text' value = {this.state.company} onChange = {this.handleChange} required/>
                </label>
                <label>
                Position
                <input name = 'position' type = 'text' value = {this.state.position} onChange = {this.handleChange} required/>
                </label>
                <label>
                Job Scope
                <textarea name = 'jobScope' value = {this.state.jobScope} onChange = {this.handleChange} required/>
                </label>
                <label>
                Year you started working here
                <input name = 'yearStart' type= 'tel' value = {this.state.yearStart} onChange = {this.handleChange} required/>
                </label>
                <label>
                Year you stopped working here
                <input name = 'yearEnd' type= 'tel' value = {this.state.yearEnd} onChange = {this.handleChange} />
                </label>
      </div>
        <button className='submit-button'>Submit</button>
      </form>
      <button className='edit-button' hidden = {true}  onClick={this.editButtonTask}>Edit</button>
      <div className='generated-form' hidden = {true}>
      <GeneralInfo info = {this.state} />
      <Education info = {this.state} />
      <Work info = {this.state} />
      </div>
    </div>
  );
  }
}

export default App;

import './styles/App.css';
import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

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

  handleOnSubmit(e) {
    e.preventDefault();
    const formContainer = document.querySelector('.form');
    formContainer.hidden = true;
    const editButton = document.querySelector('.edit-button');
    editButton.hidden = false;
    const generatedForm = document.querySelector('.generated-form');
    generatedForm.hidden = false;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
  return (
    <div className='form-container'>
      <form className= 'form' onSubmit={this.handleOnSubmit}>
      <div className="info-section">
                <h3>General Information</h3>
                <label>
                Name
                <input name = 'name' type = 'text' value = {this.state.name} onChange = {this.handleChange} />
                </label>
                <label>
                Email
                <input name = 'email' type = 'email' value = {this.state.email} onChange = {this.handleChange} />
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
                <input name = 'school' type = 'text' value = {this.state.school} onChange = {this.handleChange} />
                </label>
                <label>
                Field of Study
                <input name = 'studyField' type = 'text' value = {this.state.studyField} onChange = {this.handleChange} />
                </label>
                <label>
                Year of Graduation
                <input name = 'gradYear' type= 'tel' value = {this.state.gradYear} onChange = {this.handleChange} />
                </label>
      </div>
      <div className='work-section'>
      <h3>Work Experience</h3>
                <label>
                Name of Company
                <input name = 'company' type = 'text' value = {this.state.school} onChange = {this.handleChange} />
                </label>
                <label>
                Position
                <input name = 'studyField' type = 'text' value = {this.state.position} onChange = {this.handleChange} />
                </label>
                <label>
                Job Scope
                <textarea name = 'jobScope' value = {this.state.jobScope} onChange = {this.handleChange} />
                </label>
                <label>
                Year you started working here
                <input name = 'gradYear' type= 'tel' value = {this.state.yearStart} onChange = {this.handleChange} />
                </label>
                <label>
                Year you stopped working here
                <input name = 'gradYear' type= 'tel' value = {this.state.yearEnd} onChange = {this.handleChange} />
                </label>
      </div>
        <button className='submit-button'>Submit</button>
      </form>
      <button className='edit-button' hidden = {true}>Edit</button>
      <div className='generated-form' hidden = {true}>
      <GeneralInfo info = {this.state} />
      </div>
    </div>
  );
  }
}

export default App;

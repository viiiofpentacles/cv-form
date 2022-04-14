import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        name: '',
        email: '',
        phone: ''
      },
      education: {
        school: '',
        studyField: '',
        gradYear: ''
      },
      work: {
        company: '',
        position: '',
        jobScope: '',
        dateStart: '',
        dateEnd: ''
      }
    }
  }

  render(){
  return (
    <div className='form-container'>
      <form onSubmit={handleOnSubmit}>
        <button>Submit</button>
      </form>
    </div>
  );
  }
}

export default App;

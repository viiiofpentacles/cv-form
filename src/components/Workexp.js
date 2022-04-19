import React, { Component } from "react";

class Workexp extends Component {
    constructor() {
        super();

        this.addMoreButtonTask = this.addMoreButtonTask.bind(this);
    }
    
    addMoreButtonTask (e) {
        e.preventDefault();
        const secondJob= document.querySelector('.company2');
        if (secondJob.hidden === true) {
            secondJob.hidden = false;
        } else {
            secondJob.hidden = true;
        }
    }

render() {
    return(
        <div>
      <div className="company1">
                <label>
                Name of Company
                <input name = 'company' type = 'text' value = {this.props.info.company} onChange = {this.props.handleChange} required/>
                </label>
                <label>
                Position
                <input name = 'position' type = 'text' value = {this.props.info.position} onChange = {this.props.handleChange} required/>
                </label>
                <label>
                Job Description 1
                <textarea name = 'jobScope1' value = {this.props.info.jobScope1} onChange = {this.props.handleChange} required/>
                </label>
                <label>
                Job Description 2
                <textarea name = 'jobScope2' value = {this.props.info.jobScope2} onChange = {this.props.handleChange} required/>
                </label>
                <label>
                Job Description 3
                <textarea name = 'jobScope3' value = {this.props.info.jobScope3} onChange = {this.props.handleChange} required/>
                </label>
                <label>
                Year you started working here
                <input name = 'yearStart' type= 'tel' value = {this.props.info.yearStart} onChange = {this.props.handleChange} required/>
                </label>
                <label>
                Year you stopped working here
                <input name = 'yearEnd' type= 'tel' value = {this.props.info.yearEnd} onChange = {this.props.handleChange} />
                </label>
        </div>
        <button className="add-more" onClick={this.addMoreButtonTask}>Add More Work Experience</button>
        <div className="company2" hidden = {true}>
                <label>
                Name of Second Company
                <input name = 'company2' type = 'text' value = {this.props.info.company2} onChange = {this.props.handleChange} />
                </label>
                <label>
                Position
                <input name = 'position2' type = 'text' value = {this.props.info.position2} onChange = {this.props.handleChange} />
                </label>
                <label>
                Job Description 1
                <textarea name = 'jobScope12' value = {this.props.info.jobScope12} onChange = {this.props.handleChange} />
                </label>
                <label>
                Job Description 2
                <textarea name = 'jobScope22' value = {this.props.info.jobScope22} onChange = {this.props.handleChange} />
                </label>
                <label>
                Job Description 3
                <textarea name = 'jobScope32' value = {this.props.info.jobScope32} onChange = {this.props.handleChange} />
                </label>
                <label>
                Year you started working here
                <input name = 'yearStart2' type= 'tel' value = {this.props.info.yearStart2} onChange = {this.props.handleChange} />
                </label>
                <label>
                Year you stopped working here
                <input name = 'yearEnd2' type= 'tel' value = {this.props.info.yearEnd2} onChange = {this.props.handleChange} />
                </label>
        </div>
        </div>
    )}
}

export default Workexp;
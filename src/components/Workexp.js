import React from "react";
function Workexp (props) {

    function addMoreButtonTask (e) {
        e.preventDefault();
        const secondJob= document.querySelector('.company2');
        if (secondJob.hidden === true) {
            secondJob.hidden = false;
        } else {
            secondJob.hidden = true;
        }
    }

    return(
        <div>
      <div className="company1">
                <label>
                Name of Company
                <input name = 'company' type = 'text' value = {props.info.company} onChange = {props.handleChange} required/>
                </label>
                <label>
                Position
                <input name = 'position' type = 'text' value = {props.info.position} onChange = {props.handleChange} required/>
                </label>
                <label>
                Job Description 1
                <textarea name = 'jobScope1' value = {props.info.jobScope1} onChange = {props.handleChange} required/>
                </label>
                <label>
                Job Description 2
                <textarea name = 'jobScope2' value = {props.info.jobScope2} onChange = {props.handleChange} required/>
                </label>
                <label>
                Job Description 3
                <textarea name = 'jobScope3' value = {props.info.jobScope3} onChange = {props.handleChange} required/>
                </label>
                <label>
                Year you started working here
                <input name = 'yearStart' type= 'tel' value = {props.info.yearStart} onChange = {props.handleChange} required/>
                </label>
                <label>
                Year you stopped working here
                <input name = 'yearEnd' type= 'tel' value = {props.info.yearEnd} onChange = {props.handleChange} />
                </label>
        </div>
        <button className="add-more" onClick={addMoreButtonTask}>Add More Work Experience</button>
        <div className="company2" hidden = {true}>
                <label>
                Name of Second Company
                <input name = 'company2' type = 'text' value = {props.info.company2} onChange = {props.handleChange} />
                </label>
                <label>
                Position
                <input name = 'position2' type = 'text' value = {props.info.position2} onChange = {props.handleChange} />
                </label>
                <label>
                Job Description 1
                <textarea name = 'jobScope12' value = {props.info.jobScope12} onChange = {props.handleChange} />
                </label>
                <label>
                Job Description 2
                <textarea name = 'jobScope22' value = {props.info.jobScope22} onChange = {props.handleChange} />
                </label>
                <label>
                Job Description 3
                <textarea name = 'jobScope32' value = {props.info.jobScope32} onChange = {props.handleChange} />
                </label>
                <label>
                Year you started working here
                <input name = 'yearStart2' type= 'tel' value = {props.info.yearStart2} onChange = {props.handleChange} />
                </label>
                <label>
                Year you stopped working here
                <input name = 'yearEnd2' type= 'tel' value = {props.info.yearEnd2} onChange = {props.handleChange} />
                </label>
        </div>
        </div>
    )
}

export default Workexp;
import React from "react";
import "../styles/education.css";

const Education = (props) => {
    const { info } = props;

        return (
           <div className="generated-edn-section" >
               <h3 className="generated-edn">Education</h3>
               <div className="school-year">
               <div className="generated-school">{info.school}</div>
               <div>{info.gradYear}</div>
               </div>
               <div className="generated-field">{info.studyField}</div>
           </div>
        );

}

export default Education;
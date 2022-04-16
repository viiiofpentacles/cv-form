import React from "react";
import "../styles/work.css";

const Work = (props) => {
    const { info } = props;

        return (
           <div className="generated-work-section" >
               <h3 className="generated-edn">Work Experience</h3>
               <div className="work-years">
               <div className="generated-company">{info.company}</div>
               <div>{info.yearStart} - {info.yearEnd}</div>
               </div>
               <div className="generated-pos">{info.position}</div>
               <ul>
                   <li>{info.jobScope}</li>
                </ul>
           </div>
        );

}

export default Work;
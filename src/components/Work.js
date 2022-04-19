import React from "react";

const Work = (props) => {
    const { info } = props;

        return (
           <div className="generated-work-section" >
               <h3 className="generated-work">Work Experience</h3>
               <div className="company1-details">
               <div className="work-years">
               <div className="generated-company">{info.company}</div>
               <div>{info.yearStart} - {info.yearEnd}</div>
               </div>
               <div className="generated-pos">{info.position}</div>
               <ul>
                   <li>{info.jobScope1}</li>
                   <li>{info.jobScope2}</li>
                   <li>{info.jobScope3}</li>
                </ul>
                </div>
                {info.company2 !== '' &&
                <div className="company2-details">
               <div className="work-years">
               <div className="generated-company2">{info.company2}</div>
               <div>{info.yearStart2} - {info.yearEnd2}</div>
               </div>
               <div className="generated-pos">{info.position2}</div>
               <ul>
                   <li>{info.jobScope12}</li>
                   <li>{info.jobScope22}</li>
                   <li>{info.jobScope32}</li>
                </ul>
                </div>
                }
           </div>
        );

}

export default Work;
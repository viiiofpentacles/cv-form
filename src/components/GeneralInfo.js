import React from "react";
import "../styles/general-info-styles.css";

const GeneralInfo = (props) => {
    const { info } = props;

        return (
           <div className="generated-info-section" >
               <h1 className="generated-name">{info.name}</h1>
               <div className="generated-contact">{info.email} | {info.phone}</div>
           </div>
        );

}

export default GeneralInfo;

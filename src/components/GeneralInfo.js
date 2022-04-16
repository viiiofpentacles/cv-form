import React from "react";

const GeneralInfo = (props) => {
    const { info } = props;

        return (
           <div className="generated-info-section" >
               <div className="generated-name">{info.name}</div>
           </div>
        );

}

export default GeneralInfo;

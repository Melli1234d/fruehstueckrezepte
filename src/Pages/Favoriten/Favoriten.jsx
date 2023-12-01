import React from "react";
import corner from "../../assets/corner.svg";

const Favoriten = (props) => {
    return (
        <div>
             <div className="right-corner"> 
                <img className="cornor-img" src={corner} alt="Icon" height={80} width={120} />
            </div>
        
        </div>
    );
}

export default Favoriten;
import React from "react";
import corner from "../../assets/corner.svg";
import '../../components/UI/scss/pages/registrieren.scss';

const Registrieren = (props) => {
    return (
        <div>
           <div className="right-corner"> 
                <img className="cornor-img" src={corner} alt="Icon" height={80} width={120} />
            </div>

        </div>
    );
}

export default Registrieren;
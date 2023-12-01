import React from "react";
import corner from "../../assets/corner.png";
import '../../components/UI/scss/pages/registrieren.scss';

const Registrieren = (props) => {
    return (
        <div>
            <div className="right-corner">
            <img className="content-center eyecatcher" src={corner} alt="Icon" height={80} width={80} />
            </div>

        </div>
    );
}

export default Registrieren;
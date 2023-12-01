import React from "react";
import corner from "../../assets/corner.svg";
import CategoryFilter from "../../components/CategoryFilter";


const Rezepte = (props) => {
    return (
        <div>
             <div className="right-corner"> 
                <img className="cornor-img" src={corner} alt="Icon" height={80} width={120} />
            </div>
            <CategoryFilter/>
        </div>
    );
}

export default Rezepte;
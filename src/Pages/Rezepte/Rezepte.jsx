import React from "react";
import CategoryFilter from "../../components/CategoryFilter";

const Rezepte = (props) => {
    return (
        <div>
            <div className="right-corner">
            <img className="content-center eyecatcher" src={corner} alt="Icon" height={80} width={80} />
            </div>
            <CategoryFilter/>

        </div>
    );
}

export default Rezepte;
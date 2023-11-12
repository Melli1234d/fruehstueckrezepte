import React from 'react';

import './../../../css/Roundbutton/Roundbutton.css';
import './../../../scss/variables.scss';

const RoundButton = (props) => {
    const classes = 'round-button ' + props.className;

    return (
    <div className={classes}>
        {props.children}
    </div>
    );
};

export default RoundButton;
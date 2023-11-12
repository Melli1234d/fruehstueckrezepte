import React from 'react';

import './../../../css/SecondaryButton/SecondaryButton.css';

const SecondaryButton = (props) => {
    const classes = 'secondary-button ' + props.className;

    return (
    <div className={classes}>
        {props.children}
    </div>
    );
};

export default SecondaryButton;
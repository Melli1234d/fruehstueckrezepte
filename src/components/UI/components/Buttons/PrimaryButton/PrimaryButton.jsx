import React from 'react';

import './../../../css/PrimaryButton/PrimaryButton.css';

const PrimaryButton = (props) => {
    const classes = 'primary-button ' + props.className;

    return (
    <div className={classes}>
        {props.children}
    </div>
    );
};

export default PrimaryButton;
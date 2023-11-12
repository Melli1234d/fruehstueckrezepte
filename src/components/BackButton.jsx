import React from 'react';

import './Card.css';

const BackButton = (props) => {
    const classes = 'backbutton ' + props.className;

    return (
    <div className={classes}>
        {props.children}
    </div>
    );
};

export default BackButton;
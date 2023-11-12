import React from 'react';

import '../../scss/components/SecondaryButton.scss';

const SecondaryButton = (props) => {
    const classes = 'secondary-button ' + props.className;

    return (
    <div className={classes}>
        {props.children}
    </div>
    );
};

export default SecondaryButton;
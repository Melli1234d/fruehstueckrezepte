import React from 'react';
import '../../scss/components/PrimaryButton.scss';

const PrimaryButton = (props) => {
    const classes = 'primary-button ' + props.className;

    return (
    <div className={classes}>
        {props.children}
    </div>
    );
};

export default PrimaryButton;
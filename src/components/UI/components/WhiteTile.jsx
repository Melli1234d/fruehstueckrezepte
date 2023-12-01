import React from 'react';
import '../scss/components/WhiteTile.scss';

const WhiteTile = (props) => {
    const classes = 'white-tile ' + props.className;

    return (
    <div className={classes}>
        {props.children}
    </div>
    );
};

export default WhiteTile;
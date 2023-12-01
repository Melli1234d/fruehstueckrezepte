import React from 'react';
import '../../scss/components/PrimaryButton.scss';

const PrimaryButton = ({ onClick, children }) => {
    return (
      <div className="primary-button" onClick={onClick}>
        {children}
      </div>
    );
  };
  
  export default PrimaryButton;
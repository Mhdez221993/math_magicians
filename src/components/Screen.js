/* eslint-disable  max-classes-per-file */
/* eslint-disable react/prop-types */
import React from 'react';

const Screen = props => {
  const {
    value,
  } = props;

  return (
    <div className="Display">
      <span className="Screen">{value}</span>
    </div>
  );
};

export default Screen;

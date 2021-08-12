/* eslint-disable react/prop-types */
import React from 'react';

const Screen = props => {
  const {
    value: {
      next,
      total,
    },
  } = props;

  return (
    <div className="Display">
      <span className="Screen">{next || total || '0'}</span>
    </div>
  );
};

export default Screen;

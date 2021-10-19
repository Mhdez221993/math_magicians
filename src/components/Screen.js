import PropTypes from 'prop-types';
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

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Screen;

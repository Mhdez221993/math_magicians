/* eslint-disable  max-classes-per-file */
/* eslint-disable react/prop-types */
import React from 'react';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      value,
    } = this.props;
    return (
      <div className="Display">
        <span className="Screen">{value}</span>
      </div>
    );
  }
}

export default Screen;

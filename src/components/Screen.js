/* eslint-disable react/prop-types */
import React from 'react';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      value: {
        next,
        total,
      },
    } = this.props;
    return (
      <div className="Display">
        <span className="Screen">{next || total || '0'}</span>
      </div>
    );
  }
}

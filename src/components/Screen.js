import React from 'react';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Display">
        <span className="Screen">0</span>
      </div>
    );
  }
}

export default Screen;

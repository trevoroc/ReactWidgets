import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <h1>Clock Widget</h1>
    );
  }
}

export default Clock;

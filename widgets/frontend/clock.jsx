import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.intervalCounter = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalCounter);
  }

  render() {
    const [hours, minutes, seconds] = [
      this.state.time.getHours(),
      this.state.time.getMinutes(),
      this.state.time.getSeconds()
    ];
    return (
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    );
  }
}

export default Clock;

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
      this.state.time.getHours().toString()
        .replace(/.*/, (str) => { return "00".slice(str.length) + str; }),
      this.state.time.getMinutes().toString()
        .replace(/.*/, (str) => { return "00".slice(str.length) + str; }),
      this.state.time.getSeconds().toString()
        .replace(/.*/, (str) => { return "00".slice(str.length) + str; })
    ];

    const date = this.state.time.toString().match(/.*\s\d{4}/)[0];

    return (
      <div className="clock">
        <div className="date">
          <div>Date</div>
          <div>{date}</div>
        </div>
        <div className="time">
          <div>Time</div>
          <div>{hours}:{minutes}:{seconds}</div>
        </div>
      </div>
    );
  }
}

export default Clock;

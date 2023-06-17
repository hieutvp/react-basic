import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), Infinity);
  }

  componentUnMount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <p>Time is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

export default Timer;

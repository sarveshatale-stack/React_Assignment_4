import React, { Component } from "react";
import "./DigitalClock.css";
class DigitalClock extends Component {
  constructor() {
    super();
    this.state = { time: new Date(), checked: false };
  }
  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  render() {
    const { time } = this.state;
    let date;
    if (this.state.checked) {
      date = <h2>{time.toLocaleDateString()}</h2>;
    } else {
      date = "";
    }
    // let date;
    // if (displaydate) {
    //   date = <h2>{time.toLocaleDateString()}</h2>
    // }
    // else
    // {
    //   date = ""
    // }
    return (
      <div>
        <div className="digitaldiv">
          <div className="digitalheaderdiv">
            <div>
              <img src="./images/image1.jpg" />
              Digital Clock
            </div>
          </div>
          <br />
          <div>
            <label className="switch">
              <input
                type="checkbox"
                onClick={this.handleChange}
                defaultChecked={this.state.checked}
              />
              <span class="slider round"></span>
            </label>
            <img src="./images/image2.jpg" />{" "}
          </div>
          {date}
          <h2>{time.toLocaleTimeString()}</h2>
        </div>
      </div>
    );
  }
}
export default DigitalClock;

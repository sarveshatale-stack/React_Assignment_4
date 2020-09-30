import React, { Component } from "react";
import KeyPad from "./KeyPad";
import Display from "./Display";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      displayValue: 0,
      prevVal: 0,
      signVal: ""
    };
  }

  handleKey = (val) => {
    let displayVal = "" + this.state.displayValue;
    displayVal += val;
    this.setState({ displayValue: displayVal });
  };

  handleCKey = () => {
    this.setState({ displayValue: 0 });
  };

  handleSignKey = (sign) => {
    this.setState({
      prevVal: this.state.displayValue,
      displayValue: 0,
      signVal: sign
    });
  };

  handleEqualsKey = () => {
    let result = 0;
    switch (this.state.signVal) {
      case "+":
        result =
          parseFloat(this.state.prevVal) + parseFloat(this.state.displayValue);
        break;
      case "-":
        result =
          parseFloat(this.state.prevVal) - parseFloat(this.state.displayValue);
        break;
      case "*":
        result =
          parseFloat(this.state.prevVal) * parseFloat(this.state.displayValue);
        break;
      case "/":
        result =
          parseFloat(this.state.prevVal) / parseFloat(this.state.displayValue);
        break;
      default:
        break;
    }
    this.setState({ displayValue: result });
  };
  render() {
    return (
      <div className="display">
        <Display val={this.state.displayValue} />
        <KeyPad
          calKeys={this.state.calKeys}
          onKey={this.handleKey}
          onCKey={this.handleCKey}
          onSignKey={this.handleSignKey}
          onEqualsKey={this.handleEqualsKey}
        />
      </div>
    );
  }
}
export default Calculator;

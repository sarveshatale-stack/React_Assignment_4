import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div>
        <div className="display">
          <span style={{ fontSize: 20 }}>{this.props.val}</span>
        </div>
      </div>
    );
  }
}
export default Display;

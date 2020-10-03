import React from "react";
import App from "./App";
import Calculator from "./components/Calculator";
import DigitalClock from "./components/DigitalClock";
import HorizontalMenu from "./components/HorizontalMenu";
import ReactDOM from "react-dom";
it("renders Calculator", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders Digital Clock", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DigitalClock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders Router", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HorizontalMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

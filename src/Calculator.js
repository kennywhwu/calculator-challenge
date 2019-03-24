import React, { Component } from "react";
import "./Calculator.css";
import Button from "./Button";
import Display from "./Display";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, currentNumber: "", display: "0", action: "add" };
    this.inputKey = this.inputKey.bind(this);
  }

  inputKey(key) {
    let actionRef = { add, subtract, multiply, divide };

    if (key === "C") {
      this.setState({
        total: 0,
        currentNumber: "",
        display: "0",
        action: "add",
      });
    } else if (key === "+") {
      this.setState(st => ({
        total: actionRef[st.action](st.total, parseFloat(st.currentNumber)),
        currentNumber: "",
        display: st.display + key,
        action: "add",
      }));
    } else if (key === "-") {
      this.setState(st => ({
        total: actionRef[st.action](st.total, parseFloat(st.currentNumber)),
        currentNumber: "",
        display: st.display + key,
        action: "subtract",
      }));
    } else if (key === "*") {
      this.setState(st => ({
        total: actionRef[st.action](st.total, parseFloat(st.currentNumber)),
        currentNumber: "",
        display: st.display + key,
        action: "multiply",
      }));
    } else if (key === "/") {
      this.setState(st => ({
        total: actionRef[st.action](st.total, parseFloat(st.currentNumber)),
        currentNumber: "",
        display: st.display + key,
        action: "divide",
      }));
    } else if (key === "=") {
      if (isNaN(this.state.total)) {
        this.setState({ display: "ERROR" });
      } else {
        this.setState(st => ({
          total: actionRef[st.action](st.total, parseFloat(st.currentNumber)),
          currentNumber: 0,
          display: actionRef[st.action](st.total, parseFloat(st.currentNumber)),
          action: "add",
        }));
      }
    } else {
      this.setState(st => ({
        display: st.display === "0" ? key : st.display + key,
        currentNumber: st.currentNumber + key,
      }));
    }
  }

  render() {
    console.log(
      "total",
      this.state.total,
      "currentNumber",
      this.state.currentNumber,
      "display",
      this.state.display,
      "action",
      this.state.action
    );

    return (
      <div className="Calculator">
        <Button text="C" type="clear" handleClick={this.inputKey} />
        <Display display={this.state.display} />
        <Button text="7" type="digit" handleClick={this.inputKey} />
        <Button text="8" type="digit" handleClick={this.inputKey} />
        <Button text="9" type="digit" handleClick={this.inputKey} />
        <Button text="+" type="operator" handleClick={this.inputKey} />
        <Button text="4" type="digit" handleClick={this.inputKey} />
        <Button text="5" type="digit" handleClick={this.inputKey} />
        <Button text="6" type="digit" handleClick={this.inputKey} />
        <Button text="-" type="operator" handleClick={this.inputKey} />
        <Button text="1" type="digit" handleClick={this.inputKey} />
        <Button text="2" type="digit" handleClick={this.inputKey} />
        <Button text="3" type="digit" handleClick={this.inputKey} />
        <Button text="*" type="operator" handleClick={this.inputKey} />
        {/* <div className="spacer" /> */}
        <Button text="0" type="digit" handleClick={this.inputKey} />
        <Button text="." type="digit" handleClick={this.inputKey} />
        <Button text="=" type="equals" handleClick={this.inputKey} />
        <Button text="/" type="operator" handleClick={this.inputKey} />
      </div>
    );
  }
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

export default Calculator;

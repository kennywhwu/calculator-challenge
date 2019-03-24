import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.text);
  }

  render() {
    let buttonStyle = {};
    if (this.props.type === "clear") {
      buttonStyle = {
        backgroundColor: "lightcoral",
        boxShadow: "0px 5px rgb(182, 97, 97)",
        color: "white",
      };
    } else if (this.props.type === "operator") {
      buttonStyle = {
        backgroundColor: "pink",
        boxShadow: "0px 5px rgb(192, 149, 156)",
      };
    } else if (this.props.type === "equals") {
      buttonStyle = {
        backgroundColor: "rgb(194, 238, 144)",
        boxShadow: "0px 5px rgb(150, 184, 112)",
      };
    }
    let textStyle = {};
    if (this.props.type === "clear") {
      textStyle = {
        color: "white",
      };
    }

    return (
      <button className="Button" style={buttonStyle} onClick={this.handleClick}>
        <span style={textStyle}>{this.props.text}</span>
      </button>
    );
  }
}

export default Button;

import React, { Component } from "react";

class GenericLi extends Component {
  state = {};
  render() {
    return (
      <li onClick={() => this.props.onClick(this.props.id)}>
        {this.props.label}
      </li>
    );
  }
}

export default GenericLi;

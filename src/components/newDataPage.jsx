import React, { Component } from "react";

class DataPage extends Component {
  state = {};
  render() {
    return this.getPage(this.props.id);
  }
  getPage(id) {
    return <div />;
  }
  componentDidMount() {
    console.log("Component - Mounted");
  }
}

export default DataPage;

import React, { Component } from "react";
//import $ from "jquery";
import axios from "axios";
class CompaniesPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>Getting a list of already created companies..</div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("Component - Mounted");

    axios
      .get("http://localhost/xampp/lensproject/php/handler.php?mode=1")
      .then(res => {
        console.log(res);
      });
    //console.log(this.state);
  }
}

export default CompaniesPage;

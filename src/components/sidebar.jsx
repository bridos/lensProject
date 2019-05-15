import React, { Component } from "react";
//import "./../css/sidebar.css";
import GenericLi from "./genericLi";
class SideBar extends Component {
  state = {
    lis: [
      { id: 1, label: "Home" },
      { id: 2, label: "Create Company" },
      { id: 3, label: "Create Model" },
      { id: 4, label: "Create Lenses" }
    ]
  };

  render() {
    //const { onClick } = this.props;
    return (
      <ul className="sidebar">
        {this.state.lis.map(li => (
          <GenericLi
            href={li.url}
            id={li.id}
            label={li.label}
            onClick={this.props.onClick}
          />
        ))}
      </ul>
    );
  }
}

export default SideBar;

import React, { Component } from "react";
import ReactDOM from "react-dom";
//import DiameterTableRow from "./components/diameterTableRow";

import "./App.css";
import DiameterTable from "./components/diameterTable";
import DiagramArea from "./components/diagramArea";
import SideBar from "./components/sidebar";
//import LensPage from "./components/lensPage";
import DataPage from "./components/newDataPage";
class App extends Component {
  state = {
    pickedColor: "#FFFFFF",
    diameterOptions: [
      { label: 75, color: "#0000FF" },
      { label: 70, color: "#008000" },
      { label: 65, color: "#FC3004" },
      { label: 60, color: "#F9FC04" },
      { label: 0, color: "#FFFFFF" },
      { label: "N/A", color: "#808080" }
    ],
    tds: []
    // specs = {
    //   minNumHorizontal: 0,
    //   maxNumHorizontal: 2,
    //   minNumVertical: 0,
    //   maxNumVertical: 8,
    //   increment: 0.25
    // }
  };
  handleColorPick = label => {
    const diameters = [...this.state.diameterOptions];
    const index = diameters.indexOf(label);
    const color = diameters[index].color;
    this.setState({ pickedColor: color });
    //console.log(color);
  };
  updateStateOnCreate = id => {
    //console.log("I was created", id);

    let ids = this.state.tds;
    ids.push(id);
    this.setState({ tds: ids });
    //console.log(this.state);
  };
  droptds() {
    const tds = [];
    this.setState({ tds: tds });
  }
  paint = id => {
    //console.log(this.state);
    console.log("Painting: ", id, " with ", this.state.pickedColor);
    document.getElementById(id).style.backgroundColor = this.state.pickedColor;
    console.log(this.state);
  };
  resetFields = () => {
    console.log(this.state.tds);
    for (let i = 0; i < this.state.tds.length; i++) {
      document.getElementById(this.state.tds[i]).style.backgroundColor =
        "#FFFFFF";
    }
  };
  changePage = id => {
    console.log("I was clicked", id);
    let html;
    //
    switch (id) {
      case 1:
        this.droptds();
        html = "";
        break;
      case 2:
        html = (
          <React.Fragment>
            <DataPage id={id} />
          </React.Fragment>
        );
        break;
      case 3:
        break;
      case 4:
        html = (
          <React.Fragment>
            <DiameterTable
              diameterOptions={this.state.diameterOptions}
              onColorPick={this.handleColorPick}
            />
            <DiagramArea
              pickedColor={this.state.pickedColor}
              onCreateItem={this.updateStateOnCreate}
              onClick={this.paint}
            />
            <button
              onClick={this.resetFields}
              style={{ width: "60px", height: "30px" }}
            >
              Reset
            </button>
          </React.Fragment>
        );
        //ReactDOM.render(html, document.getElementById("content"));
        break;
      default:
        break;
    }
    ReactDOM.render(html, document.getElementById("content"));
  };
  render() {
    return (
      //<React.Fragment>
      <div>
        <SideBar onClick={this.changePage} />
        <div>
          <div
            id="content"
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "251px"
            }}
          />
          {/* <DiameterTable
            diameterOptions={this.state.diameterOptions}
            onColorPick={this.handleColorPick}
          />
          <DiagramArea
            pickedColor={this.state.pickedColor}
            onCreateItem={this.updateStateOnCreate}
            onClick={this.paint}
          />
          <button
            onClick={this.resetFields}
            style={{ width: "60px", height: "30px" }}
          >
            Reset
          </button> */}
        </div>
      </div>

      //</React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import DiameterTable from "./diameterTable";
import DiagramArea from "./diagramArea";
class LensPage extends Component {
  state = {};
  render() {
    return (
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
  }
}

export default LensPage;

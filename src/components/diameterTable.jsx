import React, { Component } from "react";
import DiameterTableRow from "./diameterTableRow";
class DiameterTable extends Component {
  // state = {
  //   diameterOptions: [
  //     { color: "#0000FF", label: 75 },
  //     { color: "#008000", label: 70 },
  //     { color: "#FC3004", label: 65 },
  //     { color: "#F9FC04", label: 60 }
  //   ]
  // };
  render() {
    const { onColorPick, diameterOptions } = this.props;
    return (
      <table style={{ border: "1px solid black" }}>
        {diameterOptions.map(diameter => (
          <DiameterTableRow values={diameter} onColorPick={onColorPick} />
        ))}
      </table>
    );
  }
}

export default DiameterTable;

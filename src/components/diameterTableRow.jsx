import React, { Component } from "react";

class DiameterTableRow extends Component {
  //state = { color: "#008000", label: 70 };

  render() {
    const { values, onColorPick } = this.props;
    return (
      <tr>
        <td>{values.label}:</td>
        <td
          className="m-2"
          height="10px"
          width="20px"
          style={{ background: values.color }}
          onClick={() => onColorPick(values)}
        >
          <span />
        </td>
      </tr>
    );
  }
}

export default DiameterTableRow;

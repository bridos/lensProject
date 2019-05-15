import React, { Component } from "react";
import GenericTd from "./genericTd";
class DiagramArea extends Component {
  state = {
    minNumHorizontal: 0,
    maxNumHorizontal: 2,
    minNumVertical: 0,
    maxNumVertical: 8,
    increment: 0.25
  };
  tdStyle = {
    height: "10px",
    width: "34px",
    border: "1px solid black",
    //align: "center",
    textAlign: "center"
  };
  trStyle = {
    border: "1px solid black",
    align: "center"
  };
  render() {
    //const { pickedColor } = this.props;
    const { onCreateItem, onClick } = this.props;
    //console.log(this.props);
    return (
      <React.Fragment>
        <table style={this.trStyle}>
          {this.createDiagram(onCreateItem, onClick)}
        </table>
      </React.Fragment>
    );
  }
  createDiagram = (onCreateItem, onClick) => {
    //console.log("in function");
    //console.log(this.state);
    let rows = [];
    for (
      let j = this.state.minNumVertical;
      j <= this.state.maxNumVertical;
      j += this.state.increment
    ) {
      if (j === 0) {
        //console.log("generating first row");
        rows.push(<tr> {this.generateFirstRow()} </tr>);
      } else {
        // console.log("generating generic row", j);
        rows.push(
          <tr> {this.generateGenericRow(j, onCreateItem, onClick)} </tr>
        );
      }
    }
    return rows;
  };

  generateFirstRow = () => {
    let row = [];
    row.push(<td style={this.tdStyle} />);
    let i = this.state.minNumHorizontal;
    const max = this.state.maxNumHorizontal;
    const step = this.state.increment;
    for (i; i <= max; i += step) {
      row.push(<td style={this.tdStyle}> {i} </td>);
    }
    return row;
  };

  generateGenericRow = (j, onCreateItem, onClick) => {
    let row = [];
    let i = this.state.minNumHorizontal;
    i -= this.state.increment;
    const max = this.state.maxNumHorizontal;
    const step = this.state.increment;
    for (i; i <= max; i += step) {
      if (i === 0 - step) {
        row.push(<td style={this.tdStyle}>{j}</td>);
      } else {
        row.push(
          <GenericTd
            onCreateItem={onCreateItem}
            id={this.generateId(i, j)}
            style={this.tdStyle}
            onClick={onClick}
            //pickedColor={pickedColor}
            //onClick={this.paint}
            //paint={this.paint}
          />
        );
      }
    }
    // console.log("row:", i, row);
    return row;
  };
  generateId(i, j) {
    return i + "," + j;
  }
  //   paint(color, id) {
  //     console.log(" I was clicked", color, id);
  //   }
}

export default DiagramArea;

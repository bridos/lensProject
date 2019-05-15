import React, { Component } from "react";

class GenericTd extends Component {
  constructor(props) {
    super(props);
    props.onCreateItem(props.id);
  }
  render() {
    const { style } = this.props;
    //console.log(this.props.id);

    return (
      <td
        onClick={() => this.props.onClick(this.props.id)}
        style={style}
        id={this.props.id}
        // onCreateItem={() => this.props.onCreateItem(this.props.id)}
      />

      // id={id}
      // pickedColor={pickedColor}
    );
  }
  //   paint = () => {
  //     console.log("I was clicked", this.props.id, this.pickedColor);
  //   };
}

export default GenericTd;

/* eslint-disable */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Row from "./row";

class Main extends PureComponent {
  render() {
    const rows = this.props.outputText.map((row, id) => <Row line={row} key={id} />);

    return (
      <div className="table-container">
        <div className="table">{rows}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    outputText: state.outputText
  };
};

export default connect(mapStateToProps)(Main);

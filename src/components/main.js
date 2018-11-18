import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

Main.propTypes = {
  outputText: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    outputText: state.outputText
  };
};

export default connect(mapStateToProps)(Main);

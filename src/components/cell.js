import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Cell extends PureComponent {
  render() {
    const { status } = this.props;

    return <div className={status ? "cell_active" : "cell"} />;
  }
}

Cell.propTypes = {
  status: PropTypes.number.isRequired
};

export default Cell;

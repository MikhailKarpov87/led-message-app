import React from "react";
import PropTypes from "prop-types";

const Cell = props => <div className={+props.status ? "cell_active" : "cell"} />;

Cell.propTypes = {
  status: PropTypes.string.isRequired
};

export default Cell;

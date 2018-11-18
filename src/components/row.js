import React from "react";
import PropTypes from "prop-types";

import Cell from "./cell";

const Row = props => {
  const { line } = props;

  const renderCells = cells => {
    //  'id < 111' is check for rendering only viewable cells
    return cells.map((letter, id) => id < 111 && <Cell status={letter} key={id} />);
  };

  return <div className="row">{renderCells(line.split(""))}</div>;
};

Row.propTypes = {
  line: PropTypes.string.isRequired
};

export default Row;

import React from "react";
import PropTypes from "prop-types";

import Cell from "./cell";

const Row = props => {
  const renderCells = cells => {
    //  'id < 111' is check for rendering only viewable cells
    return cells.map((letter, id) => id < 111 && <Cell status={letter} key={id} />);
  };

  return <div className="row">{renderCells(props.line)}</div>;
};

Row.propTypes = {
  line: PropTypes.array.isRequired
};

export default Row;

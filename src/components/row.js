import React from "react";
import Cell from "./cell";

const Row = props => {
  props.line.length < 111 && props.line.padEnd(111, "0");
  const cellsArray = props.line.split("");

  const renderCells = cells => {
    return cells.map((letter, id) => id < 111 && <Cell status={letter} key={id} />);
  };

  return <div className="row">{renderCells(cellsArray)}</div>;
};

export default Row;

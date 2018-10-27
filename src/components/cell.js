import React from "react";

const Cell = props => <div className={+props.status ? "cell_active" : "cell"} />;

export default Cell;

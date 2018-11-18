import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateText, updateOutputText, moveText, toggleMoveText } from "../actions";

class Input extends Component {
  handleClick = isMoving => {
    isMoving = !isMoving ? setInterval(this.props.moveText, 80) : clearInterval(isMoving);
    this.props.toggleMoveText(isMoving);
  };

  render() {
    const { updateText, updateOutputText, text, isMoving } = this.props;

    return (
      <div className="input-container">
        <input
          type="text"
          placeholder="Just type it here..."
          value={text}
          onChange={event => updateText(event.target.value)}
        />
        <button onClick={() => updateOutputText(text)}>UPDATE</button>
        <button onClick={() => this.handleClick(isMoving)}>{isMoving ? "STOP" : "START"}</button>
      </div>
    );
  }
}

Input.propTypes = {
  updateText: PropTypes.func.isRequired,
  updateOutputText: PropTypes.func.isRequired,
  toggleMoveText: PropTypes.func.isRequired,
  moveText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isMoving: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

const mapStateToProps = state => {
  return {
    text: state.text,
    isMoving: state.isMoving
  };
};

export default connect(
  mapStateToProps,
  { updateText, updateOutputText, toggleMoveText, moveText }
)(Input);

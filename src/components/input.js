import React, { Component } from "react";
import { connect } from "react-redux";
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
        <button onClick={event => updateOutputText(text)}>UPDATE</button>
        <button onClick={() => this.handleClick(isMoving)}>{isMoving ? "STOP" : "RUN"}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text,
    isMoving: state.isMoving
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateText: text => dispatch(updateText(text)),
    updateOutputText: text => dispatch(updateOutputText(text)),
    toggleMoveText: status => dispatch(toggleMoveText(status)),
    moveText: () => dispatch(moveText())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

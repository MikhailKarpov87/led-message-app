import React, { Component } from "react";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createStore } from "redux";

import Main from "./components/main";
import Input from "./components/input";

import "./App.css";

const initialState = {
  text: "",
  outputText: [],
  isMoving: false
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main />
          <Input />
        </div>
      </Provider>
    );
  }
}

export default App;

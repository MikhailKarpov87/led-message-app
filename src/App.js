import React from "react";
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

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Main />
        <Input />
      </>
    </Provider>
  );
};

export default App;

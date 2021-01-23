import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Todo from "./component/Todo";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;

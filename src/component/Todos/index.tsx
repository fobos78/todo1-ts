import React from "react";
import { useSelector } from "react-redux";

import "./Todos.css";

function Todos() {
  const todos: Array<string> = useSelector((state: Array<string>) => state);
  return (
    <div className="Todos">
      {todos.map((el) => (
        <h3 key={Math.random()}>{el}</h3>
      ))}
    </div>
  );
}

export default Todos;

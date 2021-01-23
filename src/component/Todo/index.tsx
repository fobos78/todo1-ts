import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

import './Todo.css';
import Todos from '../Todos';
import {addTodo} from '../../redux/actions';

function Todo() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  function changTodo(event: any){
    setTodo(event.target.value);
  }
  function changTodos(){
    dispatch(addTodo(todo));
    setTodo('');
  }

  return (
    <div className="Todo">
      <input onChange={changTodo} value={todo} />
      <button type="button" onClick={changTodos}>Add</button>
      <Todos />
    </div>
  );
}

export default Todo;
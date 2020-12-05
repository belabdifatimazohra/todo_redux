import React from "react";
import { useState } from "react";
// Import function actions
import {addTodo} from '../redux/actions/ToDoActions'
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux'
function Addtask() {
  const [input, setInput] = useState("");
  // dispatch info state
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };


  return (
    <form >
      <input
        placeholder="Add a todo"
        onChange={handleChange}
        name="text"
        className="todo-input"
      />

      <button className="todo-button" onClick={(e) => {
        e.preventDefault();
        dispatch(addTodo({ id: uuidv4(), task: input, check: false }))
      }}>
        Add todo
      </button>
    </form>
  );
}

export default Addtask;

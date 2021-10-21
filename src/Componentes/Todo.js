import React, { useState } from "react";
import firebase from "firebase";
// import "../App.css";

export default function Todo({ todo }) {
  const [newTitle, setNewTitle] = useState("");

  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  const editTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      title: newTitle,
    });
  };
  const handleChange = (e) => {
    //e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
  <div>
    <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      
      <div>       
        <button className="button-complete task-button icono" onClick={completeTodo}>
          <i className="fa fa-check-circle"></i>
        </button>
        <button className="button-edit task-button icono" onClick={editTodo}>
          <i className="fa fa-edit"></i>
        </button>
        <button className="button-delete task-button icono" onClick={deleteTodo}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
}


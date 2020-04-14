// Import Required Files And Packages Here
import React from "react";
import './ToDoList.css'

// Defining React functional Component Here
function ToDoList(props) {
  return (
    <ul className="list">
      {props.items.map((item) => (
        <li key={item.id}>{item.data}</li>
      ))}
    </ul>
  );
}

export default ToDoList;

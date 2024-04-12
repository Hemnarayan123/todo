import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [listValues, setListValues] = useState([]);

  const inputTarget = (event) => {
    setInputValue(event.target.value);
  };

  const addInputValue = () => {
    if (inputValue !== "") {
      setListValues([...listValues, { id: Date(), text: inputValue }]);
    }
    setInputValue("");
  };

  const deleteSelectValue = (id) => {
    const updateListValues = listValues.filter(list => list.id !== id);
    setListValues(updateListValues);
  };
 

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={inputTarget}
          placeholder="add todo here......."
        />
        <button onClick={addInputValue}>Add</button>
      </div>

      <ul className="todo-list">
        {listValues.map(item => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => deleteSelectValue(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

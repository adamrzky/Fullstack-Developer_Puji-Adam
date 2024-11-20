import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;

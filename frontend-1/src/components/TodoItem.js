import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoItem = ({ id, text, completed }) => {
  const { toggleTodo, updateTodo, deleteTodo } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    if (newText.trim()) {
      updateTodo(id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li
      className={`flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md ${
        completed ? "line-through text-gray-400 bg-gray-200" : ""
      }`}
    >
      {isEditing ? (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleEdit}
            className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <span
            onClick={() => toggleTodo(id)}
            className={`cursor-pointer ${
              completed ? "text-gray-500" : "text-black"
            }`}
          >
            {text}
          </span>

          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(id)}
              className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => toggleTodo(id)}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                completed
                  ? "text-gray-600 bg-yellow-300 hover:bg-yellow-400"
                  : "text-white bg-green-500 hover:bg-green-600"
              }`}
            >
              {completed ? "Undo" : "Done"}
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;

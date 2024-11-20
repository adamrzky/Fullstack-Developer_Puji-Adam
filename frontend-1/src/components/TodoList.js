import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TodoList = () => {
  const { todos } = useTodoContext();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
     
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

   
      <TransitionGroup component="ul" className="space-y-4">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <CSSTransition
              key={todo.id}
              timeout={300}
              classNames="todo-item"
            >
              <TodoItem {...todo} />
            </CSSTransition>
          ))
        ) : (
          <p className="text-center text-gray-500">List Task</p>
        )}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;

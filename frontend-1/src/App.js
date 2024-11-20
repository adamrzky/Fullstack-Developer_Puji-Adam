import React from "react";
import { TodoProvider } from "./context/TodoContext";
import QuoteList from "./components/QuoteList";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            ToDo App
          </h1>
          <TodoInput />
          <TodoList />
          <QuoteList />
          </div>
      </div>
    </TodoProvider>
  );
};

export default App;

import React, {createContext, useState} from 'react';
import './App.css';
import TodoListComponent from "./components/TodoListComponent";
import {contextType, todosTypes} from "./types/types";

export const TodoContext = createContext<contextType | null>(null)

function App() {

  const [inputValue, setInputValue] = useState<string>("")
  const [todos, setTodos] = useState<todosTypes[]|[]>([])

    const context : contextType= {
        text : "TodoList",
        inputValue,
        setInputValue,
        setTodos,
        todos,
    }
  return (
      <TodoContext.Provider value ={context}>
        <div className="App">
          <TodoListComponent/>
        </div>
      </TodoContext.Provider>
  );
}

export default App;

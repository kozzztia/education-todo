import React, {createContext, useState} from 'react';
import './App.css';
import TodoListComponent from "./components/TodoListComponent";
import {contextType} from "./types/types";


export const TodoContext = createContext<contextType | null>(null)
function App() {
  const [doneValue, setDoneValue] = useState<boolean>(false)
    const context : contextType= {
        doneValue,
        text : "string",
    }
  return (
      <TodoContext.Provider value ={context}>
        <div className="App">

          <TodoListComponent/>

            <button
                onClick={(e)=>{
                    e.preventDefault()
                    setDoneValue((prevState)=>!prevState)
                    console.log(doneValue)
                }}
            >
                btn
            </button>
        </div>
      </TodoContext.Provider>
  );
}

export default App;

import React, {createContext, useState} from 'react';
import './App.css';
import TodoListComponent from "./components/TodoListComponent";
export const TodoContext = createContext<boolean | null>(false)

function App() {
  const [doneValue, setDoneValue] = useState<boolean>(false)

  return (
      <TodoContext.Provider value={doneValue}>
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

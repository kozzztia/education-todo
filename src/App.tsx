import React, {useState} from 'react';
import './App.css';
import TodoContainer from "./components/TodoContainer";
import {contextType} from "./types/types";

export const Context = React.createContext<[] | contextType>([])



function App() {
    const [inputValue , setInputValue] = useState<string>("");
    const context : contextType = {
        inputValue,
        setInputValue,
    }
    return (
      <Context.Provider value ={context}>
        <div className="App">
            <TodoContainer/>
        </div>
      </Context.Provider>
  );
}

export default App;

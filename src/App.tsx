import React, {useState} from 'react';
import './App.css';
import TodoContainer from "./components/TodoContainer";
import ShowBtn from "./components/ShowBtn";
import TodoContextProvider from "./context/TodoContextProvider";





function App() {

    return (
        <TodoContextProvider>
            <div className="App">
                <TodoContainer/>
                <ShowBtn/>
            </div>
        </TodoContextProvider>
  );
}

export default App;
